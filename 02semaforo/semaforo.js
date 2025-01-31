const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLght = (event) => {
    stopAutomatic();
    turnOn[event.target.id](); // pega a o nome id do botão atraves do target de click
}

const nextIndex = () => {

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;

/*
mesma coisa

    if (colorIndex < 2){
        colorIndex++
    } else {
        colorIndex = 0;
    }
        */

}


const changeColor = () =>{
    const colors = ['red','yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red':          () => img.src = './img/vermelho.png',
    'yellow':       () => img.src = './img/amarelo.png',
    'green':        () => img.src = './img/verde.png',
    'automatic':    () => intervalId = setInterval(changeColor,1000) // executa a cada um segundo(1000ms)
}

buttons.addEventListener('click', trafficLght);