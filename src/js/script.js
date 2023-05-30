const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const seg = document.getElementById('seg');
const body = document.querySelector('body');


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let horas = dateToday.getHours();
    let minutos = dateToday.getMinutes();
    let segundos = dateToday.getSeconds();

    if(horas < 10){
        horas = '0' + horas;
    }

    if(minutos < 10){
        minutos = '0' + minutos;
    }

    if(segundos < 10){
        segundos = '0' + segundos;
    }

    if(horas > 18){
        body.classList.add('noite');
    }
    else{
        body.classList.remove('noite')
    }

    hrs.textContent = horas;
    min.textContent = minutos;
    seg.textContent = segundos;


})