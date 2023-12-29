const text = `
os e-mails dos convidados sao:

    fulano@test.com.br
    xico@gmail.com
    joao@empresa.info.br
    maria_silva@registro.br
    rafa.sampaio@yahoo.com
    fulano+de+tal@escola.teste.br
`

console.log(text.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))