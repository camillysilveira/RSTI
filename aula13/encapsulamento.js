class Carro {
  #cor
  #modelo
  #marca

  constructor(cor, modelo, marca) {
    //os parâmetros "cor, modelo, e marca" são passados e atribuídos às propriedades privadas correspondentes.
    this.#cor = cor // |
    this.#modelo = modelo // | --> PROPRIEDADE PRIVADA: só podem ser acessadas e modificadas dentro da própria classe.
    this.#marca = marca // |     Isso é uma técnica de encapsulamento que protege os dados de acessos indevidos ou alterações externas.
  }
  /*Getters (getCor): métodos usados para ler as propriedades privadas.
Setters(setCor): métodos usados para modificar essas propriedades*/

  //Permitem acessar "getCor" e alterar "setCor" (no caso a cor do carro), de forma controlada.
  getCor() {
    return this.#cor
  }

  setCor(cor) {
    this.#cor = cor
  }

  getModelo() {
    return this.#modelo
  }

  setModelo(modelo) {
    this.#modelo = modelo
  }

  getMarca() {
    return this.#marca
  }

  setMarca(marca) {
    this.#marca = marca
  }

  acelerar() {
    // "acelerar()", "frear()" e "virar(direcao)" são métodos públicos, podem ser chamados de fora da classe.
    console.log('O carro está acelerando.')
  }

  frear() {
    console.log('O carro está freando.')
  }

  virar(direcao) {
    console.log('O carro está virando para ' + direcao + '.')
  }
}

const meuCarro = new Carro('vermelho', 'Fusca', 'Volkswagen')

//Acessando as propriedades por métodos públicos
console.log(meuCarro.getCor())
meuCarro.setCor('azul')
console.log(meuCarro.getCor())
// Ultilizando métodos "get" e "set" para acessar as propriedades privadas diretamente.

console.log(meuCarro.getModelo())
meuCarro.setModelo('Gol')
console.log(meuCarro.getModelo())
