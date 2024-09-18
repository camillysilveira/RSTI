const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Informe o ano do seu nascimento: ', (anoNascimento) => {
  const idadeMinima = 16
  const anoAtual = 2024

  let podeVotar = anoAtual - anoNascimento

  if (podeVotar >= idadeMinima) {
    //>= "maior ou igual" e é usado para comparar dois valores.
    //Ele verifica se o valor à esquerda é maior ou igual ao valor à direita.
    console.log('Você está apto a votar nas eleições deste ano.')
  } else {
    console.log('Você não é apto a votar neste ano.')
  }
  rl.close()
})
