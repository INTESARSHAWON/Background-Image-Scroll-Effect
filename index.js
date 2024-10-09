const bgImageEl = document.querySelector("#bg-image");

window.addEventListener("scroll", ()=>{
    updateImage();
});

function updateImage() {
    bgImageEl.style.opacity = 1 - window. pageYOffset / 900;
    //800-900 erokom boro ekta sonkha diye vaag korbo 
    // console.log(window. pageYOffset,1 - window. pageYOffset / 800);
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset/12 + "%";
    // emni ekta sonkha diye vaag dilei zoomout hoye jabe. % ta emni add korsi
    //background size 160 deya ache, oita theke 160
}

