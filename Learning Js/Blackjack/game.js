let firstCard = Math.floor(Math.random() * 20) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let sum = firstCard + secondCard
let hasBlackJack = false
let gameStatus = true
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


function start() {
    if (sum<21) {
        message ="Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        message = "You lost!"
        gameStatus = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " - " + secondCard
}

function newCard() {
    messageEl.textContent = "Drawing a new card from the deck!"
    let card = 5
    sum += card
    start()
}
