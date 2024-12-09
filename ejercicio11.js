// Crea una función que indique cuantes vocales hay de cada tipo en una cadena de texto (cuantas "a",cuantas"e"  etc ..)

function contarVocales(texto) {
  let contador = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  texto = texto.toLowerCase();
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    if (letra === "a") {
      contador.a++;
    } else if (letra === "e") {
      contador.e++;
    } else if (letra === "o") {
      contador.o++;
    } else if (letra === "i") {
      contador.i++;
    } else if (letra === "u") {
      contador.u++;
    }
  }

  return contador;
}
let resultado = contarVocales("hoLA que tal tu");
console.log(resultado);
