//Implementa una función que reciba un string y devuelva si es o no un palíndromo (independientemente de los espacios ).
//Mary tenía un coderito(no es palíndromo)/dabale arroz a la zorra el abad ( sí es palíndromo).

function esPalindromo(texto) {
  let textoOriginal = texto.toLowerCase().replace(/\s+/g, "");
  let textoInvertido = textoOriginal.split("").reverse().join("");

  return textoOriginal === textoInvertido;
}

if (esPalindromo("Anita lava la tina")) {
  console.log("es palindromo");
} else {
  console.log("no es palindromo");
}
