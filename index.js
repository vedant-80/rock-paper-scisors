//Determine player choice
//define button constants
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const gameInfo = document.querySelector('.game-score');
const playerSelectedImg = document.querySelector('.player-selected-option');
const compSelectedOption = document.querySelector('.comp-selected-option');
const scoreDetails = document.querySelector('.score-count');

let pChoice = undefined; //initial player choice
let pScore = 0;
let compScore = 0;

rockBtn.addEventListener('click', () => playRound('rock', '/assets/rock-icon2.png'));
paperBtn.addEventListener('click', () => playRound('paper', '/assets/paper-icon.png'));
scissorsBtn.addEventListener('click', () => playRound('scissors', '/assets/scissor-icon2.png'));

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
    optionImg.setAttribute('style', 'width: 200px; height: 200px; background-color: white;');
    playerSelectedImg.appendChild(optionImg);
    console.log(pChoice)

}


function computerChoice(){
    /*
    Function: computerChoice
    Inputs: None
    Outputs:
    - randomly selects rock, paper, or scissors
    - displays image of selected choice in RPS
    */
   
   //Randomly selects R,P, or S
   let num = Math.floor(Math.random()*3 + 1);
   const compChoiceImg = document.createElement('img');
   compChoiceImg.setAttribute('style', 'width: 200px; height: 200px; background-color: white;');
   let compChoice;
   switch(num){
        case 1:
            compChoice = 'rock';
            compChoiceImg.src = '/assets/rock-icon2.png';
            break;
        case 2:
            compChoice = 'paper';
            compChoiceImg.src = '/assets/paper-icon.png'
            break;
        case 3:
            compChoice = 'scissors';
            compChoiceImg.src = '/assets/scissor-icon2.png'
            break;
    }
        console.log('The computer picked ' + compChoice);
        if (compSelectedOption.hasChildNodes()){
            compSelectedOption.removeChild(compSelectedOption.lastChild);
        }
        compSelectedOption.appendChild(compChoiceImg);
        return compChoice;
}
        
function playRound(pChoice, imgSrc){
    /*
    Inputs:
        - pChoice: the player's choice in RPS
        - imgSrc: the source of the image corresponding to the player's choice

    Outputs:
        - Console message stating who wins
    */
    optionSelected(pChoice, imgSrc);
    compChoice = computerChoice()
    if (pChoice == 'rock'){
        if (compChoice == 'paper'){
            loseMessage(pChoice, compChoice);
            compScore++;
        } else if (compChoice == 'scissors'){
            winMessage(pChoice, compChoice);
            pScore++;
        } else{
            drawMessage(pChoice);
        }
    } else if (pChoice == 'paper'){
        if (compChoice == 'rock'){
            winMessage(pChoice, compChoice);
            pScore++;
        } else if (compChoice == 'scissors'){
            loseMessage(pChoice, compChoice);
            compScore++;
        } else{
            drawMessage(pChoice);
        }
    } else if (pChoice == 'scissors'){
        if (compChoice == 'paper'){
            winMessage(pChoice, compChoice);
            pScore++;
        } else if (compChoice == 'rock'){
            loseMessage(pChoice, compChoice);
            compScore++;
        } else{
            drawMessage(pChoice);
        }
    }
    updateScore();
}

function winMessage(pChoice, compChoice){
    if (gameInfo.hasChildNodes()){
        gameInfo.removeChild(gameInfo.lastChild);
    }
    let message = document.createElement('p');
    message.textContent = "You picked " + pChoice + " and the computer picked " + compChoice + ". You win!";
    message.setAttribute('style', 'color: yellow; font-family: arial; text-align: center;');
    gameInfo.appendChild(message);
}

function loseMessage(pChoice, compChoice){
    if (gameInfo.hasChildNodes()){
        gameInfo.removeChild(gameInfo.lastChild);
    }
    let message = document.createElement('p');
    message.textContent = "You picked " + pChoice + " and the computer picked " + compChoice + ". You lose.";
    message.setAttribute('style', 'color: yellow; font-family: arial; text-align: center;');
    gameInfo.appendChild(message);
}

function drawMessage(pChoice){
    if (gameInfo.hasChildNodes()){
        gameInfo.removeChild(gameInfo.lastChild);
    }
    let message = document.createElement('p');
    message.textContent = "You and the computer picked " + pChoice + ". It's a draw...";
    message.setAttribute('style', 'color: yellow; font-family: arial; text-align: center;');
    gameInfo.appendChild(message);
}

function updateScore(){
    scoreDetails.textContent = 'Score: ' + pScore + ' to ' + compScore;

}





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


