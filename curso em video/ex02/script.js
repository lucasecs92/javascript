function verificar() {

  var data = new Date();
  var ano = data.getFullYear(); // me diz o ano atual
  var fano = window.document.getElementById("txtano");
  var res = window.document.querySelector("div#res");
  
  if (fano.value.length == 0 || fano.value > ano) {
    // se o valor de fano estiver vazio 'ou' o valor for maior que o ano atual
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex"); // quando tem o mesmo name, não dar p selecionar por ID ou seletor, então usa getElementsByName
    var idade = ano - fano.value; // valor do ano atual menos o valor digitado em fano (idade)
    // TESTE res.innerHTML = `Idade calculada: ${idade}`;
    var genre = "";

    // colocando imagens dinamicamente
    var img = document.createElement("img"); // vai criar uma tag <img> p mim
    img.setAttribute("id", "foto"); // crei <img id="foto">

    // verificar o sexo da pessoa, se ela foi selecionada como masculino ou feminino, e indicando a faixa etária com foto
    if (fsex[0].checked) {
      genre = "Homem";
      if (idade >= 0 && idade < 10) {
        // se a idade estiver entre 0 e 10, ele é uma criança
        img.setAttribute("src", "foto-bebe-m.png");
      } else if (idade >= 10 && idade < 21) {
        // Jovem
        img.setAttribute("src", "foto-jovem-m.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "foto-adulto-m.png");
      } else {
        // Idoso
        img.setAttribute("src", "foto-idoso-m.png");
      }
    } else if (fsex[1].checked) {
      genre = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "foto-bebe-f.png");
      } else if (idade >= 10 && idade < 21) {
        // Jovem
        img.setAttribute("src", "foto-jovem-f.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "foto-adulto-f.png");
      } else {
        // Idoso
        img.setAttribute("src", "foto-idoso-f.png");
      }
    }
    res.innerHTML = `Detectamos ${genre} com ${idade} anos.`;
    res.appendChild(img); // adicionando o elemento img embaixo
  }
}
