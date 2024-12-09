//Implementa una función que reciba un texto(string)y que devuelva una matriz bidimensional de ancho 5 y de alto determinado que incorpore
//las palabras (elementos separados por espacios)del texto una por una de izquierda a derecha y de arriba a abajo .
//Mary tenía un corderito ,su piel era blanca como la nieve .

function crearMatriz(texto) {
  let palabras = texto.split(" "); // Dividir el texto en palabras
  let matriz = [];
  let ancho = 5;
  let fila = [];

  for (let i = 0; i < palabras.length; i++) {
    fila.push(palabras[i]); // Añadir palabras a la fila

    if (fila.length === ancho) {
      // Cuando se llena una fila
      matriz.push(fila); // Añadir fila a la matriz
      fila = []; // Reiniciar la fila
    }
  }

  // Agregar la última fila si hay palabras pendientes
  if (fila.length > 0) {
    matriz.push(fila);
  }

  return matriz;
}

// Pruebas
console.log(
  crearMatriz("Mary tenía un corderito , su piel era blanca como la nieve")
);
// console.log(crearMatriz("Soy una tetera"));
