const mario = document.querySelector('.mario');
const luidi = document.querySelector('.luidi');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    luidi.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');
        luidi.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

           mario.style.animation = 'none';
           mario.style.bottom = `${pipePosition}px`;

        mario.src = './img/gameover-letreiro.gif';
        
        mario.style.width = '100%';
        mario.style.ridth = '100%';
        mario.style.left = '-0.5px';
        mario.style.top = '0px';


        // luidi.src = './img/ mario-e-ludi-tubo.png';
        // luidi.style.width = '75px';
        // luidi.style.left = '50px';


        luidi.style.animation = 'none';
        luidi.style.left = `${pipePosition}px`;

    }


}, 10);


document.addEventListener('keydown', jump);

const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

let gamePaused = false;

playButton.addEventListener('click', () => {
    if (gamePaused) {
        gamePaused = false;
        pipe.style.animationPlayState = 'running';
        mario.style.animationPlayState = 'running';
        luidi.style.animationPlayState = 'running';
    }
});

pauseButton.addEventListener('click', () => {
    gamePaused = true;
    pipe.style.animationPlayState = 'paused';
    mario.style.animationPlayState = 'paused';
    luidi.style.animationPlayState = 'paused';
});

resetButton.addEventListener('click', () => {
    window.location.reload(); // Simplesmente recarrega a página para resetar o jogo
});



// // Variável para verificar se o jogo acabou
// let jogoAcabou = false;

// // Função que detecta quando o botão é pressionado
// function pressionarBotao() {
//     if (!jogoAcabou) {
//         // Faz o Mario pular
//         pularMario();
//     }
// }

// // Função que faz o Mario pular
// function pularMario() {
//     console.log("Mario pulou!");
//     // Adicione a lógica para o pulo do Mario aqui
// }

// // Função para acabar o jogo
// function acabarJogo() {
//     jogoAcabou = true;
//     console.log("O jogo acabou.");
// }

// // Event listener para o botão
// document.getElementById("botaoPular").addEventListener("click", pressionarBotao);




// let jogoEmAndamento = false;
// let jogoPausado = false;

// // Função que detecta quando o botão de pulo é pressionado
// function pressionarBotaoPular() {
//     if (jogoEmAndamento && !jogoPausado) {
//         pularMario();
//     }
// }

// Função que faz o Mario pular
// function pularMario() {
//     const mario = document.getElementById('mario');
//     if (!mario.classList.contains('jump')) {
//         mario.classList.add('jump');
//         setTimeout(() => {
//             mario.classList.remove('jump');
//         }, 500);
//     }
// }

// // Função para iniciar o jogo
// function iniciarJogo() {
//     jogoEmAndamento = true;
//     jogoPausado = false;
//     document.getElementById('somJogo').play();
//     console.log("Jogo iniciado.");
// }

// // Função para pausar o jogo
// function pausarJogo() {
//     jogoPausado = true;
//     document.getElementById('somJogo').pause();
//     console.log("Jogo pausado.");
// }

// // Função para reiniciar o jogo
// function reiniciarJogo() {
//     jogoEmAndamento = false;
//     jogoPausado = false;
//     document.getElementById('somJogo').pause();
//     document.getElementById('somJogo').currentTime = 0;
//     console.log("Jogo reiniciado.");
// }

// // Event listeners para os botões
// document.getElementById("playButton").addEventListener("click", iniciarJogo);
// document.getElementById("pauseButton").addEventListener("click", pausarJogo);
// document.getElementById("resetButton").addEventListener("click", reiniciarJogo);
// document.getElementById("botaoPular").addEventListener("click", pressionarBotaoPular);


// const scoreElement = document.getElementById('score');
// let score = 0;

// // Função para atualizar a pontuação
// const updateScore = () => {
//     score += 1;
//     scoreElement.textContent = `Pontuação: ${score}`;
// };

// // Atualizar a pontuação a cada intervalo de tempo
// const scoreInterval = setInterval(updateScore, 1000); // Aumenta a pontuação a cada segundo

// const playButton = document.getElementById('playButton');
// const pauseButton = document.getElementById('pauseButton');
// const resetButton = document.getElementById('resetButton');

// let gamePaused = false;

// playButton.addEventListener('click', () => {
//     if (gamePaused) {
//         gamePaused = false;
//         pipe.style.animationPlayState = 'running';
//         mario.style.animationPlayState = 'running';
//         luidi.style.animationPlayState = 'running';
//         scoreInterval = setInterval(updateScore, 1000); // Reinicia a pontuação ao continuar o jogo
//     }
// });

// pauseButton.addEventListener('click', () => {
//     gamePaused = true;
//     pipe.style.animationPlayState = 'paused';
//     mario.style.animationPlayState = 'paused';
//     luidi.style.animationPlayState = 'paused';
//     clearInterval(scoreInterval); // Pausa a atualização da pontuação
// });

// resetButton.addEventListener('click', () => {
//     window.location.reload(); // Simplesmente recarrega a página para resetar o jogo
// });

// const jump = () => {
//     mario.classList.add('jump');
//     luidi.classList.add('jump');

//     setTimeout(() => {
//         mario.classList.remove('jump');
//         luidi.classList.remove('jump');
//     }, 500);
// };

// const loop = setInterval(() => {
//     const pipePosition = pipe.offsetLeft;
//     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

//     if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
//         pipe.style.animation = 'none';
//         pipe.style.left = `${pipePosition}px`;

//         mario.style.animation = 'none';
//         mario.style.bottom = `${pipePosition}px`;

//         mario.src = './img/gameover-letreiro.gif';
        
//         mario.style.width = '100%';
//         mario.style.ridth = '100%';
//         mario.style.left = '-0.5px';
//         mario.style.top = '0px';

//         luidi.style.animation = 'none';
//         luidi.style.left = `${pipePosition}px`;

//         clearInterval(loop);
//         clearInterval(scoreInterval); // Para a atualização da pontuação quando o jogo acaba
//     }
// }, 10);

// document.addEventListener('keydown', jump);
