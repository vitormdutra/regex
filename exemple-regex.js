const text = '0,9,8,7,6,5,4,3,2,1,q,w,e,r,t,y,u,i,o,p'

const regexTest = RegExp('q')

console.log('methods using RegExp')
console.log(regexTest.test(text)) // return true or false
console.log(regexTest.exec(text)) // return full information

const regexLetter = /[p-w]/g
console.log('methods using string')
console.log(text.match(regexLetter)) // match the case
console.log(text.search(regexLetter)) // found the number 
console.log(text.replace(regexLetter, 'found')) // replace the match
console.log(text.split(regexLetter)) // create a array