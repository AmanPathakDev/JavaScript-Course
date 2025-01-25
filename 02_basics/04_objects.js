// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "a", 5: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))


const course = {
    courseName: "JS in hindi",
    price: 999,
    courseTeacher: "Aman"
}

const {courseTeacher: teacher} = course

console.log(teacher)