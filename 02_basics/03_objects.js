// Singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Aman",
    "full name" : "Aman Pathak",
    [mySym]: "myKey1",
    age: 13,
    location: "delhi",
    email: "aman@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "aman@google.com"
// Object.freeze(JsUser)
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello")
}

JsUser.greetings2 = function(){
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.greetings())
console.log(JsUser.greetings2())