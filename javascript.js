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

function round(userInput){
    let computerSelection = getcomputerchoice()

     if(userInput=== "ROCK" && computerSelection === "SCISSORS"){
       uScore++;
        userScore.textContent = 'User: ' + uScore;
        state.textContent = 'User Won'
        userR.textContent = 'User: ' + userInput
        computerR.textContent = 'Computer: ' + computerSelection
    }
    else if(userInput=== "PAPER" && computerSelection === "ROCK"){
        uScore++;
        userScore.textContent = 'User: ' + uScore;
        state.textContent = 'User Won'
        userR.textContent = 'User: ' + userInput
        computerR.textContent = 'Computer: ' + computerSelection
    }
    else if(userInput=== "SCISSORS" && computerSelection === "PAPER"){
        uScore++;
        userScore.textContent = 'User: ' + uScore;
        state.textContent = 'User Won'
        userR.textContent = 'User: ' + userInput
        computerR.textContent = 'Computer: ' + computerSelection
    }
    else if(userInput === computerSelection){
        state.textContent = 'Draw'
        userR.textContent = 'User: ' + userInput
        computerR.textContent = 'Computer: ' + computerSelection
    }
    else{
        cScore++;
        cpuScore.textContent = 'Computer: ' + cScore
        state.textContent = 'Computer Won'
        userR.textContent = 'User: ' + userInput
        computerR.textContent = 'Computer: ' + computerSelection
    }

    if(uScore === 5 || cScore === 5){
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
    }
}

function checkScore (userInput){
            round(userInput)
}


let uScore = 0;
let cScore = 0;

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')



rock.addEventListener('click', () =>checkScore('ROCK'))
paper.addEventListener('click', () => checkScore('PAPER'))
scissors.addEventListener('click', () => checkScore('SCISSORS'))

// while(uScore == 5|| cScore == 5){
// // Get the button element
//     console.log('HI')
//     rock.removeEventListener('click', () => round('ROCK'))
//    rock.disabled = true;
//    paper.disabled =true;
//    scissors.disabled = true; 
// }

