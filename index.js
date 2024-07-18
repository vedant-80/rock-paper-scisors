
//Determine player choice
function playerChoice(){
    let playerChoice = prompt('Rock, paper, or scissors?').toLowerCase();
    console.log('You chose ' + playerChoice);
    return playerChoice;
}
//Randomly determine computer choice
function computerChoice(){
    let num = Math.floor(Math.random()*3 + 1);
    let compChoice;
    switch(num){
        case 1:
            compChoice = 'rock';
            break;
        case 2:
            compChoice = 'paper';
            break;
        case 3:
            compChoice = 'scissors';
            break;
    }
    console.log('The computer picked ' + compChoice);
    return compChoice;
}
//Determine what causes a win, loss, or draw for one round
humanScore = 0;
botScore = 0;
function round(player, comp){
    if (player == 'rock'){
        if (comp == 'paper'){
            console.log('You lose!');
            botScore++;
        } else if (comp == 'scissors'){
            console.log('You win!');
            humanScore++;
        } else{
            console.log('Draw...');
        }
    } else if (player == 'paper'){
        if (comp == 'rock'){
            console.log('You win!');
            humanScore++;
        } else if (comp == 'scissors'){
            console.log('You lose!');
            botScore++;
        } else{
            console.log('Draw...');
        }
    } else if (player == 'scissors'){
        if (comp == 'paper'){
            console.log('You win!');
            humanScore++;
        } else if (comp == 'rock'){
            console.log('You lose!');
            botScore++;
        } else{
            console.log('Draw...');
        }
    } else{
        console.log('You lose because you did not pick rock, paper, or scissors!');
        botScore++;
    }
    console.log('Score:\nPlayer: ' + humanScore + ', Computer: ' + botScore);
}

//simulate a game
function runGame(){
    while (humanScore != 5 && botScore != 5){
        setTimeout(round(playerChoice(),computerChoice()), 1000);
    }
    if (humanScore > botScore){
        console.log("Game Over. You win!")
    } else{
        console.log("Game over. The computer wins!")
    }
}
runGame();
    

