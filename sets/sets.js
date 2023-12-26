const text = '1,2,3,4,5,6,7,8,9,a.b c!d?e[f'

const regexDuo = /[02468]/g

console.log(text.match(regexDuo))

const text2 = 'you can catch, do it'
const regexExemple = /.[ca]/g
console.log(text2.match(regexExemple))