function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    // se o início estiver vazio OU o fim estiver vazio OU passo estiver vazio dispara o alert (se deixar qualquer campo em branco)
    window.alert("[ERRO] Faltam dados!");
    res.innerHTML = "Impossível contar!";
  } else {
    // alert('TUDO OK!')
    res.innerHTML = "Contando: <br>";
    let i = Number(ini.value); // pegando o valor de ini e convertendo para um número
    let f = Number(fim.value); // pegando o valor de fim e convertendo para um número
    let p = Number(passo.value); // pegando o valor de passo e convertendo para um número
    if (p <= 0) { 
        // se o passo for menor ou igual a 0, automaticamente ele considera o passo igual a 1 
        window.alert('Passo invalido! Considerando PASSO 1')
        p = 1
    }
    if (i < f) {
      // CONTAGEM CRESCENTE
      // vai começar no início, (while)enquanto o contador for menor ou igual ao fim, o contador vai receber ele mesmo mais o passo.
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} 👉`; // concatenando 'Contando:' com a string formatada
      }
    } else {
      // CONTAGEM REGRESSIVA
      // código de contar do maior p o menor
      // vai começar do início sendo um número maior, (while) enquanto contador for maior ou igual a f, meu contador vai perder o passo.
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} 👉`; // ou \u{1F449}
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
