const text = '<b>text</b><strong>strong</strong><div>words</div>'

console.log(text.match(/<(\w+)>.*<\/\1/g))

const text2 = 'Lentamente eh mente muito lenta.'

console.log(text2.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(text2.match(/(?:lenta)(mente).*\1/gi))

console.log(text2.match(/(lenta)(mente)/gi))
console.log(text2.match(/(lenta)(mente)?/gi))
console.log(text2.replace(/(lenta)(mente)/gi, '$2'))
