/*
let petz = ["cachorro", "gato", "tartaruga"];

const adicionarInicioPetz = () => {
  petz.unshift("vaca", "galinha"); // "vaca", "galinha"
  console.log(petz); // ["vaca", "galinha", "cachorro", "gato", "tartaruga"]
};

const removerFimPetz = () => {
  petz.pop();
  console.log(petz); // ["vaca", "galinha", "cachorro", "gato"]
};

adicionarInicioPetz();
removerFimPetz();
*/

let petz = ["cachorro", "gato", "tartaruga"];

const adicionarInicioPetz = () => {
  petz.unshift("vaca", "galinha");
};

const removerFimPetz = () => {
  petz.pop();
};

adicionarInicioPetz();
removerFimPetz();
console.log(petz); // adicionar console.log apenas depois de executar a operação
//o array final será impresso apenas uma vez
