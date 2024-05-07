const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const jumpSound = document.getElementById("pulo");
const collisionSound = document.getElementById("morte");
const backgroundMusic = document.getElementById("track");

let meuPontos = 0;
let counterInterval; 

document.addEventListener("click", () => {
    backgroundMusic.play();
    startCounter();
});

const jump = () => {
    jumpSound.play();
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
};

const startCounter = () => {
    counterInterval = setInterval(() => {
        meuPontos++;
        document.getElementById("counter").innerText = meuPontos;
    }, 100);
};

const stopCounter = () => {
    clearInterval(counterInterval);
};

const gameOverMsg = document.getElementById("game-over");

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const cloudPosition = clouds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "imagens/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clouds.style.animation = "none";
        clouds.style.left = `${cloudPosition}px`;
          
        clearInterval(loop);

        collisionSound.play();
        backgroundMusic.pause();
        stopCounter();

        gameOverMsg.style.display = "block";
    }
}, 10);

document.addEventListener("keydown", jump);
