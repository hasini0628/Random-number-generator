let number = Math.floor(Math.random() * 100) + 1;
    let count = 0;
    function checkGuess() {
      const guess = Number(document.getElementById("guess").value);
      const message = document.getElementById("message");
      count++;
      if (guess === number) {
        message.textContent = `Correct! The number was ${number}`;
        message.style.color = "green";
      } else if (guess < number) {
        message.textContent = "Too low! Try a higher number.";
        message.style.color = "red";
      } else if (guess > number) {
        message.textContent = "Too high! Try a lower number.";
        message.style.color = "red";
      }
      document.getElementById("attempts").textContent = "Attempts: " + count;
    }
    function restartGame() {
      number = Math.floor(Math.random() * 100) + 1;
      count = 0;
      document.getElementById("guess").value = "";
      document.getElementById("message").textContent = "";
      document.getElementById("attempts").textContent = "Attempts: 0";
    }
