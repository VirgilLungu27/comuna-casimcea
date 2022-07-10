const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

openBtn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

closeBtn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

rightBtn.addEventListener('click', () => {
    activeSlide++;
    if(activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    
    setBgToBody();
    setActiveSlide();
})

leftBtn.addEventListener('click', () => {
    activeSlide--;
    if(activeSlide < 0) {
        activeSlide = slides.length-1;
    }
    
    setBgToBody();
    setActiveSlide();
})

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;    
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
}