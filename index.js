"use strict"

let btnMenu = document.querySelector("#btn-menu")
btnMenu.addEventListener("click", mostrarMenu);

let contact = document.querySelector("#contacto")
contact.addEventListener("click", mostrarContact);

let textEl = document.querySelector('#text');
const text = 'If there is a Will there is a Way         ';
let idx = 1;
let speed = 150;

let btnCierra = document.querySelector("#btn-cierra");
let btnAdelanta = document.querySelector("#btn-adelanta");
let btnRetrocede = document.querySelector("#btn-retrocede");
let imagenes = document.querySelectorAll('#galeria img');
let lightBox = document.querySelector('#contenedor-principal');
let imgActiva = document.querySelector('#img-activa');
let indiceImg = 0;

writeText();

//ABRIR LIGHT BOX

const abreLightBox = (e) => {
    imgActiva.src = e.target.src;
    lightBox.style.display = 'flex';
    indiceImg = Array.from(imagenes).indexOf(e.target);
};

imagenes.forEach(imagen => {
    imagen.addEventListener('click', abreLightBox);
});

// CERRAR LIGHTBOX

btnCierra.addEventListener('click', (e) =>{
    lightBox.style.display = 'none';
})

//ADELANTA IMAGEN

const adelantaImagen = () => {
    if(indiceImg === imagenes.length - 1){
        indiceImg = -1
    }
    imgActiva.src = imagenes[indiceImg + 1].src;
    indiceImg++;
};

// RETROCEDE IMAGEN

const retrocedeImagen = () => {
    if(indiceImg === 0){
        indiceImg = imagenes.length;
    }
    imgActiva.src = imagenes[indiceImg - 1].src;
    indiceImg--;
};

btnAdelanta.addEventListener('click', adelantaImagen);
btnRetrocede.addEventListener('click', retrocedeImagen);

if(window.innerWidth>800){
    animation('.nav','right');
    animation('.header__title','left');
    animation('.curriculum a','bottom');
}

function mostrarMenu() {
    let menu = document.querySelector("#menu");
    menu.classList.toggle("ocultar")
}

function mostrarContact() {
    let iconos = document.querySelector("#iconos");
    iconos.classList.toggle("desactive");
}

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

function animation (element, orientation){
    window.sr = ScrollReveal()
    sr.reveal(element,{
        origin: orientation,
        interval: 106,
        duration: 2000,
        distance: '150%',
    })
};


