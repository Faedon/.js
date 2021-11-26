let num1 = Math.floor(Math.random() * 10) + 2
let num2 = Math.floor(Math.random() * 10) + 2
let hasBlackJack = false
let gameStatus = true
let sum = num1 + num2


if (sum<21) {
    console.log("Do you want to draw?")
} else if (sum === 21) {
    console.log("Blackjack!")
    hasBlackJack = true
} else {
    console.log("You lost!")
    gameStatus = false
}