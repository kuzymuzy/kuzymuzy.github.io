const dino = document.getElementById("dino");
const play = document.getElementById("play");
const cactus = document.getElementById("cactus");
const gameover = document.getElementById("gameover");
const points = document.getElementById("points");
const sound = localStorage.getItem("sound");
const soundbutton = document.getElementById("sound");
const jump = new Audio('/dino/assets/jump.wav');
const gameoversound = new Audio('/dino/assets/gameover.wav');
let pointsrightnow = 0;
let collisionCheck;
let pointsup;

window.onload = function() {
    play.style.display = "block";
}

if (sound === "0") {
    soundbutton.textContent = "🔇"
}
else {
    soundbutton.textContent = "🔈"
}

async function gamestart() {
    pointsrightnow = 0;
    points.style.display = "block";
    dino.style.animation = "none";
    dino.style.display = "block";
    gameover.style.display = "none";
    play.style.display = "none";
    cactus.style.display = "block";
    points.textContent = 0
    cactus.style.animation = "cactus 2500ms infinite linear forwards"
    pointsevent()


    
    colising = setInterval(() => {
        isColliding()
    }, 1);

    if (collisionCheck) {
        clearInterval(collisionCheck);
    }
    collisionCheck = setInterval(() => {
        if (isColliding()) {
            gameOver();
        }
    }, 1);
}

function sound_off() {
    if (localStorage.getItem("sound") === "1"){
        if (points.textContent === "0"){
            localStorage.setItem("sound", 0)
            window.location.reload()
        }
        else {
            const accept = confirm("If you change the sound volume, the page will reload and progress will be deleted!")
            if (accept === true) {
                localStorage.setItem("sound", 0)
                window.location.reload()
            }
        }
    }
    else{
        if (points.textContent === "0"){
            localStorage.setItem("sound", 1)
            window.location.reload()
        }
        else{
            const accept = confirm("If you change the sound volume, the page will reload and progress will be deleted!")
            if (accept === true) {
                localStorage.setItem("sound", 1)
                window.location.reload()
            }
        }
        localStorage.setItem("sound", 1)
    } 
}

function dinojumpsoud() {
    if (dino.style.display === "block" && sound === "1"){
        jump.play()
    }
    else {
        return 0;
    }
}

function gameoversoundf() {
    if(sound === "1"){
        gameoversound.play()
    }
    else {
        return 0;
    }
}

function gameOver() {
    gameover.style.display = "block";
    cactus.style.display = "none";
    dino.style.display = "none";
    gameoversoundf()
    clearInterval(collisionCheck);
}

function isColliding() {
    return (
        cactus.getBoundingClientRect().left < dino.getBoundingClientRect().right &&
        cactus.getBoundingClientRect().right > dino.getBoundingClientRect().left &&
        cactus.getBoundingClientRect().top < dino.getBoundingClientRect().bottom &&
        cactus.getBoundingClientRect().bottom > dino.getBoundingClientRect().top
    );
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

function pointsevent(){
    pointsup = setInterval(() => {
        if (gameover.style.display === "block") {
            clearInterval(pointsup); 
        } else {
            pointup(); 
        }
    }, 100);
}



document.addEventListener("touchstart", function(event) {
    dinoup();
    dinojumpsoud();
    dinodown();
});

function pointdown() {
    points.textContent = pointsrightnow; 
}

function pointup() {
    pointsrightnow += 1;
    points.textContent = pointsrightnow;
}

async function dinodown() {
    await delay(1500);
    dino.style.animation = "none";

}

function stopdino() {
    dino.style.animation = "none";
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowDown') {
        stopdino()
    }
})

document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        gamestart()
    }
})

function dinoup() {
    if (dino.style.display === "block"){
        dino.style.animation = "dinojump 1500ms";
    }
}


document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === "ArrowUp") {
        dinoup()
        dinojumpsoud()
        dinodown()
    }
});


