//Ejecuta una función que reciba un número y devuelva una matríz cuadrada en la cual cada elemento es el producto de sus índices .

function matrizCuadrada(n) {
  let matriz = [];
  for (let i = 0; i < n; i++) {
    let fila = [];

    for (let j = 0; j < n; j++) {
      fila.push(i * j);
    }
    matriz.push(fila);
  }
  return matriz;
}

let resultado = matrizCuadrada(3);
for (let fila of resultado) {
  console.log(fila);
}
