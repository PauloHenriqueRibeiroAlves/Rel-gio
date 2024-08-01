//selecionando o relógio digital
let digitalElement = document.querySelector('.digital');

//selecionando os ponteiros
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//função para atualizar a hora
function updateClock() {

    //obtendo a hora atual
    let now = new Date();

    //pegando segundos, minutos e horas
    let hour = now.getHours();
    let minute = now.getMinutes();
    let segund = now.getSeconds();

    //inserindo a hora atual no relógio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(segund)}`;

    //inserrindo hora no relógio analogico
    let sDeg = ((360 / 60) * segund) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

//condição para colocar os zertos antes dos numeros
function fixZero(time) {
    /*if(time < 10) {
        return '0' + time;
    }else{
        return time;
    }*/
   return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
//função que vai mostrar as goras sem ter o tempo de espera quando atualizar a tela
updateClock();