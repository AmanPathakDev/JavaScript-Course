const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "batman", "flash"]

// marvel.push(dc)

// console.log(marvel)
// console.log(marvel[3][1])

// const allNewHeros = [...marvel, ...dc]
// console.log(allNewHeros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realArray = anotherArray.flat(Infinity)

console.log(realArray)

console.log(Array.isArray("Aman"))
console.log(Array.from("Aman"))
console.log(Array.from({name: "Aman"})) // interesting

let a1 = 100
let a2 = 200
let a3 = 300

console.log(Array.of(a1, a2, a3))