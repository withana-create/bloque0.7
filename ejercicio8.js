//Implementa una función que reciba un string y devuelva si es o no un palíndromo (independientemente de los espacios ).
//Mary tenía un coderito(no es palíndromo)/dabale arroz a la zorra el abad ( sí es palíndromo).

function esPalindromo(texto) {
  let textoNormal = " ";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      //si texto[i] no es igual a espacio (para ignorar los espacios del texto )
      textoNormal += texto[i];
    }
  }
  let textoInvertido = " ";
  for (let j = textoNormal.length - 1; j > 0; j--) {
    textoInvertido += textoNormal[j];
  }

  if (textoNormal === textoInvertido) {
    return "es palíndromo";
  } else {
    return "no es palíndromo";
  }
}
console.log(esPalindromo("dabale arroz a la zorra el abad"));
console.log(esPalindromo("mary tenía un corderito"));
