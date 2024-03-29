// Access HTML elements
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

//function to check if the door that the player clicked on is closed.
//This is to make sure that clicking on already opened doors will not affect the progress of the game.
function isClicked(door){
    if(door.src === closedDoorPath){
      return true;
    } else {
      return false;
    }
  }
const isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
    } else {
      return false;
    }
}
//function to display a game over message depending on whether the player has won or lost
function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false; //This will allow our start button to be triggered again for another round of Chore Door.
} 
function playDoor(door){
  numClosedDoors--; //This will decrease the value of the numClosedDoors variable by one every time a door is opened.
  if(numClosedDoors === 0){ //This will mean that the player has successfully avoided the ChoreBot!
   gameOver('win')
  } 
  else if(isBot(door)){
   gameOver('lose')
  }
}
const randomChoreDoorGenerator = () => {
 let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){ //Variants of door contents after randomising
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath; 
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1){
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 2){
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}
startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}


// Start a game round
function startRound() {
   doorImage1.src = closedDoorPath;
   doorImage2.src = closedDoorPath;
   doorImage3.src = closedDoorPath;
   numClosedDoors = 3; //This is to make sure that all the doors are closed at the start of the game.
   currentlyPlaying = true;
   startButton.innerHTML = 'Good Luck!';
   randomChoreDoorGenerator();
}

startRound(); //Don't forget to call the function!
