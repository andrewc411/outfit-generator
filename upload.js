let fileInput = document.getElementById('file-input');
let imageContainer = document.getElementById('images');
let numOfFiles = document.getElementById('num-of-files');

function preview() {
    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length}
    Files Selected`;

    for (i of fileInput.files) {
        let reader = new FileReader();
        let figure = document.createElement('figure');
        let figCap = document.createElement('figcaption');
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload =()=> {
            let img = document.createElement('img');
            img.setAttribute('src' , reader.result);
            figure.insertBefore(img, figCap);
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
}
}


// const img_input = document.querySelector("#img_input");
// var upload_img = "";

// img_input.addEventListener("change", function(){
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         upload_img = reader.result;
//         document.querySelector("#img_display").style.backgroundImage = `url(${upload_img})`;
//     })
//     reader.readAsDataURL(this.files[0]);
// })