let petz = ['cachorro', 'gato', 'tartaruga', 'onça', 'tigre']

const movePosicaoPetz = (pet) => {
  petz.splice(4)
  petz.push('tigre')
  console.log(petz)
}

movePosicaoPetz()
