function getcomputerchoice(){
    let x = Math.floor(Math.random() * 3) +1
    if(x == 1){
        return "ROCK"
    }
    else if(x==2){
        return "PAPER"
    }
    else{
    return "SCISSORS"}
}

function round(userInput, computerSelection){
    if(userInput=== "ROCK" && computerSelection === "SCISSORS"){
    return "User won"
    }
    else if(userInput=== "PAPER" && computerSelection === "ROCK"){
        return "User won"
    }
    else if(userInput=== "SCISSORS" && computerSelection === "PAPER"){
        return "User won"
    }
    else if(userInput === computerSelection){
        return "draw"
    }
    else{
        return "User Lost"
    }
}

const userInput = prompt("Pick, rock, paper, scissors").toUpperCase()
const computerSelection = getcomputerchoice()

if(userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS"){

console.log(userInput)
console.log(computerSelection)
console.log(round(userInput,computerSelection))

}
else
console.log("Incorrect input")
alan