"use strict"

let btnMenu = document.querySelector("#btn-menu")
btnMenu.addEventListener("click", mostrarMenu);

function mostrarMenu() {
    let menu = document.querySelector("#menu");
    menu.classList.toggle("ocultar")
}

let textEl = document.querySelector('#text');
const text = 'If there is a Will there is a Way         ';
let idx = 1;
let speed = 150;

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


