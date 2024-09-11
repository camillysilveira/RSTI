const readline = require('readline')
const replace = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

replace.question('Informe o primeiro número: ', (num1) => {
    replace.question('Informe o segundo número: ', (num2) => {
        console.log(`A soma dos números é: ${parseInt(num1) + parseInt(num2)} `)
        replace.close()

    })
})