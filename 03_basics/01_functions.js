function sayMyName() {
    console.log("A")
    console.log("m")
    console.log("a")
    console.log("n")
}

// sayMyName()

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2)
}

// addTwoNumbers(3, 6)

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(7, 3)

// console.log(result)


function loginUserMessage(username = "Sam") {
    if(!username) {
        console.log("Please enter username")
        return
    }
    return `${username} logged in`
}

console.log(loginUserMessage())
