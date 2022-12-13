let num = [5, 8, 2, 9, 3];

num[5] = 6; // método acrescenta o elemento 6 em um índice específico, nesse caso a posição [5] que não existia e foi criado
num.push(7); // método push acrescenta o elemento 7 na última posição(índice)
/* num.sort();   // organiza os elementos em ordem crescente */
console.log(`Nosso vetor é o ${num}`);

// Uso do indexOf()
let pos = num.indexOf(8);
console.log(`O valor 8 está na posição ${pos}`);

// Uso do length

// esse atributo mostra a quantidade de posições que existe no array/vetor

let n = [15, 18, 12, 19, 13];

console.log(n);
console.log(`O vetor tem ${n.length} posições`);

console.log(n[1]); // descobrindo qual elemento está nessa posição [1]
console.log(`O primeiro valor do vetor é ${n[0]}`);



// se por acaso eu queira buscar um valor que não existe, retornando -1
/*
let pos = num.indexOf(4);
if (pos == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor 8 está na posição ${pos}`);
}
*/
