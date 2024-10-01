import fs from 'node:fs/promises' // módulo "fs/promises" do Node.js é a biblioteca padrão para manipulação de sistema de arquivos.
// /"promises" indica que estamos usando a versão prometida (promise-based) da API de arquivos, o que permite usar "async/await" para operações assíncronas
//  "fs" permite realizar operações de maneira assíncrona e mais eficiente, sem bloquear o fluxo do programa.
import { select, input, checkbox } from '@inquirer/prompts' // importando as três funções da biblioteca "@inquirer/prompts".
// amplamente usada em CLI (Command Line Interface) para criar menus interativos e capturar entradas do usuário diretamente no terminal.
/* 
--> select: Exibe um menu de seleção para o usuário escolher uma opção entre várias.
--> input: Permite que o usuário insira um texto (como registrar o nome de uma meta, por exemplo).
--> checkbox: Apresenta uma lista de opções para o usuário marcar várias delas.
*/
const file = 'goals.json' // arquivo onde os dados das metas provavelmente serão armazenados e lidos pelo sistema.

let goals

let message = 'Bem vindo ao seu controle de metas!'

const fetchGoals = async () => {
  try {
    const data = await fs.readFile(file, 'utf-8') // leitura do arquivo
    goals = JSON.parse(data)
  } catch (error) {
    goals = []
  }
}

const saveGoals = async () => {
  await fs.writeFile(file, JSON.stringify(goals, null, 2))
}

const registerGoal = async () => {
  const goal = await input({
    message: 'Digite a sua meta: '
  })

  if (goal.length == 0) {
    message = 'A meta não pode ser vazia!'
    return
  }

  goals.push({ value: goal, checked: false })

  message = 'Meta cadastrada com sucesso!'
}

const listGoals = async () => {
  if (goals.length == 0) {
    message = 'Não existem metas cadastradas!'
    return
  }

  // armazena as metas marcadas como concluídas
  const checkedGoals = await checkbox({
    message:
      'Use as setas para mudar de meta, o espaço para marcar/desmarcar a meta e o enter para finalizar.',
    choices: [...goals],
    instructions: false // remover as instruções em inglês
  })

  // garantir que as metas iniciem como desmarcadas
  goals.forEach((goal) => {
    goal.checked = false
  })

  if (checkedGoals == 0) {
    message = 'Nenhuma meta foi selecionada!'
    return
  }

  // para cada meta selecionada, marca como concluída
  checkedGoals.forEach((checkedGoal) => {
    const goal = goals.find((selectedGoal) => {
      return selectedGoal.value == checkedGoal
    })

    goal.checked = true
  })

  message = 'Meta(s) marcada(s) como concluída(s)!'
}

const listCompletedGoals = async () => {
  const completedGoals = goals.filter((goal) => {
    return goal.checked
  })

  if (completedGoals.length == 0) {
    message = 'Não existem metas concluídas.'
    return
  }

  completedGoals.forEach((completedGoal) => {
    console.log(completedGoal.value)
  })
}

const listIncompletedGoals = async () => {
  const incompletedGoals = goals.filter((goal) => {
    return !goal.checked
  })

  if (incompletedGoals.length == 0) {
    message = 'Todas as metas foram concluídas!'
    return
  }

  incompletedGoals.forEach((incompletedGoal) => {
    console.log(incompletedGoal.value)
  })
}

/* const listCompletedGoalsAlternative = async () => {
  const completedGoals = goals.filter((goal) => goal.checked)
  console.log(`Você completou ${completedGoals.length}/${goals.length} metas.`)
  return
}*/

const porcentualCompletedGoals = async () => {
  // async: Permite o uso de operações assíncronas.
  const completedGoals = goals.filter((goal) => goal.checked) // nova variável completedGoals: metas marcadas como conclúidas.
  // filter: cria um novo array, incluindo apenas o que atende a determinada condição.
  // checked neste caso será true, já que é necessário que a meta seja marcada como concluída.
  const parcial = `${completedGoals.length}/${goals.length}` // cria uma variável denominada parcial, sendo uma string no formato x/y.
  // completedGoals: Retorna o n° de metas concluídas
  // goals.length: Retorna o n° total de metas cadastradas.

  const percentage = (completedGoals.length / goals.length) * 100 // Divide o n° de metas concluídas pelo n° de metas cadastradas
  // formando uma fração que será multiplicada por 100, retornando um valor porcentual de metas.

  console.log(`Você completou ${percentage.toFixed(2)}% das metas.`) // toFixed(2): arredonda o valor da porcentagem para duas casas decimais
  console.log(`Você completou ${completedGoals.length}/${goals.length} metas.`)

  return {
    parcial: `${completedGoals.length}/${goals.length}`, // Vai retornar o objeto com as duas propriedades.
    porcentagem: percentage.toFixed(2)
  }
}

const deleteGoals = async () => {
  /* Informa o usuário caso não existam metas cadastradas */
  if (goals.length == 0) {
    message = 'Não existem metas cadastradas!'
    return
  }

  /* cada meta é transformada em um objeto */
  const uncheckedGoals = goals.map((goal) => {
    return { value: goal.value, checked: false }
  })

  /* exibir o checkbox permitindo que as metas sejam selecionadas */
  const goalsToDelete = await checkbox({
    message: 'Selecione as metas que deseja deletar:',
    choices: [...uncheckedGoals],
    instructions: false
  })

  /* se nenhuma meta for selecioanda, informa ao usuário */
  if (goalsToDelete.length == 0) {
    message = 'Nenhuma meta foi selecionada!'
    return
  }

  /* filtra o array e cria um novo array com as metas não marcadas */
  goalsToDelete.forEach((item) => {
    goals = goals.filter((goal) => {
      console.log(`Diferente: ${goal.value != item}`)
      return goal.value != item
    })
  })

  message = 'Meta(s) deletada(s) com sucesso!'
}

const updateGoals = async () => {
  if (goals.length == 0) {
    message = 'Não existem metas cadastradas!'
    return
  }

  const uncheckedGoals = goals.map((goal) => {
    return { value: goal.value, checked: false }
  })

  const goalsToUpdate = await checkbox({
    message: 'Selecione a(s) meta(s) que deseja atualizar: ',
    choices: [...uncheckedGoals],
    instructions: false
  })

  if (goalsToUpdate.length == 0) {
    message = 'Nenhuma meta foi selecionada!'
    return
  }

  for (const oldGoal of goalsToUpdate) {
    // solicitar o novo nome para a meta selecionada
    const newGoal = await input({
      message: `Digite o novo nome para a meta ${oldGoal}: `
    })

    if (newGoal.length == 0) {
      message = 'O novo nome da meta não pode ser vazio!'
      return
    }

    const goalIndex = goals.findIndex((goal) => goal.value === oldGoal)

    if (goalIndex !== -1) {
      goals[goalIndex].value = newGoal
    }
  }

  message = 'Meta(s) atualizada(s) com sucesso!'
}

const showMessage = () => {
  if (message != '') {
    console.log(message)
    console.log('')
    message = ''
  }
}

const start = async () => {
  await fetchGoals() // fetchGoals(): função assíncrona, responsável por buscar metas existentes da fonte de dados, no caso "goals.json".
  // O uso do "await" faz com que o código espere até que todas as metas sejam carregadas antes de prosseguir.
  while (true) {
    // cria um "loop infinito" até que o programa seja interrompido manualmente "sair/out" ou "break".
    // --> o programa pode ficar aguardando o usuário escolher opções repetidamente, e o loop só seria interrompido quando o usuário sair ou o programa for encerrado.
    showMessage() // Mostra uma mensagem ou Menu.
    await saveGoals() // Chama a função assíncrona responsável por salvar as metas.
    const option = await select({
      // Cria um menu interativo, sendo uma função assíncrona utilizando "await" para esperar o usuário escolher a opção desejada.
      message: 'Menu > ', // Mostra a mensagem que será exibida para o usuário, neste caso o "Menu".
      choices: [
        // Opções disponíveis no menu.
        {
          name: 'Cadastrar meta',
          value: 'register'
        },
        {
          name: 'Listar meta(s)',
          value: 'list'
        },
        {
          name: 'Listar meta(s) realizada(s)',
          value: 'completed'
        },
        {
          name: 'Listar meta(s) conclúidas(s) (detalhado)', // Nome do texto sendo exibido.
          value: 'porcentualAlternative' // Valor que será retornado pela função.
        },
        {
          name: 'Listar meta(s) não realizada(s)',
          value: 'incompleted'
        },
        {
          name: 'Atualizar meta(s)',
          value: 'update'
        },
        {
          name: 'Deletar meta(s)',
          value: 'delete'
        },
        {
          name: 'Sair',
          value: 'out'
        }
      ]
    })

    switch (
      option // Depois que o usuário escolher a opção do menu, seu valor será armazenado na variável "option"
    ) {
      // switch é ultilizado para decidir o que fazer com o valor recibido na escolha do usuário.
      case 'register': // se o valor de "option" for "register" será chamado a função "registerGoal()".
        await registerGoal() // Permitindo que o usuário adicione uma nova meta.
        console.log(goals) // Depois vai exibir todas as metas na variável "goals"
        break // Interrompe a execução do switch em cada caso, evitando que fique verificando os outros "case" após executar o atual.
      case 'list':
        await listGoals()
        break
      case 'completed':
        await listCompletedGoals()
        break
      case 'incompleted':
        await listIncompletedGoals()
        break
      case 'porcentualAlternative': // option: 'porcentualAlternative'.
        await porcentualCompletedGoals() // chamando a função "porcentualCompletedGoals()" definida anteriormente.
        break
      case 'update':
        await updateGoals()
        break
      case 'delete':
        await deleteGoals()
        break
      case 'out':
        console.log('Até a próxima!')
        return
    }
  }
}

start()
