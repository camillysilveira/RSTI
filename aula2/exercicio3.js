const readline = require('readline')
const replace = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

replace.question('Escreva seu nome: ', (nome)  => {
    replace.question('Informe seu sálario: ', (salario) => {
        console.log(`O funcionário ${nome} recebe o total de R$ ${salário} por mês.`)
        replace.close()

    })
})
