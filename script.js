function getComputerChoice(){
    let random= Math.floor(Math.random()*3);
   
    let computerChoice= '';

    if (random === 0){
        computerChoice= "rock";
    }else if (random===1){
        computerChoice= "paper";
    }else{
        computerChoice= "scissors";
    }

    return computerChoice;
}



function getHumanChoice(){
    let askHuman= prompt("rock, paper or scissors?");

    let HumanChoice='';
    if (askHuman.toLowerCase()=== "rock"){
        HumanChoice= "rock";
    }else if(askHuman.toLowerCase()=== "paper"){
        HumanChoice= "paper";
    }else if (askHuman.toLowerCase()=== "scissors"){
        HumanChoice= "scissors";
    }else{
        alert("Please enter only either rock, paper or scissors.");
    }

    return HumanChoice;
}




function playGame(){
    let humanScore= 0;
    let computerScore= 0;

    function playRound(HumanChoice,computerChoice){
        if(HumanChoice === "rock" && computerChoice === "paper"){
            console.log("You Lose! Paper beats Rock.");
            computerScore = computerScore + 1;
            console.log("Your Score: "+ humanScore+ " Computer Score: "+ computerScore);
        }else if(HumanChoice === "rock" && computerChoice === "rock"){
            console.log("Tie.");
            console.log("Your Score: "+ humanScore+ " Computer Score: "+ computerScore);
        }else if (HumanChoice === "rock" && computerChoice === "scissors"){
            console.log("You Won! Rock beats scissors.");
            humanScore = humanScore + 1;
            console.log("Your Score: "+ humanScore+ " Computer Score: "+ computerScore);
        }else if (HumanChoice === "paper" && computerChoice === "paper"){
            console.log("Tie");
            console.log("Your Score: "+ humanScore+ " Computer Score: "+ computerScore);
        }else if (HumanChoice === "paper" && computerChoice === "scissors"){
            console.log("You Lose! Scissors beats paper.");
            computerScore = computerScore + 1;
            console.log("Your Score: "+ humanScore+ " Computer Score: "+ computerScore);
        }else if (HumanChoice === "paper" && computerChoice === "rock"){
            console.log("You Won! Paper beats rock.");
            humanScore = humanScore + 1;
            console.log("Your Score: "+ humanScore+ " Computer Score: "+ computerScore);
        }else if (HumanChoice === "scissors" && computerChoice === "scissors"){
            console.log("Tie.");
            console.log("Your Score: "+ humanScore+ " Computer Score: "+ computerScore);
        }else if (HumanChoice === "scissors" && computerChoice === "paper"){
            console.log("You Won! Scissors beats paper");
            humanScore = humanScore + 1;
            console.log("Your Score: "+ humanScore+ " Computer Score: "+ computerScore);
        }else if (HumanChoice === "scissors" && computerChoice === "rock"){
            console.log("You Lose! Rock beats scissors");
            computerScore = computerScore + 1;
            console.log("Your Score: "+ humanScore+ " Computer Score: "+ computerScore);
        }else {
            console.log("Please input according to choices provided.");
        }

        
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2,computerSelection2);

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3,computerSelection3);

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4,computerSelection4);

    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5,computerSelection5);

}

playGame();
