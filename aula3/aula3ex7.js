let petz = ['cachorro', 'gato', 'tartaruga']

const adicionarPosicaoPetz = (pet) => {
  petz.splice(2, 0, pet)
  console.log(petz) // ['cachorro', 'gato', 'onça', 'tartaruga']
}

adicionarPosicaoPetz('onça')
