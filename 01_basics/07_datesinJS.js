// Date

let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2024, 0, 21)
// let myCreatedDate = new Date(2024, 0, 21, 5, 3)
// let myCreatedDate = new Date("2024-01-23")
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getFullYear())

newDate.toLocaleString("default", {
    weekday: "long"
})