const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Informe o ano do seu nascimento: ', (anoNascimento) => {
  const idadeMinima = 18
  const anoAtual = 2024

  let idade = anoAtual - anoNascimento // ultilizando podeAlistar ocorre ambiguidade - "idade"

  if (idade === idadeMinima) {
    // === Compara valor e tipo, ajudando a garantir a comparação exata do que se espera, sem conversões automáticas de tipos.
    console.log(
      'Você está apto a se alistar nas Forças Armadas do Brasil este ano.'
    )
  } else if (idade < idadeMinima) {
    // (condição2)
    let anosRestantes = idadeMinima - idade
    console.log(
      `Você não tem a idade mínima para realizar o alistamento. Deverá realizá-lo em ${anosRestantes} anos .`
    )
  } else {
    // (condição3)
    let anosAtrasados = idade - idadeMinima
    console.log(
      `Você perdeu o prazo do Alistamento Militar. Seu alistamento deveria ter ocorrido há ${anosAtrasados} anos.`
    )
  }

  rl.close()
})
