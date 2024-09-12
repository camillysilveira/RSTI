let petz = ["cachorro", "gato", "tartaruga"];

const substituirPetz = () => {
  petz.splice(1, 1, "cavalo");
  console.log(petz);
};

substituirPetz();
