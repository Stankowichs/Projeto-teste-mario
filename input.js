const mario = document.querySelector (".mario")
const pipe = document.querySelector (".pipe")
const clouds = document.querySelector (".clouds")
const jumpSound = document.getElementById ("pulo");
const collisionSound = document.getElementById ("morte");
const backgroundMusic = document.getElementById ("track");

let meuPontos = 0;

document.addEventListener("click", () => {
    backgroundMusic.play();
});



const jump = () => {
    jumpSound.play();
    mario.classList.add("jump")

    setTimeout(() => {
        mario.classList.remove("jump")
        }, 500)   
}	

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    const cloudPosition = clouds.offsetLeft

        console.log(pipePosition)
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "imagens/game-over.png";
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        clouds.style.animation = "none";
        clouds.style.left = `${cloudPosition}px`
          

        clearInterval(loop);

        collisionSound.play();
        backgroundMusic.pause();

    }

}, 10);


document.addEventListener("keydown", jump)


