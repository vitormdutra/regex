const text = `
leo eh muito legal
emanuel foi jogar em sergipe
bieanca eh casada com habib
`

console.log(text.match(/\n/g))
console.log(text.match(/^(\w).+\1$/g))
console.log(text.match(/^(\w).+\1$/gim))