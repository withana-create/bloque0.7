//Implementa una función que reciba por parámetro una array de números y que imprima por pantalla la suma y la media aritmética de sus elementos.
//se puede dividir un string en un array con la función .split()
//Introduce ésta lista de números :10, 2,5,33, 1, 27

function sumayMedia(array) {
  let arraynum = array.split(",").map(Number);

  let suma = 0;
  for (let i = 0; i < arraynum.length; i++) {
    suma += arraynum[i];
  }
  let media = suma / arraynum.length;
  console.log("La suma de los números del array es : " + suma);
  console.log("La media aritmética de los números del array es : " + media);
}

let array = "10, 2,5,33, 1, 27";
sumayMedia(array);
