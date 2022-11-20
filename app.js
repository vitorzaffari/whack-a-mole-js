const quadrado = document.querySelectorAll('.quadrado');
const mole = document.querySelector('.mole');
const tempoFaltando = document.querySelector('#tempo-faltando');
let pontos = document.querySelector('#pontos');

let resultado = 0;
let tempoAtual = tempoFaltando.textContent;

function quadradoAleatorio() {
    quadrado.forEach(className => {
        className.classList.remove('mole');
    })
    let posicaoAleatoria = quadrado[Math.floor(Math.random() * 9)];
    posicaoAleatoria.classList.add('mole');


hitPosition = posicaoAleatoria.id;
}


quadrado.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            resultado += 1;
            pontos.textContent = resultado;
        }
    })
})


function moverMole() {
    let tempoId = null;
    tempoId = setInterval(quadradoAleatorio, 400);
}

function countdown() {
    tempoAtual--;
    tempoFaltando.textContent = tempoAtual;

    if(tempoAtual === 0){
        clearInterval(tempoId)
        alert('O jogo acabou! Sua pontuação final é: ' + resultado)
    }
}

let tempoId = setInterval(countdown, 1000);

moverMole();