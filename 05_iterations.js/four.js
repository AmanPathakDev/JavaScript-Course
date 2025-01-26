const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}

// for (const key in myObject) {
//     console.log(`${key} -> ${myObject[key]}`)
// }

const map = new Map()

map.set("IN", "India")
map.set("USA", "America")
map.set("FR", "France")

for (const key in map) {
    console.log(`${key} -> ${map[key]}`)
}