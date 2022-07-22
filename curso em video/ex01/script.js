function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${minuto}`; // ou ${hora} horas e ${minuto} minutos
  if (hora >= 0 && hora < 12) {
    // SE a hora atual for maior ou igual a 00h e a hora for abaixo de 12h é 'bom dia!' (entre 00h e 12h)
    img.src = "images/fotomanha.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    // SE NÃO SE a hora for maior ou igual a 12h e a hora for abaixo de 18 é 'boa tarde!' (entre 12h e 18h)
    img.src = "images/fototarde.png";
    document.body.style.background = "#b9846f";
  } else {
    // SE NÃO, sendo acima de 18h e a baixo de 00h é 'boa noite!' (entre 18h e 00h)
    img.src = "images/fotonoite.png";
    document.body.style.background = "#515154";
  }
}
