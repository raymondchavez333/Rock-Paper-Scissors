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
    
    

    function playRound(HumanChoice,computerChoice){
        if(HumanChoice === "rock" && computerChoice === "paper"){
            console.log("You Lose! Paper beats Rock.");
            let computerScore= 0;
            computerScore = computerScore + 1;
            console.log(computerScore);
            playGame();
        }else if(HumanChoice === "rock" && computerChoice === "rock"){
            console.log("Tie.");
            playGame();
        }else if (HumanChoice === "rock" && computerChoice === "scissors"){
            console.log("You Won! Rock beats scissors.");
            let humanScore= 0;
            humanScore = humanScore + 1;
            console.log(humanScore);
            playGame();
        }else if (HumanChoice === "paper" && computerChoice === "paper"){
            console.log("Tie");
            playGame();
        }else if (HumanChoice === "paper" && computerChoice === "scissors"){
            console.log("You Lose! Scissors beats paper.");
            let computerScore= 0;
            computerScore= computerScore + 1;
            console.log(computerScore);
            playGame();
        }else if (HumanChoice === "paper" && computerChoice === "rock"){
            console.log("You Won! Paper beats rock.");
            let humanScore= 0;
            humanScore= humanScore + 1;
            console.log(humanScore);
            playGame();
        }else if (HumanChoice === "scissors" && computerChoice === "scissors"){
            console.log("Tie.");
            playGame();
        }else if (HumanChoice === "scissors" && computerChoice === "paper"){
            console.log("You Won! Scissors beats paper");
            let humanScore= 0;
            humanScore= humanScore + 1;
            console.log(humanScore);
            playGame();
        }else{
            console.log("You Lose! Rock beats scissors");
            computerScore= computerScore + 1;
            let computerScore= 0;
            console.log(computerScore);
            playGame();
        }

    
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection,computerSelection);
    
    
    
}

playGame();
