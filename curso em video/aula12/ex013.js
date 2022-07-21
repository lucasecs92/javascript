/*
var idade = 20;
if (idade < 18) {
  console.log("Menor de idade");
} else {
  console.log("Maior de idade");
}
*/

var age = 67;
console.log(`Você tem ${age} anos.`)
if (age < 16) {
  console.log("Não vota");
} else if (age < 18 || age > 65) {
  // Quem tem idade acima de 16 e menor que 18 ou a idade acima de 65 o voto é opcional
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório");
}

/*
var age = 22;                                     var age = 22;
if (age < 16) {                                   if (age < 16) {              
  console.log("Não vota");                          console.log("Não vota");    
} else {                                ou        } else if (age > 18) {
    if (age > 18) {                                  console.log("Voto opcional");
      console.log("Voto opcional");                 }
  }                                               }
}                                                 
*/
