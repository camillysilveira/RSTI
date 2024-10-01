class Carro {
  // modelo para criar objetos do tipo carro. Uma classe JS encapsula dados de comportamento.
  // Uma classe é um conjunto de propriedades (características) e métodos (comportamentos) que descrevem o que um carro pode ser e fazer.
  constructor(cor, modelo, marca) {
    // constructor: uma função especial que é executada automaticamente quando você cria uma nova instância
    // Ele recebe três parâmetros: cor, modelo e marca.
    this.cor = cor // refere-se ao objeto atual que está sendo criado. No contexto do JS, this aponta para a instância específica da classe.
    // --> Ele armazena as propriedades do objeto. Essas propriedades são características que o objeto vai manter.
    this.modelo = modelo
    this.marca = marca
  }

  acelerar() {
    // Classes podem ter métodos, que são funções e definem o comportamento que o objeto deve ter.
    // o método acelerar não recebe parâmetros e não retorna valor, apenas exibe a mensagem no console.
    console.log('O carro está acelerando.')
  }

  frear() {
    console.log('O carro está freando.')
  }

  virar(direção) {
    // Aqui o método recebe um parâmetro, ao qual define para qual lado o carro deve virar.
    console.log('O carro está virando para ' + direção + '.')
  }
}

// Exemplo de uso
const meuCarro = new Carro('vermelho', 'Fusca', 'Volkswagen') // new: cria uma nova intância da classe Carro.
// Aqui está sendo passado três valores, o Objeto meuCarro será criado com as propriedades acima.
meuCarro.acelerar()
meuCarro.frear()
meuCarro.virar('direita')
// Depois do objeto meuCarro ser criado, podemos chamar seus métodos
