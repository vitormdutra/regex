const text = 'dia diatonico diafragma, media wikipedia bom_dia melodia radial'

console.log(text.match(/\bdia\w+/gi))
console.log(text.match(/\w+dia\b/gi))
console.log(text.match(/\w+dia\w+/gi))
console.log(text.match(/\bdia\b/gi))

const text2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(text2.match(/\bdia\b/gi))
console.log(text2.match(/(\S*)?dia(\S*)?/gi))
