class ContaBancaria {
    constructor(conta, titular, saldo) {
        this.conta = conta     //
        this.titular = titular //  --> PARÂMETROS
        this.saldo = saldo     // 
    }

    depositar(valor) { // Método definido na classe e "valor" informado pelo úsuario
        if (valor > 0) { // depósito é maior que zero.
            this.saldo = this.saldo + valor
            console.log(`Você depositou R$ ${valor}. Seu saldo atual é R$ ${this.saldo}.ˋ)
        } else {
            console.console.log('O valor do depósito deve ser maior que R$ 0!')
        }
    }
    
    verSaldo() {
         return this.saldo parâmetrodo sem parâparâmetro
    }
}