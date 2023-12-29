const text = `
list of emails:
    sabi8637@uorak.com
    arelis730@uorak.com
    gpsd@op.br
    test@gmail.com
    bddg@outlook.ck
    1212esa@fast.ckk 
`

console.log(text.match(/\w+@.+/g))
console.log(text.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g))
console.log(text.match(/\w+@\w+\.\w{2,4}/g))
console.log(text.match(/[\w]+@\w+\.\w{2,4}/g))
console.log(text.match(/[\w]+@\w+\.\w{2,4}\.?\w{0,2}/g))

console.log(text.match(/[\w]+@\w+\.\w{2,4}(\.\w{2})?/g))