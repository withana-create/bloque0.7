//Implementa una función que reciba un número y devuelva una matriz cuadrada n x n con números enteros consecutivos de izquierda a derecha
// y de arriba a abajo

const readLine = require("readline-sync");
const n = parseInt(
  readLine.question("Introduce el tamaño de la matriz cuadrada: "),
  10
);

function generarMatriz(n) {
  const matriz = [];
  let contador = 1;

  for (let i = 0; i < n; i++) {
    const fila = [];
    for (let j = 0; j < n; j++) {
      fila.push(contador);
      contador++;
    }
    matriz.push(fila);
  }

  return matriz;
}

let resultado = generarMatriz(n);

for (fila of resultado) {
  console.log(fila);
}
