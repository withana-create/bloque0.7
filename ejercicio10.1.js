//Implementa una función que reciba una matriz como parámetro y devuelva la matriz traspuesta .
function matrizTranspuesta(matriz) {
  let nuevaMatriz = [];
  for (let i = 0; i < matriz[0].length; i++) {
    let fila = [];
    nuevaMatriz.push(fila);
    for (let j = 0; j < matriz.length; j++) {
      nuevaMatriz[i][j] = matriz[j][i];
    }
  }
  return nuevaMatriz;
}
let matriz = [
  [0, 1, 2, 3],
  [3, 4, 5, 3],
  [6, 7, 8, 3],
];

let resultado = matrizTranspuesta(matriz);

for (let fila of resultado) {
  console.log(fila);
}
