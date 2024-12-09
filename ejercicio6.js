//Implementa una función que reciba un número y devuelva una matriz cuadrada n x n con números enteros consecutivos de izquierda a derecha
// y de arriba a abajo

function calcularMatriz(n) {
  let matriz = [];
  let numero = 1;
  for (let i = 0; i < n; i++) {
    matriz[i] = []; //cada vez que se cree una nueva fila i ,vamos a crear un nuevo array .

    for (let j = 0; j < n; j++) {
      matriz[i][j] = numero; //Asigna el número inicial 1 a la posición [i] [j].
      numero++; //va incrementando el número.
    }
  }

  return matriz;
}
const resultado = calcularMatriz(3);
console.log("[");
for (let i = 0; i < resultado.length; i++) {
  console.log(resultado[i]);
}
console.log("]");
