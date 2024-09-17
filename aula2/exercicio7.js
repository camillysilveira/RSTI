const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin, // recebe dados do usuário.
  output: process.stdout // log de texto e imprimir a string que é passada.
})

rl.question('Informe o seu saldo: ', (valor_reais) => {
  // rl. -> evitar erro e fechar a interface corretamente.
  let dolar = parseFloat(valor_reais) / 5.6 // parseFloat - analisa e retorna o resultado com n° decimal.
  console.log(`Você receberá um total de: $${dolar} dolares.`)
  rl.close() // Fechar interface
})
