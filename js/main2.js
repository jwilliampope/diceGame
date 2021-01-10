let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

player2Dice.classList.add("noActive")
function showResetButton() {
  rollBtn.style.display = "none"
  resetBtn.style.display = "block"
}

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1

  if (player1Turn) {
    player1Score += randomNumber
    player1Scoreboard.textContent = player1Score

    player1Dice.innerHTML = `<img src="./images/dice${randomNumber}.PNG" alt="" />`

    player2Dice.classList.remove("active")
    player2Dice.classList.add("noActive")
    player1Dice.classList.remove("noActive")
    player1Dice.classList.add("active")
    message.textContent = "Player 1 Turn"
  } else {
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score
    player2Dice.innerHTML = `<img src="./images/dice${randomNumber}.PNG" alt="" />`

    player1Dice.classList.remove("active")
    player1Dice.classList.add("noActive")
    player2Dice.classList.remove("noActive")
    player2Dice.classList.add("active")
    message.textContent = "Player 2 Turn"
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 WIN"
    showResetButton()
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 WIN"
    showResetButton()
  }
  player1Turn = !player1Turn
})

resetBtn.addEventListener("click", function () {
  reset()
})

function reset() {
  player1Score = 0
  player2Score = 0
  player1turn = true

  player1Scoreboard.textContent = player1Score
  player2Scoreboard.textContent = player2Score

  message.textContent = "Player 1 Turn"
  player1Dice.textContent = "-"
  player2Dice.textContent = "-"

  player2Dice.classList.remove("active")
  player1Dice.classList.add("active")

  rollBtn.style.display = "block"
  resetBtn.style.display = "none"
}
