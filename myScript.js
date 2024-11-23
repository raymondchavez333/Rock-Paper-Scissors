function getComputerChoice(){
    const randNumber = Math.floor(Math.random()*3);
    if(randNumber == 0){
        return 'rock';        
    } else if(randNumber == 1) {
        return 'paper';
    }

    return 'scissors';
}

function getHumanChoice(){
    return prompt('Choose one: rock, paper, scissors.');
}

let humanScore= 0;
let computerScore= 0;