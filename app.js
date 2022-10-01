const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['orange', 'yellow', 'purple', 'pink', 'red', 'blue', 'coraL', 'green', 'grey', 'gold', 'violet']

body.style.backgroundColor = 'coraL'

button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}