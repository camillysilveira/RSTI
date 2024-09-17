const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Informe a largura: ', (largura) => {
  rl.question('Informe a altura: ', (altura) => {
    let area = parseInt(largura) * parseInt(altura)
    let tinta = area / 2
    console.log(
      `Para a área de ${area} m², será necessário ${tinta} latas de tinta.`
    ) // Sempre ultilizar "$"
    rl.close()
  })
})
