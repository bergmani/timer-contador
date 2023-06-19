/*# 
Dom Manipulation.

## Ejercicio 1. Contador/temporizador.
Crea un programa utilizando HTML, CSS y JavaScript que permita al usuario acceder a un contador sencillo (ascendente y descendente) sin límite. Así mismo, se muestre un temporizador que permita al usuario establecer un tiempo (en segundos) y que haga una cuenta regresiva por cada segundo hasta llegar a 0 y arroje una alerta de tiempo finalizado.

**Fecha límite:** *18 de junio, 23:59 hrs.* 
*/

const btnAdd = document.getElementById('btn-add');
const btnSubstract = document.getElementById('btn-substract');
const p = document.getElementById('contador');

let counter = 0; 
p.textContent = 0;

btnAdd.addEventListener('click', async () => {
    await setTimeout(() => {
        counter++;
        p.textContent = counter;
    }, 5);
})

btnSubstract.addEventListener('click', async() => {
    await setTimeout(() =>{
        counter --;
        p.textContent = counter;
    }, 5);
})


const totalTime = document.getElementById('totalTime');
const startBtn = document.getElementById('start-btn');
const liveTimer = document.getElementById('liveTimer')

liveTimer.textContent = 0;

startBtn.addEventListener('click', () => {
    let timeLeft = totalTime.value;
    liveTimer.textContent = timeLeft;
    let timer = setInterval(() => {
        timeLeft--;
        liveTimer.textContent = timeLeft;
        if(timeLeft == 0){
            alert('¡Temporizador terminado!')
            clearTimeout(timer);
        }
    },1000)
})