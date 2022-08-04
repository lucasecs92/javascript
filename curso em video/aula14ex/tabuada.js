function tabuada() {
  let num = document.getElementById("txtn");
  let tab = document.getElementById("seltab");
  if (num.value.length == 0) { // se o num estiver vazio
    window.alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = '' // limpa a área de tabuada antes de mostrar a próxima tabuada
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`; // parte de dentro do option
      item.value = `tab${c}` // no js ñ faz muito sentindo, mas em outras linguagens serve para saber qual item da tabuada foi selecionado.
      tab.appendChild(item);
      c++
    }
  }
}
