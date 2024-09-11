  let array = [1, 2, 3]
    const manipulacaoArray = valor => {
        array.push(valor)
        console.log(array)

    }
    adicionaInicio(14)

    const removeInicio = (valor) => {
        array.shift()
        console.log(array)
    }

    removeInicio()