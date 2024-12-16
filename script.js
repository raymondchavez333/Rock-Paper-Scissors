function getComputerChoice(){
    return Math.floor(Math.random()*3);
}
let computerChoice= '';
if (getComputerChoice()=== 0){
    computerChoice= "rock";
}else if (getComputerChoice()===1){
    computerChoice= "paper";
}else{
    computerChoice= "scissors";
}

console.log(computerChoice);