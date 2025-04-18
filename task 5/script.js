  // Funcție pentru a scădea valoarea
  function decreaseValue() {
    let input = document.getElementById("inputValue");
    let currentValue = parseInt(input.value);

    if (currentValue > 0) {
      input.value = currentValue - 1;
    }

    checkButtons();
  }

  // Funcție pentru a crește valoarea
  function increaseValue() {
    let input = document.getElementById("inputValue");
    let currentValue = parseInt(input.value);

    if (currentValue < 9) {
      input.value = currentValue + 1;
    }

    checkButtons();
  }

  // Funcție pentru a verifica și activa/dezactiva butoanele
  function checkButtons() {
    let input = document.getElementById("inputValue");
    let decreaseBtn = document.getElementById("decreaseBtn");
    let increaseBtn = document.getElementById("increaseBtn");

    // Dezactivăm butonul - dacă valoarea este 0
    if (parseInt(input.value) === 0) {
      decreaseBtn.disabled = true;
    } else {
      decreaseBtn.disabled = false;
    }

    // Dezactivăm butonul + dacă valoarea este 9
    if (parseInt(input.value) === 9) {
      increaseBtn.disabled = true;
    } else {
      increaseBtn.disabled = false;
    }
  }

  // Inițializăm butoanele la începutul paginii
  checkButtons();