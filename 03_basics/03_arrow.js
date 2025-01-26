const user = {
    username: "Aman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welome to website`)
    }
}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

// function chai() {
//     let username = "Aman"
//     console.log(this.username)
// }

// chai()


// const chai = () => {
//     let username = "Aman"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Aman"})

// console.log(addTwo(3, 4))