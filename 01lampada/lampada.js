const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp =  document.getElementById ('lamp');

function isLampBronken(){
    return lamp.src.indexOf('quebrada') > -1 // procura se a imagem é da lampada quebrada
}

function lampOn(){
    if ( !isLampBronken() ){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if (!isLampBronken()){
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ('click',lampOn);
turnOff.addEventListener ('click', lampOff)
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);