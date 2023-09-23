const mario = document.querySelector('.mario'); //pegar o elemento da imagem do mario
const pipe = document.querySelector('.pipe');  //pega o elemento da imagem do tubo

const score = document.querySelector('.scoreValue');
const finalScore = document.querySelector('.finalScore > span');
const menu = document.querySelector('.menuScreen');
const buttomPlay = document.querySelector('.restartGame');
const jumpMario = document.querySelector('.jump')

const incrementScore = () => { //esse funçao soma um ao pontuação
    score.innerText = +score.innerText + 1 //converte para um numero
}

const jump = () =>{ 
    mario.classList.add('jump');//adiciona a nova class jump a class antiga mario
    incrementScore()
    setTimeout(()=>{

        mario.classList.remove('jump');// a gente vai precionar a tecla ele vai dispara a fução jump vai adicionar a class jump a animação vai acontecer e quando a animação terminar a gente vai remover a class para adicionar quando a gente quiser

    }, 500); //é uma função que recebe dois paremetros ela vai esperar o tempo e depois executar a função
}
const loop = setInterval(() =>{

     const pipePosition = pipe.offsetLeft; //pega o deslocamento esquerdo da imagem do tubo
     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // vai pegar o estilo que foi computado na imagem domario
     console.log(marioPosition);  

     if(pipePosition <= 120 &&  pipePosition > 0 && marioPosition < 115){ //se o nosso deslocamento da esquerda for igial ou menor que 120 quer diazer que ele ja encostou no mario entao a gente para o jogo

        pipe.style.animation = 'none' //para a animação do tubo
        pipe.style.left = `${pipePosition}px`;  //a propiedade left do tubo vai ser exatamento o valor em pixel de quando ele encostou no mario

        mario.style.animation = 'none' //para a animação do mario onde ele encosta no tubo
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png'; // troca a imagem do mario pela game over
        mario.style.width = '75px' //diminue a largura da imagem
        mario.style.marginLeft = '50px' //diminue a distancia entre o tubo e o mario game over

        menu.style.display = 'flex';    
        finalScore.innerText = score.innerText


        clearInterval(loop);
     }
}, 10);

document.addEventListener('keydown', jump); // esse evento faz com que o mario pule sempre que uma tecla for apertada

const resetGame =  () => {
    mario.src = './img/mario.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0px';
    score.innerText = '0';
    menu.style.display = 'none';
    pipe.style.right = '-450px';
    pipe.style.animation = 'pipe-animation 2s infinite linear';
    mario.classList.remove('jump');
}
 buttomPlay.addEventListener('click', resetGame);
