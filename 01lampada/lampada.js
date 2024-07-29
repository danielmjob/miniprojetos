const turnOnOff = document.getElementById ('turnOnOff');
const lamp =  document.getElementById ('lamp');

function isLampBronken(){
    return lamp.src.indexOf('quebrada') > -1 // procura se a imagem é da lampada quebrada
}

function lampOn(){
    if ( !isLampBronken() ){
        lamp.src = './img/ligada.jpg';
        turnOnOff.textContent = 'Desligar'
    }
}

function lampOff(){
    if (!isLampBronken()){
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar'
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
    turnOnOff.textContent = 'Consertar';
}

function lampOnOff (){
    if (turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else if(turnOnOff.textContent == 'Desligar') {
        lampOff();
        turnOnOff.textContent = 'Ligar';

    }
}

function lampRepair (){
    if(turnOnOff.textContent == 'Consertar' ){
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar';
        lampOff();

    }
}


turnOnOff.addEventListener ('click', lampOnOff);
turnOnOff.addEventListener('click',lampRepair);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);