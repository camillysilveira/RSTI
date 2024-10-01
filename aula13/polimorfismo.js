class Carro {
  constructor(cor, modelo, marca) {
    // constructor: uma função especial que é executada automaticamente quando você cria uma nova instância
    this.cor = cor
    this.modelo = modelo
    this.marca = marca
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
  // Subclasse - Herança e Polimorfismo
  //extends Carro --> Significa que a classe CarroEsportivo herda de Carro. Ela tem acesso aos métodos e propriedades, mas pode sobrescrevê-los.
  acelerar() {
    console.log('O carro esportivo está acelerando rapidamente!')
    // Embora CarroEsportivo herde de Carro, ele tem conceitos de polimorfismo, já que ele tem uma implementação própria para os métodos acelerar() e frear().
    //* Uma mesma interface (Método) pode ter diferentes implementações.
  }
  frear() {
    console.log('O carro esportivo está freando com precisão.')
  }
}

class CarroFamilia extends Carro {
  // Subclasse - Herança, Sobrescrita e Polimorfismo
  /* A implementação dos métodos acelerar(), frear() e virar() é diferente da implementação da classe base Carro. Embora a estrutura do método seja a mesma, 
    o comportamento exibido nas mensagens foi modificado para refletir características de um carro de família
    A sobrescrita de métodos ocorre quando uma subclasse fornece sua própria implementação de um método que já existe.*/
  acelerar() {
    console.log('O carro de família está acelerando de forma segura.')
  }
  /*Herança: Permite que uma classe (subclasse) tenha acesso às propriedades e métodos de outra classe (superclasse). 
    A subclasse herda o comportamento da -superclasse (Carro)- e pode usá-lo sem reescrever o código.
    Sobrescrita: Permite que uma subclasse modifique ou redefina um método da superclasse 
    para que ele se comporte de maneira diferente. Isso é útil quando diferentes tipos de objetos precisam de variações específicas de comportamento,
    como um carro esportivo acelerando mais rápido ou um carro de família virando com mais cuidado.
    */

  frear() {
    console.log('O carro de família está freando suavemente.')
  }

  virar(direcao) {
    console.log(
      'O carro de família está virando para ' + direcao + ' com cuidado.'
    )
  }
}

// Exemplo de uso
const meuCarroEsportivo = new CarroEsportivo('azul', 'Ferrari', 'Ferrari')
meuCarroEsportivo.acelerar()
meuCarroEsportivo.frear()
meuCarroEsportivo.virar('direita')

const meuCarroFamilia = new CarroFamilia('preto', 'Voyage', 'Volkswagen')
meuCarroFamilia.acelerar()
meuCarroFamilia.frear()
meuCarroFamilia.virar('esquerda')
