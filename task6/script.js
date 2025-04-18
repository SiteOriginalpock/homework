// Generăm tabla de șah
function createChessboard() {
    let table = document.querySelector("#chessboard");

    // Creăm 8 rânduri
    for (let row = 0; row < 8; row++) {
      let tr = document.createElement("tr");

      // Creăm 8 coloane pentru fiecare rând
      for (let col = 0; col < 8; col++) {
        let td = document.createElement("td");

        // Alternăm culorile celulelor pentru a crea un model de tablă de șah
        if ((row + col) % 2 === 0) {
          td.style.backgroundColor = "white";
        } else {
          td.style.backgroundColor = "black";
        }

        tr.appendChild(td);
      }

      table.appendChild(tr);
    }
  }

  // Apelăm funcția pentru a crea tabla de șah
  createChessboard();