const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const princesa = document.querySelector('.princesa');

document.addEventListener('keydown', jump)

function jump(e) {

    if (e.key === 'w') {
        mario.classList.add('jump')
        setTimeout(() => mario.classList.remove('jump'), 500)
    }

    if (e.key === 'ArrowUp') {
        princesa.classList.add('jump')
        setTimeout(() => princesa.classList.remove('jump'), 500)
    }
}

//call sometimes to check position between elements
const loop = setInterval(checkPosition, 10)

//Collisions
function checkPosition(){

    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","")
    const princesaPosition = +window.getComputedStyle(princesa).bottom.replace("px","")
    const pipePosition = +window.getComputedStyle(pipe).left.replace("px","")
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace("px","")
    
    const condicaoMario = pipePosition <= 130 && marioPosition < 80 && pipePosition > 0
    const condicaoPrincesa = pipePosition <= 640 && pipePosition >= 500 && princesaPosition < 50 && pipePosition > 0
    
    //game over
    if((condicaoMario) || (condicaoPrincesa)){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        princesa.style.animation = 'none'
        princesa.style.bottom = `${princesaPosition}px`

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop)
    }
}

