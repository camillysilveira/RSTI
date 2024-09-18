const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Informe a velocidaade que o veículo estava: ', (velocidade) => {
  const limiteVelocidade = 80 // const - cria uma variável cujo o valor é fixo
  const multaPorKm = 5
  if (velocidade > limiteVelocidade) {
    let acimaVelocidade = velocidade - limiteVelocidade // Let - Declara uma variável local
    let multaVelocidade = multaPorKm * acimaVelocidade

    console.log(
      `Você excedeu o limite de velocidade em ${acimaVelocidade}Km/h.`
    )
    console.log(`O valor da sua multa será um total de ${multaVelocidade}.`)
  } else {
    console.log('Você estava dentro do limite de velocidade')
  }
  rl.close()
})
