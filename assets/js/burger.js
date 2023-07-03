const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");
hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    nav.classList.toggle("active");
}, false);