"use strict"

let btnMenu = document.querySelector("#btn-menu")
btnMenu.addEventListener("click", mostrarMenu);

let textEl = document.querySelector('#text');
const text = 'If there is a Will there is a Way         ';
let idx = 1;
let speed = 150;

let btnSig = document.querySelector("#btnSig").addEventListener('click', ()=>carrousel(1));
let btnAnt = document.querySelector("#btnAnt").addEventListener('click', ()=>carrousel(-1));;
let img = document.querySelector("#img");

// tengo que buscar la forma de encontrar la cantidad de imagenes que tiene la card

let arrayImage = [1,2,3];
let extencion = '.jpeg';
let src = img.getAttribute('src');
let counter = 0;

writeText();
carrousel();


if(window.innerWidth>800){
    animation('.nav','right');
    animation('.header__title','left');
    animation('.curriculum a','bottom');
}
function mostrarMenu() {
    let menu = document.querySelector("#menu");
    menu.classList.toggle("ocultar")
}

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


function carrousel(val){

    if(counter == arrayImage.length){
        counter = 0;
    }
    console.log('entre');
    img.setAttribute('src', src+arrayImage[counter]+extencion);
    counter++

    console.log(src);
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





