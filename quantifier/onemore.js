const text1 = 'i see fire and a person scremming FIREEEEE!'
const text2 = 'there is a big fir in NYC'

const regex = /fire+/gi

console.log(text1.match(regex))
console.log(text2.match(regex))

const text3 = 'the numbers: 0123456789.'

console.log(text3.match(/[0-9]/g))
console.log(text3.match(/[0-9]+/g))
