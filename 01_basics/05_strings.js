const name = "Aman"
const repoCount = 50

// console.log(name + repoCount + " hello")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('Amanap')

// console.log(gameName[0])

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('m'))

const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(-3, 1)
console.log(anotherString)

const newStringOne = "    Aman    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://aman.com/aman%20pathak"

console.log(url.replace("%20", "-"))