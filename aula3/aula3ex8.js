let petz = ['cachorro', 'gato', 'tartaruga', 'onça', 'tigre']

const removePosicaoPetz = (pet) => {
  petz.splice(3, 2, 'urubu')
  console.log(petz)
}

removePosicaoPetz()
