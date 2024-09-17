const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Informe seu salário: ', (salario) => {
  let aumento = parseFloat(salario) * 1.5 // 15%
  console.log(`Você receberá um total de R$${aumento}.`)
  rl.close()
})
