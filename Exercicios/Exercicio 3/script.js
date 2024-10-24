var inical = window.document.getElementById('inicial')
var final = window.document.getElementById('final')
var passos = window.document.getElementById('passo')

function contar() {
    if (inical.value.length == 0 || final.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
   