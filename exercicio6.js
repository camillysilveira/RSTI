const readline = require('readline')
const replace = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

replace.question('Informe um número inteiro: ', (num1) => {
        let soma = parseInt(num1) +1
        let subtracao = parseInt(num1) -1
        console.log(`O sucessor é ${soma} e seu antecessor é ${subtracao}`)
        replace.close()
    })
})
