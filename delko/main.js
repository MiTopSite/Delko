const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('white');
    } else {
        header.classList.remove('white');
    }
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});