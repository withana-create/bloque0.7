//Implementa una función que reciba por parámetro un array de elementos e imprima por pantalla si todos los elementos son unicos en la lista
//u otra lista con elementos repetidos en caso contrario .

const readlineSync = require("readline-sync");
const pregunta = readlineSync.question("Introduce una lista de elementos : ");
const array = pregunta.split(",").map((elemento) => elemento.trim());

function elementos(array) {
  let elementosRepetidos = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !elementosRepetidos.includes(array[i])) {
        elementosRepetidos.push(array[i]);
      }
    }
  }
  if (elementosRepetidos.length > 0) {
    console.log("elementos repetidos : " + elementosRepetidos);
  } else {
    console.log("no hay elementos repetidos");
  }
}
elementos(array);

// elementos("uva,manzana,pera,platano");
// elementos("1,5,22,5,37,22,2,0");
