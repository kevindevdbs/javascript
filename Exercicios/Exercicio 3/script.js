// Função que realiza a contagem
function contar() {
    // Obtém os elementos de entrada e resultado
    var inical = document.getElementById('txti');
    var final = document.getElementById('txtf');
    var passos = document.getElementById('txtp');
    var res = document.getElementById('res');

    // Converte os valores das entradas para números
    var i = Number(inical.value);
    var f = Number(final.value);
    var p = Number(passos.value);

    // Verifica se algum campo está vazio
    if (inical.value.length == 0 || final.value.length == 0 || passos.value.length == 0) {
        alert('[ERRO] Verifique os dados e tente novamente!'); // Mensagem de erro
    }

    // Verifica se o passo é válido
    if (p <= 0) {
        alert('[ERRO] Passo inválido. Considerando passo 1!'); // Mensagem de erro
        p = 1; // Define o passo como 1
    }

    // Contagem Crescente
    if (i < f) {
        res.innerHTML = 'Contagem: '; // Inicia a mensagem de contagem
        for (var c = i; c <= f; c += p) { // Loop para contagem crescente
            res.innerHTML += `${c} \u{1F449} `; // Adiciona o número atual à mensagem
        }
        res.innerHTML += `\u{1F3C1}`; // Adiciona um emoji de bandeira ao final

    // Contagem Regressiva
    } else if (i > f) {
        res.innerHTML = 'Contagem: '; // Inicia a mensagem de contagem
        for (var c = i; c >= f; c -= p) { // Loop para contagem regressiva
            res.innerHTML += `${c} \u{1F449} `; // Adiciona o número atual à mensagem
        }
        res.innerHTML += `\u{1F3C1}`; // Adiciona um emoji de bandeira ao final
    } else {
        // Caso em que o valor inicial é igual ao valor final
        res.innerHTML = 'Contagem de ' + i + ' até ' + f + ' de ' + p + ' em ' + p + ' é ' + i;
    }
}