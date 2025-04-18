
let x = parseFloat(prompt("Puneti primul numar (x):"));
let y = parseFloat(prompt("Puneti al doilea numar (y):"));

console.log("Operations with x and y:");
console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} - ${y} = ${x - y}`);
console.log(`${x} * ${y} = ${x * y}`);
console.log(`${x} / ${y} = ${y !== 0 ? x / y : 'Cannot divide by zero'}`);


let a = parseInt(prompt("Enter start of range (a):"));
let b = parseInt(prompt("Enter end of range (b):"));

let start = Math.min(a, b);
let end = Math.max(a, b);
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}

console.log(`Sum of all numbers from ${start} to ${end} is: ${sum}`);
