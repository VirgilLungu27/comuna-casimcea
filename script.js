const API_URL = https://www.meteoromania.ro/wp-json/meteoapi/v2/starea-vremii;

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const weather = document.getElementById('weather');

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

async function getWeather(url) {
    const res = await fetch(url);
    const data = await res.json();

    showWeather(data.results);
}

function showWeather(weather) {
    weather.innerHTML = '';

    weather.forEach((parameter) => {
        const { nebulozitate, tempe, vant } = parameter;

    })
}