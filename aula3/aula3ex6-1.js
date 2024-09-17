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

let petz = ['cachorro', 'gato', 'tartaruga']

const adicionarInicioRemoverFimPetz = () => {
  petz.unshift('vaca')
  petz.pop()
  console.log(petz)
}

adicionarInicioRemoverFimPetz()
