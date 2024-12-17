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

console.log(getHumanChoice());



