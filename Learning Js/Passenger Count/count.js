let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let prev_ent = count + " - "
    saveEl.innerText += prev_ent
    countEl.innerText = 0
    count = 0
}

