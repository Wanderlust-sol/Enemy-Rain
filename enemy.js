class Enemy {
  constructor() {
    this.bgForm = document.querySelector("#bg");

    this.winHero = document.querySelector(".hero");
    this.createGhost();
  }

  createGhost = () => {
    this.createSpan = document.createElement("span");
    this.randomNum = Math.floor(Math.random() * 955);
    this.createSpan.className += "enemy-image";
    this.bgForm.appendChild(this.createSpan);
    this.createSpan.style.left = this.randomNum + "px";
    this.falling();
  };

  falling = () => {
    setInterval(() => {
      const topValue = window.getComputedStyle(this.createSpan).top;
      const enemyOffsetTop = this.createSpan.offsetTop;
      const enemyOffsetLeft = this.createSpan.offsetLeft;
      const heroOffsetTop = this.winHero.offsetTop;
      const heroOffsetLeft = this.winHero.offsetLeft;

      this.createSpan.style.top = parseInt(enemyOffsetTop) + 1 + "px";

      if (
        heroOffsetTop == enemyOffsetTop + 53 &&
        heroOffsetLeft >= enemyOffsetLeft - 35 &&
        heroOffsetLeft <= enemyOffsetLeft + 35
      ) {
        this.createSpan.classList.add("kill-enemy");
        const sound = new Audio("audio/dying.wav");
        sound.play();
      }

      if (this.createSpan.style.top === "700px") {
        this.createSpan.remove();
      }
    }, 1);
  };
}

let intervalMaking;

function startGhost() {
  const startBtn = document.querySelector(".start");
  startBtn.addEventListener("click", function() {
    intervalMaking = setInterval(() => {
      const newEnemy = new Enemy();
    }, 3000);
  });
}

function stopGhost() {
  const stopBtn = document.querySelector(".stop");
  stopBtn.addEventListener("click", function() {
    clearInterval(intervalMaking);
  });
}

function init() {
  startGhost();
  stopGhost();
}

init();
