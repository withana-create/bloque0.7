//Implementa una función que reciba por parámetro una array de números y que imprima por pantalla la suma y la media aritmética de sus elementos.
//se puede dividir un string en un array con la función .split()
//Introduce ésta lista de números :10, 2,5,33, 1, 27

let array = "10,2,5,33,1,27";

function sumayMedia(numeros) {
  let numerosOK = array.split(",").map(Number);
  let suma = 0;
  for (let i = 0; i < numerosOK.length; i++) {
    suma += numerosOK[i];
  }
  let mediaAritmetica = suma / numerosOK.length;
  return `la suma es ${suma} la media aritmetica es ${mediaAritmetica}`;
}
let resultado = sumayMedia(array);
console.log(resultado);
