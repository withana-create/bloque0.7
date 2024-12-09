//Implementa una función que reciba por parámetro el radio de un círculo y que devuelva su área .
//area =PI*r al cuadrado .Introduce el radio 10.

function calcularArea(radio) {
  return Math.PI * radio ** 2;
}
let radio = 10;
let area = calcularArea(radio);
console.log("El área del círculo es " + area);
