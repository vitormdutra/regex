const text = 'ABC [abc] a-c 1234'

console.log(text.match(/[a-c]/g))
console.log(text.match(/a-c/g))

console.log(text.match(/[A-z]/g))
