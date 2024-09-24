const listCompletedGoals = async () => {
  const completedGoals = goals.filter((goal) => goal.checked)

  console.log(`Você completou ${completedGoals.length}/${goals.length} metas.`)
  return
}
