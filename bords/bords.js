const text = 'Rómario era um excelente jogador\n, mas hoje eh um politico questionador'

console.log(text.match(/r/gi))
console.log(text.match(/^r/gi))
console.log(text.match(/r$/gi))

console.log(text.match(/^r.*r$/gi))