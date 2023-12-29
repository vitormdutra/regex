const text = `
lits of numbers:
    (47) 3365-6365   
    (37) 3774-0538
    (69) 2812-5452
    91109-2943
`

console.log(text.match(/\(?\d.+/g))
console.log(text.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))