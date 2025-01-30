# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }
  })
})
```

## Project 2
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height"
  } else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight"
  } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)

    results.innerHTML = `<span>${bmi}</span>`
  }
})
```

## Project 3
```javascript
const clock = document.getElementById("clock")

setInterval(function() {
  let date = new Date()
  // console.log(date.toLocaleString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## Project 4
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
  submit.addEventListener("click", function(e) {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if(isNaN(guess)) {
    alert("Please enter valid number")
  } else if(guess < 1) {
    alert("Please enter number more than 0")
  } else if(guess > 100) {
    alert("Please enter number more than 100")
  } else {
    prevGuess.push(guess)
    if(numGuess === 11) {
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${guess}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber) {
    displayMessage(`You guessed it right`)
  } else if(guess < randomNumber) {
    displayMessage(`Guess is too low`)
  } else if(guess > randomNumber) {
    displayMessage(`Guess is too high`)
  }
}

function displayGuess(guess) {
  userInput.value = ""
  guessSlot.innerHTML += `${guess}     ,`
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = ""
  userInput.setAttribute("disabled", "")
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener("click", function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ""
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    playGame = true
  })
}
```

## Project 6
```javascript
// Generate random color

const randomColor = function() {
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

let intervelId
const startChangingColor = function() {
  if(!intervelId) {
    intervelId = setInterval(changeBgColor, 1000)
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor()
  }
}

const stopChangingColor = function() {
  clearInterval(intervelId)
  intervelId = null
}

document.querySelector("#start").addEventListener("click", startChangingColor)
document.querySelector("#stop").addEventListener("click", stopChangingColor)
```