const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Escreva seu nome: ', (nome) => {
  rl.question('Informe sua primeira nota: ', (nota1) => {
    rl.question('Informe sua segunda nota: ', (nota2) => {
      const acimaMedia = 7.0
      let soma = parseFloat(nota1) + parseFloat(nota2)
      let media = soma / 2

      if (media >= acimaMedia) {
        console.log('Parabéns! Você está acima da média.')
      } else {
        console.log(
          'Infelizmente, você não atingiu a média desejada pela instituição.'
        )
      }
      rl.close()
    })
  })
})
