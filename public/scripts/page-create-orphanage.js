//Create Map
const map = L.map('mapid').setView([-21.7587303,-41.3267187], 14);


// Create and add Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)
    

// Create icon
const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

// Initialize empty variable
let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remove icon
    marker && map.removeLayer(marker);

    // Add icon Layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// Photos Uploader

function addPhotoField () {
    // Get photo container #images
    const container = document.querySelector('#images')

    // Get container to double .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Clone the last selected image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verify empty form, if it is... do not add to container
    const input = newFieldContainer.children[0]  
    if (input.value == "") {return}

    // Clean before add
    input.value = ""

    // Add image clone to container #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Clean field value
    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return}

    // Delete field
    span.parentNode.remove();
}

// Yes or No Selection

function toggleSelect(event) {  
    // remove '.active' class from buttons
    document.querySelectorAll('.button-select button')
    .forEach( function(button) { 
       button.classList.remove('active')
    })

    // Put '.active' class on the button
    const button = event.currentTarget
    button.classList.add('active')
    
    // Update the hidden input to selected value
    const input = document.querySelector('[name="open_on_weekends"]')
    
    
    // Verify
    input.value = button.dataset.value
}

function validate(event) {
    // Validade if lat and lng are filled
    const needsLatAndLng = event.latlng.length <= 0
    if (needsLatAndLng) {
        event.preventDefault()
        alert ('Escolha um ponto no mapa')
    }
}