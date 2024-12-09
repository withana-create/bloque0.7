//Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

//. = Carretera , S = Trineo de Santa , * = Barrera abierta , | = Barrera cerrada
// Ejemplo de carretera: S...|....|.....
//Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

//Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

//Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera
// en cada unidad de tiempo:
const carretera = "S..|...|..";
const tiempo = 10; // unidades de tiempo

function cyberReindeer(carretera, tiempo) {
  console.log("t=0", carretera);
  const estados = [carretera];
  let santa = 0;
  let casilla = ".";
  let carreteraTemporal = carretera;
  for (let t = 0; t <= tiempo; t++) {
    if (t === 5) {
      carreteraTemporal = carreteraTemporal.replace(/\|/g, "*");
    }
    if ([".", "*"].includes(carreteraTemporal[santa + 1])) {
      santa++;
    }
    carreteraTemporal = carreteraTemporal.replace("S", casilla);
    carreteraTemporal = carreteraTemporal.split("");
    carreteraTemporal = carreteraTemporal.join("");
    estados.push(carreteraTemporal);
    console.log("t=", t, carreteraTemporal);
  }
  return estados;
}
cyberReindeer(carretera, tiempo);
