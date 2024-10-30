document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const resetBtn = document.getElementById("reset");

  let timer;
  let isRunning = false;
  let timeLeft = 1 * 60; // 25 minutos em segundos
  let cicloFinal = 4;

  const timerDisplay = document.getElementById("timer"); //armazena o elemento onde o tempo restante será exibido.

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60); //armazena o tempo restante.
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`; //garante a formação das casas em mm:ss(minutos e segundos).
  } // timerDisplay atualiza com o tempo formado.

  function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
      // inica uma contagem regressiva a cada 1000ms.
      if (timeLeft > 0) {
        // define timeLeft em 1 segundo e atualiza o display
        timeLeft--;
        updateTimerDisplay(); // | interrompe o timer e mostra uma mensagem de conclusão de tempo
      } else {
        clearInterval(timer);
        alert("Tempo de trabalho concluído! Faça uma pausa de 5 minutos.");

        /* 
      alertbox.render({
      title: "Faça uma pausa!",
      message: "Tempo de trabalho concluído, descanse por 5 min.",
      btnTitle: "Ok",
      themeColor: "#f4eddb",
      btnColor: "#27ae60",
      border: false,
    });
     */
        timeLeft = 1 * 60; // 5 minutos de descanso.
        updateTimerDisplay();
        isRunning = false;
      }

      if (cicloFinal) {
        cicloFinal--;
        updateTimerDisplay;
      } else {
        clearInterval(timer);
        alert("Tempo de trabalho concluído! Faça uma pausa de 15 minutos.");

        timeLeft = 15 * 60;
        updateTimerDisplay();
        isRunning = false;
      }
    }, 1000);
  }

  function stopTimer() {
    //pausa o temporizador.
    clearInterval(timer);
    isRunning = false; // indica que o mesmo não está mais ativo.
  }

  function resetTimer() {
    clearInterval(timer); // interrompe o temporizador.
    timeLeft = 1 * 60; // Reinicia para 25 minutos
    isRunning = false;
    cicloFinal = 4;
    updateTimerDisplay(); // | redefine e exibe o tempo inicial.
  }

  // Inicializa o display do timer
  updateTimerDisplay();

  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);
});
