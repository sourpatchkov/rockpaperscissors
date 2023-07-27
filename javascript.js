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
        if(uScore> cScore){
            win.textContent= 'User Won!'
        }
        else{
            win.textContent= 'Computer Won!'
        }
        restart()
    }
}

let uScore = 0;
let cScore = 0;

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const modal_container = document.getElementById('modal-contain')
const tryagain = document.getElementById('tryagain')


rock.addEventListener('click', () =>round('ROCK'))
paper.addEventListener('click', () => round('PAPER'))
scissors.addEventListener('click', () => round('SCISSORS'))

function restart(){
    modal_container.classList.add('show');
    modal.classList.add('show')
    
    tryagain.addEventListener('click',()=> screenRestart())
}

function screenRestart(){
    modal_container.classList.remove('show'); 
    modal.classList.remove('show');
    uScore =0;
    cScore =0;
    state.textContent = '--------' 
    userScore.textContent = 'User: 0'
    cpuScore.textContent= 'Computer: 0'
    userR.textContent= 'User: ------'
    computerR.textContent = 'Computer: ------'
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
}