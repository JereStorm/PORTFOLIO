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
console.log(imagenes);
let lightBox = document.querySelector('#contenedor-principal');
let imgActiva = document.querySelector('#img-activa');
let indiceImg = 0;

//ABRIR LIGHT BOX

const abreLightBox = (e) => {
    imgActiva.src = e.target.src;
    lightBox.style.display = 'flex';
    indiceImg = Array.from(imagenes).indexOf(e.target);
    console.log('indiceImg: ',indiceImg);
};

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
imagenes.forEach(imagen => {
    imagen.addEventListener('click', abreLightBox);
});

// let btnSig = document.querySelector("#btnSig").addEventListener('click', ()=>carrousel(1));
// let btnAnt = document.querySelector("#btnAnt").addEventListener('click', ()=>carrousel(-1));;
// let img = document.querySelector("#img");

// tengo que buscar la forma de encontrar la cantidad de imagenes que tiene la card

// let arrayImage = [0,1,2];
// let extencion = '.jpeg';
// let src = img.getAttribute('src');
// let counter = 0;

// img.setAttribute('src', src+arrayImage[counter]+extencion);


writeText();
// carrousel();

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


// function carrousel(val = 1){

//     if(counter == arrayImage.length){
//         counter = 0;
//     }
    
//     if(counter == -1){
//         counter = (arrayImage.length - 1)
//     }

//     counter = counter + val;

//     if(counter == arrayImage.length){
//         counter = 0;
//     }
//     if(counter == -1){
//         counter = (arrayImage.length - 1)
//     }

//     img.setAttribute('src', src+arrayImage[counter]+extencion);
// }

function animation (element, orientation){
    window.sr = ScrollReveal()
    sr.reveal(element,{
        origin: orientation,
        interval: 106,
        duration: 2000,
        distance: '150%',
    })
};


