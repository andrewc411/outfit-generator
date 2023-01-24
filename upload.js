const img_input = document.querySelector("#img_input");
var upload_img = "";

img_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        upload_img = reader.result;
        document.querySelector("#img_display").style.backgroundImage = `url(${upload_img})`;
    })
    reader.readAsDataURL(this.files[0]);
})