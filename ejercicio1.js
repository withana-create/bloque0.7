//Implementa una función que reciba por parámetro el radio de un círculo y devuelva la longitud de la circunferencia .
//Se puede sacar el valor de Pi con Math.Pi
//La fórmula es igual a 2*Pi*r
//Introduce el radio 5 .

function calcularLongitud(radio) {
  return 2 * Math.PI * radio;
}
let radio = 5;
let longitud = calcularLongitud(radio);
console.log("La longitud del círculo es " + longitud);
