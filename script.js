function getComputerChoice(){
    let random= Math.floor(Math.random()*3);

    let computerChoice= '';
    if (getComputerChoice()=== 0){
        computerChoice= "rock";
    }else if (getComputerChoice()===1){
        computerChoice= "paper";
    }else{
        computerChoice= "scissors";
    }

}


function getHumanChoice(){
    let askHuman= prompt("rock, paper or scissors?");

    let HumanChoice='';
    if (askHuman.toLowerCase()=== "rock"){
        HumanChoice= "rock";
    }else if(askHuman.toLowerCase()=== "paper"){
        HumanChoice= "paper";
    }else {
        HumanChoice= "scissors";
    }
}



