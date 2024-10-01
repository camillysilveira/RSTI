const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Olá, informe o seu nome completo: ', (nome) => {
  rl.question(
    'Informe o seu sexo (M para Masculino e F para Feminino): ',
    (sexo) => {
      // O valor de sexo será uma string (como "M" ou "F"), enquanto masculino e feminino são valores numéricos resultantes de cálculos.

      rl.question('Informe o valor da compra: ', (compra) => {
        const descontoMasculino = 0.05
        const descontoFeminino = 0.13

        let valorCompra = parseFloat(compra) // Converter a compra para número

        if (sexo.toUpperCase() === 'M') {
          // toUpperCase - permite que você compare a entrada do usuário sem se preocupar se ele digitou em maiúsculas ou minúsculas.
          let valorComDesconto = valorCompra - valorCompra * descontoMasculino // é possível simplificar o código e evitar a declaração de uma variável intermediária
          //como valorComDesconto ao calcular e exibir o valor diretamente dentro do bloco if ou else if.
          console.log(
            `O total da sua compra com desconte é R$${valorComDesconto.toFixed(
              2
            )}.`
          )
          /*} else if { --> Precisa de uma condição entre parênteses como na situação do if (sexo.toUpperCase() === 'M') */
        } else if (sexo.toUpperCase() === 'F') {
          let valorComDesconto = valorCompra - valorCompra * descontoFeminino
          console.log(
            `O total da sua compra com desconte é R$${valorComDesconto.toFixed(
              2
            )}.`
          )
        } else {
          console.log(
            'Sexo informado é inválido. Utilize "M" para Masculino ou "F" para Feminino.'
          )
        }

        rl.close()
      })
    }
  )
})
