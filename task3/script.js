function uniqueSorted(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
  }

  // Functia care procesează matricea
  function processArray() {
    // Matrceea dată
    let array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
    
    // Apelăm funcția uniqueSorted pentru a elimina duplicatele și a sorta array-ul
    let result = uniqueSorted(array);

    // Afișăm rezultatul pe pagină
    document.getElementById("result").textContent = result.join(", ");
  }