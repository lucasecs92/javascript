var agora = new Date(); // utilizando a hora atual
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora <= 18) {
  // ou (hora >= 12)
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

/* 
var hora = 8;
console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora <= 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
*/
