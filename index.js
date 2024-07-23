//Determine player choice
//define button constants
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const gameInfo = document.querySelector('.game-score');
const playerSelectedImg = document.querySelector('.player-selected-option');
let pChoice = undefined; //initial player choice

rockBtn.addEventListener('click', () => optionSelected('rock', '/assets/rock-icon2.png'));
paperBtn.addEventListener('click', () => optionSelected('paper', '/assets/paper-icon.png'));
scissorsBtn.addEventListener('click', () => optionSelected('scissors', '/assets/scissor-icon2.png'));

function optionSelected(pChoice, imgSrc){
    /*
    Function: optionSelected
    Inputs:
        - pChoice: the player's choice in RPS
        - imgSrc: the source of the image corresponding to the player's choice

    Output:
        - Shows the image of the player choice in the box under player
        - Updates the pChoice variable

    */
   //deletes current image so new image can be shown
    if (playerSelectedImg.hasChildNodes()){
        playerSelectedImg.removeChild(playerSelectedImg.lastChild);
    }
    //updates with new image
    const optionImg = document.createElement('img');
    optionImg.src = imgSrc;
    optionImg.setAttribute('style', 'width: 200px; height: 200px;');
    playerSelectedImg.appendChild(optionImg);
    console.log(pChoice)

}




if (pChoice == undefined){
    const pickOption = document.createElement('h2');
    pickOption.textContent = "You need to pick rock, paper, or scissors!";
    pickOption.setAttribute('style', 'color: yellow; border: solid 2px yellow; text-align: center; padding: 4px; margin: 24px;')
    gameInfo.appendChild(pickOption);
}
if (pChoice == 'rock'){
    const rockImg = document.createElement('img');
    rockImg.src = '/assets/rock-icon2.png';
    rockImg.setAttribute('style', 'width: 200px; height: 200px;');
    playerSelectedImg.appendChild(rockImg);
    console.log('rock');
}

function selectionChecker(){
    //pChoice is rock if rock button is clicked, paper if paper is clicked, etc.

}

selectionChecker();




// function playerChoice(){

//     let playerChoice = prompt('Rock, paper, or scissors?').toLowerCase();
//     console.log('You chose ' + playerChoice);
//     return playerChoice;
// }
// //Randomly determine computer choice
// function computerChoice(){
//     let num = Math.floor(Math.random()*3 + 1);
//     let compChoice;
//     switch(num){
//         case 1:
//             compChoice = 'rock';
//             break;
//         case 2:
//             compChoice = 'paper';
//             break;
//         case 3:
//             compChoice = 'scissors';
//             break;
//     }
//     console.log('The computer picked ' + compChoice);
//     return compChoice;
// }
// //Determine what causes a win, loss, or draw for one round
// humanScore = 0;
// botScore = 0;
// function round(player, comp){
//     if (player == 'rock'){
//         if (comp == 'paper'){
//             console.log('You lose!');
//             botScore++;
//         } else if (comp == 'scissors'){
//             console.log('You win!');
//             humanScore++;
//         } else{
//             console.log('Draw...');
//         }
//     } else if (player == 'paper'){
//         if (comp == 'rock'){
//             console.log('You win!');
//             humanScore++;
//         } else if (comp == 'scissors'){
//             console.log('You lose!');
//             botScore++;
//         } else{
//             console.log('Draw...');
//         }
//     } else if (player == 'scissors'){
//         if (comp == 'paper'){
//             console.log('You win!');
//             humanScore++;
//         } else if (comp == 'rock'){
//             console.log('You lose!');
//             botScore++;
//         } else{
//             console.log('Draw...');
//         }
//     } else{
//         console.log('You lose because you did not pick rock, paper, or scissors!');
//         botScore++;
//     }
//     console.log('Score:\nPlayer: ' + humanScore + ', Computer: ' + botScore);
// }

// //simulate a game
// function runGame(){
//     while (humanScore != 5 && botScore != 5){
//         setTimeout(round(playerChoice(),computerChoice()), 1000);
//     }
//     if (humanScore > botScore){
//         console.log("Game Over. You win!")
//     } else{
//         console.log("Game over. The computer wins!")
//     }
// }
// runGame();


