  // Setăm data țintă (1 februarie 2025)
  const targetDate = new Date("Feb 1, 2026 00:00:00").getTime();

  // Funcție pentru a actualiza cronometru
  function updateCountdown() {
    const now = new Date().getTime();  // Momentul curent
    const timeRemaining = targetDate - now;  // Timpul rămas până la data țintă

    // Calculăm zile, ore, minute și secunde
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Afișăm timpul rămas în formatul dorit
    document.getElementById("countdown").innerHTML =
      days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";

    // Dacă timpul a ajuns la 0, oprim actualizarea
    if (timeRemaining < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "Timpul a expirat!";
    }
  }

  // Actualizăm cronometru la fiecare secundă
  const interval = setInterval(updateCountdown, 1000);

  // Apelăm funcția inițial pentru a arăta timpul de la început
  updateCountdown();