function changeImage() {
    let img = document.querySelector(".img-banner");
    let width = window.innerWidth;
    let breakPoint = 768;

    if (width <= breakPoint) {
        img.src = img.getAttribute('data-src-mobile');
    } else {
        img.src = img.getAttribute('data-src-desktop');
    }
}

window.addEventListener("load", changeImage);
window.addEventListener("resize", changeImage);