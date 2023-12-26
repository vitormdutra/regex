const text = '.$+*?-'

console.log(text.match(/[.$+*?-]/g))
console.log(text.match(/[$-?]/g))


console.log(text.match(/[$\-?]/g))
console.log(text.match(/[-?]/g))
