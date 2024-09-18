let petz = ['cachorro', 'gato', 'tartaruga', 'onça', 'tigre']

const movePosicaoPetz = (array, index) => {
  array.splice(index, 1) // index: É o índice do item que você deseja remover do array. Ao passar um número como argumento, a função vai utilizar esse número para identificar o item no array.
  //Usar o Index permite que a função seja reutilizável
  //permite também mover qualquer elemento apenas ultilizando o índice
  //(index, 1) informa que ele será executado um única vez
  console.log(array)
}

movePosicaoPetz(petz, 4)
