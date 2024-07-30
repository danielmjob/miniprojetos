'use strict';


//chamando imagens via JSON
const images = [
    {'id': '1', 'url' : './img/demonslayer.jpeg' },
    {'id': '2', 'url' : './img/classicos.jpg' },
    {'id': '3', 'url' : './img/sete.jpg' },
    {'id': '4', 'url' : './img/jujutsu.jpg' },
    {'id': '5', 'url' : './img/solo.jpg' },
    {'id': '6', 'url' : './img/fullm.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
            <div class = 'item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');
const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () =>{
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem,items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', next)
document.querySelector('#next').addEventListener('click', previous)

