// const tshirt = []
// const longSleeve = []
// const shorts = []
// const pants = []
// const dress = []
// const skitt = []
// const sweatshirt = []
// const hoodie = []
// const jacket = []
// const socks = []
// const shoes = []
// const hat = []
// const sunglasses = []
// const watch = []

const clothes = [
    'img/gorillaz.webp',
    'img/jcole.webp',
    'img/nasa_hat.webp',
    'img/neutral_sox.webp',
    'img/nintendo_hat.webp',
    'img/no_face.webp',
    'img/nujabes_hat.webp',
    'img/ratm.webp',
    'img/tiedye_sox.webp',
    'img/wool_sox.webp',
]

const pic = document.querySelector('section');

function showImage(){
    document.getElementById("images").src = clothes[Math.floor(Math.random()*clothes.length)]
    var a = Math.floor(Math.random()*clothes.length);
    console.log(a)
    var img = clothes[a];
    console.log(img)
}