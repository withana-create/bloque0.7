//Implementa una función que reciba un texto(string)y que devuelva una matriz bidimensional de ancho 5 y de alto determinado que incorpore
//las palabras (elementos separados por espacios)del texto una por una de izquierda a derecha y de arriba a abajo .
//Mary tenía un corderito ,su piel era blanca como la nieve .
const readline = require("readline-sync");
function matrizBidimensional(palabras) {
  let matriz = [];
  let texto = palabras.split(" ");
  for (let i = 0; i < texto.length; i += 5) {
    matriz.push(texto.slice(i, i + 5));
  }
  return matriz;
}
console.log(
  matrizBidimensional(
    "Mary tenía un corderito ,su piel era blanca como la nieve ."
  )
);
