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

// console.log(loginUserMessage())

function calcCartPrice(...num) {
    return num
}

// console.log(calcCartPrice(100, 200, 300, 500))

const user = {
    username: "Aman",
    price: 33
}

function handelObject(anyObject) {
    return `Username is ${anyObject.username} and price is ${anyObject.price}`
}

// console.log(handelObject(user))
console.log(handelObject({
    username: "sam",
    price: 55
}))


const myNewArray = [200, 400, 600]

function returnSecondArray(myArray) {
    return myArray[2]
}

console.log(returnSecondArray(myNewArray))