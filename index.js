"use strict"

let btnMenu = document.querySelector("#btn-menu")
btnMenu.addEventListener("click", mostrarMenu);

let contact = document.querySelector("#contacto")
contact.addEventListener("click", mostrarContact);

let textEl = document.querySelector('#text');
const text = 'If there is a Will there is a Way         ';
let idx = 1;
let speed = 150;

let btnSig = document.querySelector("#btnSig").addEventListener('click', ()=>carrousel(1));
let btnAnt = document.querySelector("#btnAnt").addEventListener('click', ()=>carrousel(-1));;
let img = document.querySelector("#img");

// tengo que buscar la forma de encontrar la cantidad de imagenes que tiene la card

let arrayImage = [0,1,2];
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

img.setAttribute('src', src+arrayImage[counter]+extencion);


function carrousel(val = 1){

    
    if(counter == arrayImage.length){
        counter = 0;
    }
    
    if(counter == -1){
        counter = (arrayImage.length - 1)
    }

    counter = counter + val;
    if(counter == arrayImage.length){
        counter = 0;
    }
    if(counter == -1){
        counter = (arrayImage.length - 1)
    }


    console.log(src+arrayImage[counter]+extencion);

    img.setAttribute('src', src+arrayImage[counter]+extencion);


    
    
    


    // setTimeout(carrousel, 4000)
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



const a = [1,2,3]
const [n] = a;
console.log(typeof(42));

a[100] = 1;

console.log(a.length);

