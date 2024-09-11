const readline = require('readline')
const replace = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

replace.question('Escreva seu nome: ', (nome)  => {
    console.log(`Olá, ${nome}! `)

replace.close()
})