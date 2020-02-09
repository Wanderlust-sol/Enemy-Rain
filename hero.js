// class Hero {
//   constructor() {
//     this.indexHero = document.querySelector(".hero");
//     this.leftCss = window.getComputedStyle(indexHero).left;
//     this.leftSide = "0px";
//     this.rightSide = "960px";
//   }
// }

const indexHero = document.querySelector(".hero");

function frontFace1(event) {
  indexHero.classList.remove("left-face");
}

function frontFace2(event) {
  indexHero.classList.remove("right-face");
}

function leftKey(x) {
  const leftCss = window.getComputedStyle(indexHero).left;
  const leftSide = "0px";

  indexHero.classList.add("left-face");
  indexHero.style.left = parseInt(leftCss) - 20 + "px";
  //indexHero.style.left = parseInt(indexHero.style.left) - 20 + "px";
  window.addEventListener("keyup", frontFace1);

  if (leftCss === leftSide) {
    indexHero.style.left = "0px";
  }
}

function rightKey() {
  const leftCss = window.getComputedStyle(indexHero).left;
  const rightSide = "960px";

  indexHero.classList.add("right-face");
  indexHero.style.left = parseInt(leftCss) + 20 + "px";
  window.addEventListener("keyup", frontFace2);

  if (leftCss === rightSide) {
    indexHero.style.left = "960px";
  }
}

function pressKey(e) {
  if (e.keyCode == 37) {
    leftKey();
  } else if (e.keyCode == 39) {
    rightKey();
  }
}

function movingCon() {
  window.addEventListener("keydown", pressKey);
}

movingCon();
