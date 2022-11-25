// import clothes from './array.js'

const tshirt = [
    'img/jcole.webp',
    'img/gorillaz.webp',
    'img/no_face.webp',
    'img/ratm.webp',
    'img/jcoleisbetter.webp',
    'img/immortal.webp',
    'img/cartoonprint.jpg',
    'img/colorblock_shirt.jpg',
    'img/jordanjersey.jpg',
    'img/metallicatiedye.jpg',
    'img/royals.jpg',
    'img/shroomshirt.jpg',
    'img/tribalshirt.jpg',
    'img/urbanshirt.jpg'
]
const longSleeve = [
    'img/blackwhitestripe_long.jpg',
    'img/croppedgreen_long.jpg',
    'img/flannel1_long.jpg',
    'img/flannel2_long.jpg',
    'img/flannel3_long.jpg',
    'img/flannel4_long.jpg',
    'img/ghostlove_long.webp',
    'img/nikecactus_long.jpg',
    'img/patch_long.jpg',
    'img/thasher_long.webp',
    'img/womensoftblue_long.jpg',
    'img/womenblack_long.jpg',
    'img/womenwhite_long.jpg'
]
const shorts = [
    'img/elasticCargo_shorts.jpg',
    'img/floralbasketball_shorts.webp',
    'img/harem_shorts.webp',
    'img/jean_shorts.webp',
    'img/leopardprint_shorts.jpg',
    'img/menyoga_shorts.webp',
    'img/nikeair_shorts.jpg',
    'img/redbooty_shorts.webp',
    'img/streetwear_shorts.jpg',
    'img/womenmesh_shorts.webp',
    'img/workout_shorts.webp'
]
const pants = [
    'img/arthoedenim.jpg',
    'img/bluehues_pants.jpg',
    'img/cargo_joggers.jpg',
    'img/cat_pants.jpg',
    'img/contrastcargo_pants.jpg',
    'img/corduroypatch_pants.jpg',
    'img/women_joggers.webp',
    'img/womenjean_pants.jpg',
    'img/lululeggings.jpg'
]
const dress = [
    'img/blackflutter_dress.jpg',
    'img/blueformfit_dress.jpg',
    'img/blueoffshoulder_dress.jpg',
    'img/drapedsatin_dress.jpg',
    'img/floral_dress.jpg',
    'img/floral1_dress.jpg',
    'img/flora2_dress.jpg',
    'img/frillhemknit_dress.jpg',
    'img/knittedsweater_dress.jpg'
]
const skirt = [
    'img/blackbuckle_skirt.jpg',
    'img/bluefloral_skirt.jpg',
    'img/corduroybutton_skirt.jpg',
    'img/denim_skirt.jpg',
    'img/floralslit_skirt.jpg',
    'img/meshfloral_skirt.jpg',
    'img/plaidpleated_skirt.jpg',
    'img/splitfloral_skirt.jpg'
]
const sweatshirt = [
    'img/fleece_sweatshirt.jpg',
    'img/gt_sweatshirt.avif',
    'img/hardrock_sweatshirt.jpg',
    'img/patch_sweatshirt.jpg',
    'img/unwell_sweatshirt.jpg',
    'img/bdayjesus_sweater.jpg'
]
const hoodie = [
    'img/colorblock_hoodie.jpg',
    'img/floraljapan_hoodie.jpg',
    'img/itachi_hoodie.jpg',
    'img/patch_hoodie.jpg',
    'img/shroom_hoodie.jpg',
    'img/streetwear_hoodie.jpg',
    'img/thrasher_hoodie.jpg',
    'img/tiedye_hoodie.jpg'
]
const jacket = [
    'img/comfycozy_jacket.jpg',
    'img/corduroy_jacket.jpg',
    'img/denim_jacket.jpg',
    'img/leather_jacket.jpg',
    'img/nasa_jacket.jpg',
    'img/nikevintage_jacket.jpg',
    'img/streetwear_jacket.jpg',
    'img/windbreaker_jacket.jpg',
    'img/wool_jacket.jpg'
]
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
const sunglasses = [
    'img/dusty_sunglasses.jpg',
    'img/giana_sunglasses.jpg',
    'img/goldframe_sunglasses.jpg',
    'img/pattinson_sunglasses.jpg',
    'img/pink_sunglasses.jpg',
    'img/pixel_sunglasses.jpg',
    'img/prada_sunglasses.jpg',
    'img/rayban_sunglasses.jpg'
]
const watch = [
    'img/applewatch.jpg',
    'img/blackgoldcasio.jpg',
    'img/michaelkors.jpg',
    'img/stainlessblackface.jpg',
    'img/strangerthings.jpg',
    'img/whitecasio.jpg'
]

// const clothes = [
//     'img/gorillaz.webp',
//     'img/jcole.webp',
//     'img/nasa_hat.webp',
//     'img/neutral_sox.webp',
//     'img/nintendo_hat.webp',
//     'img/no_face.webp',
//     'img/nujabes_hat.webp',
//     'img/ratm.webp',
//     'img/tiedye_sox.webp',
//     'img/wool_sox.webp',
// ]

const pic = document.querySelector('section');

function showShirt() {
    document.getElementById("shirt-images").src = tshirt[Math.floor(Math.random() * tshirt.length)]
    var a = Math.floor(Math.random() * tshirt.length);
    console.log(a)
    var img = tshirt[a];
    console.log(img)
}