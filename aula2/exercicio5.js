const readline = require('readline')
const replace = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

replace.question('Informe a primeira nota: ', (num1) => {
    replace.question('Informe a segunda nota: ', (num2) => {
        let soma = parseInt(num1) + parseInt(num2)
        let media = soma/2
        console.log(`Resultado da média das notas é ${media}`)
        replace.close()
    })
})