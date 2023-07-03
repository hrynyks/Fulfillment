// burger

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");
hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    nav.classList.toggle("active");
}, false);


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("myBtn").style.display = "flex";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}