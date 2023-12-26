// g - global
// i - ignore case

const text = 'This is a exemple of usage flags in regex'
console.log(text.match(/T|sa/))
console.log(text.match(/in|ex/i))
console.log(text.match(/i|a/g))
console.log(text.match(/r|l/gi))