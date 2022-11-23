const tshirt = [
    'img/jcole.webp',
    'img/gorillaz.webp',
    'img/no_face.webp',
    'img/ratm.webp',
    'img/pulpfiction.avif',
    'img/jcoleisbetter.webp',
    'img/immortal.webp'
]
// const longSleeve = []
// const shorts = []
// const pants = []
// const dress = []
// const skitt = []
// const sweatshirt = []
// const hoodie = []
// const jacket = []
const socks = [
    'img/champion_sox.jpg',
    'img/idc_sox.jpg',
    'img/mf_sox.jpg',
    'img/neutral_sox.webp',
    'img/retrostripetube_sox.jpg',
    'img/tiedye_sox.webp',
    'img/wool_sox.webp'
]
const shoes = [
    'img/airmax90.jpg',
    'img/darknightadidas.jpg',
    'img/hiking_boots.jpg',
    'img/nautica_boots.jpg',
    'img/newbalance.jpg',
    'img/nikecartoon.webp',
    'img/nikehuarache.jpg',
    'img/nikesbdunks.jpg',
    'img/redbottom_heels.webp',
    'img/vans.jpg'
]
const hat = [
    'img/nasa_hat.webp',
    'img/nujabes_hat.webp',
    'img/nintendo_hat.webp',
    'img/ghostType.webp',
    'img/atribecalled_.webp',
    'img/onmute_hat.webp',
    'img/bucket_hat.webp',
    'img/akatsuki_bucket.webp',
    'img/alienAbduction.webp'
]
// const sunglasses = []
const watch = [
    'img/applewatch.jpg',
    'img/blackgoldcasio.jpg',
    'img/michaelkors.jpg',
    'img/stainlessblackface.jpg',
    'img/strangerthings.jpg',
    'img/whitecasio.jpg'
]

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