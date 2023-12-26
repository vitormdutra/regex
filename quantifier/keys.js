const text = 'you won 120 dolars using this numbers 6 9 21 23 45 46.'

console.log(text.match(/\d{1,2}/g))
console.log(text.match(/[0-9]{2}/g))
console.log(text.match(/\d{1,}/g))

console.log(text.match(/\w{7}/g))
console.log(text.match(/[\w]{7,}/g))

console.log(text.match(/\b\d{1,2}\b/g))