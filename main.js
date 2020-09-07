const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const playerChoice = document.querySelector('#player-choose')
const pcChoice = document.querySelector('#computer-choose')
const battleResult = document.querySelector('.vs-result')
const playerPointsCont = document.querySelector(".player-points")
const pcPointsCont = document.querySelector('.pc-points')



rock.addEventListener('click', playGame)
paper.addEventListener('click', playGame)
scissors.addEventListener('click', playGame)

let player;
let pc;
let playerPoints = 0
let pcPoints = 0

function playGame(e) {
    playerChoice.textContent = `You have choosen ${e.target.className}`
    player = e.target.className
    console.log(player)
    rollingDice()
    result()

}

function rollingDice() {

    let dice = Math.random()
    if (dice <= Math.random()) {
        pcChoice.textContent = "Computer choose rock "
        pc = 'rock'
        console.log(pc)
    } else if (dice >= Math.random()) {
        pcChoice.textContent = "Computer choose paper"
        pc = 'paper'
        console.log(pc)
    }
    else {
        pcChoice.textContent = 'Computer choose scissors'
        pc = 'scissors'
        console.log(pc)
    }
}

function result() {
    if (player === pc) {
        battleResult.textContent = 'draw'
    } else if (player === 'rock' && pc === 'scissors') {
        battleResult.textContent = "Victory"
        playerPoints += 1
    } else if (player === 'scissors' && pc === 'paper') {
        battleResult.textContent = "Victory"
        playerPoints += 1
    }
    else if (player === 'paper' && pc === 'rock') {
        battleResult.textContent = 'Victory'
        playerPoints += 1
    } else {
        battleResult.textContent = 'Lost'
        pcPoints += 1
    }
    playerPointsCont.textContent = playerPoints
    pcPointsCont.textContent = pcPoints
}

