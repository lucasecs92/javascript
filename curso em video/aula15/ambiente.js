let num = [5, 8, 2, 9, 3];

num[5] = 6;   // método acrescenta o elemento 6 em um índice específico, nesse caso a posição [5] que não existia e foi criado
num.push(7);  // método push acrescenta o elemento 7 na última posição(índice)
/* num.sort();   // organiza os elementos em ordem crescente */
console.log(`Nosso vetor é o ${num}`);

// Uso do length

// esse atributo mostra a quantidade de posições que existe no array/vetor

let n = [15, 18, 12, 19, 13];

console.log(n)
console.log(`O vetor tem ${n.length} posições`)

console.log(n[1]) // descobrindo qual elemento está nessa posição [1]
console.log(`O primeiro valor do vetor é ${n[0]}`)