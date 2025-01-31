const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task complete")
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise Consumed")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async part 2")
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved")
})

const promiseThree = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = false
        if(!data) {
            resolve({username: "Aman", email: "aman@gmail.com"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = false
        if(!data) {
            resolve({username: "Javascript", email: "js@gmail.com"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})