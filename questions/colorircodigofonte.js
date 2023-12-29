const aplicarcor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files')
const text = files.read('codigofonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = text.match(codeRegex)[0]

codigo = aplicarcor(codigo, /(\".*\")/g, 'ce9178')

codigo = aplicarcor(codigo, /\b(public|class|static)\b/g, 'd857cf')

codigo = aplicarcor(codigo, /\b(void)\b/g, '1385e2')

codigo = aplicarcor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

codigo = aplicarcor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudofinal = text.replace(codeRegex, codigo)
files.write('codigofonte.html', conteudofinal)