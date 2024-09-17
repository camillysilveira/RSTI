let petz = ['cachorro', 'gato', 'tartaruga', 'onça', 'tigre']

const removePosicaoPetz = (pet) => {
  petz.splice(3, 2, 'urubu') // pop() remove o último elemento - splice() remove de uma posição específica e substitui
  console.log(petz)
}

removePosicaoPetz('urubu')
