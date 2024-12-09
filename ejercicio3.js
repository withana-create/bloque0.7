//Implementa una función que reciba por parámetro el radio de un círculo y que pinte por pantalla la circunferencia y el área del círculo.
//Introduce el radio 10.
function calculos(radio) {
  const longitudCircunferencia = 2 * Math.PI * radio;
  const area = Math.PI * radio ** 2;

  console.log(
    "La longitud del círculo es " +
      longitudCircunferencia +
      " y el área del círculo es " +
      area
  );
}
calculos(10);
