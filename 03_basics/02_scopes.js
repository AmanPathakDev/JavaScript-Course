// var c = 300
let a = 100

if(true) {
    let a = 10
    const b = 20
}

// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const username = "Aman"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if (true) {
    const username = "Aman"

    if(username === "Aman") {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)


// ****************************** Interesting **************************************8

addone(5)
function addone(num) {
    return num + 1
}


addTwo(3)
const addTwo = function(num) {
    return num + 1
}
