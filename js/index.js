let canvas = document.querySelector('canvas');
canvas.style.border = ' 3px solid black';


let animationFrameId;

let carXDirection = 250
let carYDirection = 300

let backgroundWidth = 500
let backgroundHeight = 700

let isGameOver = false

isPaddleGoingLeft = false;
  isPaddleGoingRight = false;

let carSpeedValue = 3;
let carDirectionX = carSpeedValue;
let carDirectionY = carSpeedValue;


let ctx = canvas.getContext("2d");
let background = new Image();
background.src = "../images/road.png";
let carImage = new Image();
carImage.src = "../images/car.png";



let introScreen = document.querySelector('.game-intro');
let buttonControl = document.querySelector('.arrows-img');


let speed1 = 0
let speed2 = 0

function speedTheCar() {
  speed1 += 1
}

function speedTheBcakground(){
speed1 -= 1
}

function control (){
  buttonControl.style.display ='block'
}

function animateBcakground(){
requestAnimationFrame(background)
}



window.onload = () => {
  canvas.style.display = 'none';
  document.getElementById('start-button').onclick = () => {
    startGame();
control(); 
  };

  function startGame() {   
introScreen.style.display ='none';
canvas.style.display ='block';
  ctx.drawImage(background,0,0, 500, 700);   
 ctx.drawImage(carImage,carXDirection,carYDirection,100,200);
 
  moveCar();
  if (isGameOver) {
    cancelAnimationFrame(animationFrameId);
  } else {
    animationFrameId = requestAnimationFrame(startGame);
  }
}

};


function moveCar() {
  

document.addEventListener("keydown", event => {
  if (event.code === "ArrowLeft") {
  isPaddleGoingLeft = true;
  }
  if (event.code === "ArrowRight") {
    isPaddleGoingRight = true;
  }
});

document.addEventListener("keyup", event => {
  isPaddleGoingLeft = false;
  isPaddleGoingRight = false;
})};