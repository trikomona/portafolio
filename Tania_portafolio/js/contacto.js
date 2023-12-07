function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'JavaScript') {
      result.textContent = '¡Correcto! JavaScript es uno de los lenguajes más utilizados.';
    } else {
      result.textContent = 'Incorrecto. Intenta de nuevo.';
    }
  }