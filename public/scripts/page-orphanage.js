//Customize Options
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    ZoomControl: false,
}

//Create Map
const map = L.map('mapid', options).setView([-27.222633,-49.6455874], 16);


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


// create and add marker
L.marker([-27.222633,-49.6455874], { icon })
    .addTo(map)


/* Image Galery */

function selectImage(event) {
    const button = event.currentTarget
    console.log (button.children)

    // remover todas as classe .active
    const buttons = document.querySelectorAll('.images button')
    console.log(buttons)
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active')
    }

    // Selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    
    // atualizar o container de imagem
    imageContainer.src = image.src
    // adicionar a classe .active para o botão clicado
    button.classList.add('active')
}