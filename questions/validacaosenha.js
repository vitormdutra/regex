const text = `
123456
tes3t
QUASE123!
#OpA1
#essaSenhaehgrande1234

#OpA1?
Foi123!
`

console.log(text.match(/^.{6,20}$/gm))
console.log(text.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(text.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))