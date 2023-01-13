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
    'img/urbanshirt.jpg',
    'img/demonslayerjersey.webp'
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
    'img/jean_shorts.jpg',
    'img/leopardprint_shorts.jpg',
    'img/menyoga_shorts.webp',
    'img/nikeair_shorts.jpg',
    'img/redbooty_shorts.webp',
    'img/streetwear_shorts.jpg',
    'img/womenmesh_shorts.webp',
    'img/workout_shorts.webp',
    'img/alienswimwear_shorts.jpg'
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
    'img/floral2_dress.jpg',
    'img/frillhemknit_dress.jpg',
    'img/knittedsweater_dress.jpg',
    'img/green_dress.webp'
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
    'img/thasher_hoodie.jpg',
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
//Function randomly selects shirt picture and displays it
function findShirt() {
    document.getElementById("shirt-images").src = tshirt[Math.floor(Math.random() * tshirt.length)]
    var a = Math.floor(Math.random() * tshirt.length);
    console.log(a)
    var img = tshirt[a];
    console.log(img)
}
//Displays hidden img
function showShirt() {
    var x = document.getElementById("shirt-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    // } else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects longSleeve picture and displays it
function findLong() {
    document.getElementById("long-images").src = longSleeve[Math.floor(Math.random() * longSleeve.length)]
    var a = Math.floor(Math.random() * longSleeve.length);
    console.log(a)
    var img = longSleeve[a];
    console.log(img)
}

//Displays hidden img
function showLong() {
    var x = document.getElementById("long-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
//      else {
//       x.style.display = "none";
//     }
  }
//Function randomly selects shorts picture and displays it
function findShorts() {
    document.getElementById("shorts-images").src = shorts[Math.floor(Math.random() * shorts.length)]
    var a = Math.floor(Math.random() * shorts.length);
    console.log(a)
    var img = shorts[a];
    console.log(img)
}

//Displays hidden img
function showShorts() {
    var x = document.getElementById("shorts-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects pants picture and displays it
function findPants() {
    document.getElementById("pants-images").src = pants[Math.floor(Math.random() * pants.length)]
    var a = Math.floor(Math.random() * pants.length);
    console.log(a)
    var img = pants[a];
    console.log(img)
}
//Displays hidden img
function showPants() {
    var x = document.getElementById("pants-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects dress picture and displays it
function findDress() {
    document.getElementById("dress-images").src = dress[Math.floor(Math.random() * dress.length)]
    var a = Math.floor(Math.random() * dress.length);
    console.log(a)
    var img = dress[a];
    console.log(img)
}
//Displays hidden img
function showDress() {
    var x = document.getElementById("dress-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects skirt picture and displays it
function findSkirt() {
    document.getElementById("skirt-images").src = skirt[Math.floor(Math.random() * skirt.length)]
    var a = Math.floor(Math.random() * skirt.length);
    console.log(a)
    var img = skirt[a];
    console.log(img)
}
//Displays hidden img
function showSkirt() {
    var x = document.getElementById("skirt-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects sweaters picture and displays it
function findSweater() {
    document.getElementById("sweatshirt-images").src = sweatshirt[Math.floor(Math.random() * sweatshirt.length)]
    var a = Math.floor(Math.random() * sweatshirt.length);
    console.log(a)
    var img = sweatshirt[a];
    console.log(img)
}
//Displays hidden img
function showSweater() {
    var x = document.getElementById("sweatshirt-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects hoodie picture and displays it
function findHoodie() {
    document.getElementById("hoodie-images").src = hoodie[Math.floor(Math.random() * hoodie.length)]
    var a = Math.floor(Math.random() * hoodie.length);
    console.log(a)
    var img = hoodie[a];
    console.log(img)
}
//Displays hidden img
function showHoodie() {
    var x = document.getElementById("hoodie-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects jacket picture and displays it
function findJackie() {
    document.getElementById("jacket-images").src = jacket[Math.floor(Math.random() * jacket.length)]
    var a = Math.floor(Math.random() * jacket.length);
    console.log(a)
    var img = jacket[a];
    console.log(img)
}
//Displays hidden img
function showJackie() {
    var x = document.getElementById("jacket-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects socks picture and displays it
function findSox() {
    document.getElementById("socks-images").src = socks[Math.floor(Math.random() * socks.length)]
    var a = Math.floor(Math.random() * socks.length);
    console.log(a)
    var img = socks[a];
    console.log(img)
}
//Displays hidden img
function showSox() {
    var x = document.getElementById("socks-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects shoes picture and displays it
function findKicks() {
    document.getElementById("shoes-images").src = shoes[Math.floor(Math.random() * shoes.length)]
    var a = Math.floor(Math.random() * shoes.length);
    console.log(a)
    var img = shoes[a];
    console.log(img)
}
//Displays hidden img
function showKicks() {
    var x = document.getElementById("shoes-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects hat picture and displays it
function findCap() {
    document.getElementById("hat-images").src = hat[Math.floor(Math.random() * hat.length)]
    var a = Math.floor(Math.random() * hat.length);
    console.log(a)
    var img = hat[a];
    console.log(img)
}
//Displays hidden img
function showCap() {
    var x = document.getElementById("hat-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects sunglasses picture and displays it
function findShades() {
    document.getElementById("sunglasses-images").src = sunglasses[Math.floor(Math.random() * sunglasses.length)]
    var a = Math.floor(Math.random() * sunglasses.length);
    console.log(a)
    var img = sunglasses[a];
    console.log(img)
}
//Displays hidden img
function showShades() {
    var x = document.getElementById("sunglasses-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Function randomly selects jacket picture and displays it
function findWatch() {
    document.getElementById("watch-images").src = watch[Math.floor(Math.random() * watch.length)]
    var a = Math.floor(Math.random() * watch.length);
    console.log(a)
    var img = watch[a];
    console.log(img)
}
//Displays hidden img
function showWatch() {
    var x = document.getElementById("watch-images");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    // else {
    //   x.style.display = "none";
    // }
  }
//Clears the img display
function clearImages(){
  var imgEl = document.getElementsByClassName("img");

  Array.from(imgEl).forEach((x) => {
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  })
}