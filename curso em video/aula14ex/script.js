function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // se o início estiver vazio OU o fim estiver vazio OU passo estiver vazio dispara o alert
        window.alert('[ERRO] Faltam dados!')
    } else {
        alert('TUDO OK!')
    }
}