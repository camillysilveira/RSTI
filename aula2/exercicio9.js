const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Informe os dias trabalhados: ', (dias) => {
  // Supondo de segunda/sexta 21 dias
  let base = 200
  let salario = parseInt(dias) * parseInt(base)
  console.log(`Você receberá um total de $${salario}.`)
  rl.close()
})
