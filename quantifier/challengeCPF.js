const text = `
Cpf accepteds:
    600.234.242-12
    436.782.080-70
    214.604.080-71
    647.730.900-90
`
console.log(text.match(/\d.+/g))