class Carro {
  constructor(cor, modelo, marca) {
    //constructor: uma função especial que é executada automaticamente quando você cria uma nova instância
    this.cor = cor // |
    this.modelo = modelo // | --> MÉTODOS (Define o comportamento genérico do objeto)
    this.marca = marca // |
  }

  acelerar() {
    console.log('O carro está acelerando.')
  }

  frear() {
    console.log('O carro está freando.')
  }

  virar(direcao) {
    console.log('O carro está virando para ' + direcao + '.')
  }
}

class CarroEsportivo extends Carro {
  constructor(cor, modelo, marca, potencia) {
    super(cor, modelo, marca)
    this.potencia = potencia
  }

  acelerar() {
    console.log('O carro esportivo está acelerendo rapidamente.')
  }

  mostrarPotencia() {
    console.log(`O carro esportivo tem ${this.potencia} de potência!`)
  }
}

const meuCarroEsportivo = new CarroEsportivo( // Instanciação: Um objeto da classe CarroEsportivo criado com os valores "vermelho", "Ferrari 296", etc.
  // processo de criar um objeto (ou instância) a partir de uma classe em programação orientada a objetos (cria um objeto no molde).
  'vermelho',
  'Ferrari 296',
  'Ferrari',
  '500HP'
)
meuCarroEsportivo.acelerar()
meuCarroEsportivo.frear()
meuCarroEsportivo.virar('esquerda')
meuCarroEsportivo.mostrarPotencia()

/* Herança: CarroEsportivo ultiliza o extends para herdar todos os atributos e métodos da superclasse (Carro)
   Construtor: O constructor de CarroEsportivo tem um parâmetro a mais "potência", além dos já herdados.
   Métodos: mostrarPotencia é exclusivo de carroEsportivo.
*/
