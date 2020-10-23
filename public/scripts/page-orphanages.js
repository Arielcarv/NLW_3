// tipos de dados no javascript
// String ""
// Number 01
// Object {}
// boolean true or false
// Array [] 


const map = L.map('mapid').setView([-21.7587303,-41.3267187], 14.5);


// Create and add Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map)
    

// Create icon
const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Function to create marker
function addMarker({id, name, lat, lng}) {

    // Create Popup Overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>`)

    // create and add marker
    L
    .marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
console.log(orphanagesSpan)
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id, 
        name: span.dataset.name, 
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }
    
    addMarker(orphanage)
})