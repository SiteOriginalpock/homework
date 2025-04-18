// Matricea inițială
let numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

// 1. Iese (afișează) numerele < 5
function filterLessThanFive(arr) {
  return arr.filter(num => num < 5);
}

console.log("Numere mai mici decât 5:", filterLessThanFive(numbers));

// 2. Găsește pozițiile elementelor cu valorile maxime și minime
function findMinMaxPositions(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let maxIndices = [];
  let minIndices = [];

  arr.forEach((value, index) => {
    if (value === max) maxIndices.push(index);
    if (value === min) minIndices.push(index);
  });

  return {
    maxValue: max,
    maxPositions: maxIndices,
    minValue: min,
    minPositions: minIndices
  };
}

const minMaxInfo = findMinMaxPositions(numbers);
console.log("Valoare maximă:", minMaxInfo.maxValue, "la pozițiile:", minMaxInfo.maxPositions);
console.log("Valoare minimă:", minMaxInfo.minValue, "la pozițiile:", minMaxInfo.minPositions);

// 3. Sortează matricea în ordine descrescătoare
function sortDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}

console.log("Matrice sortată descrescător:", sortDescending(numbers));

// 4. Emite elementele cu valoare mai mare decât media aritmetică
function elementsAboveAverage(arr) {
  let sum = arr.reduce((acc, val) => acc + val, 0);
  let avg = sum / arr.length;
  return arr.filter(num => num > avg);
}

console.log("Elemente mai mari decât media aritmetică:", elementsAboveAverage(numbers));
