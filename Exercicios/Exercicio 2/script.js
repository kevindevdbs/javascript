function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fnascimento = window.document.getElementById('nascimento')
    var radsex = window.document.getElementsByName('radsex')
    var res = window.document.getElementById('res')

    if (fnascimento.value.length == 0 || fnascimento.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }

    var idade = ano - Number(fnascimento.value)
    var genero = ''
    var img = document.createElement('img')

    img.setAttribute('id', 'foto')

    if (radsex[0].checked) {
        genero = 'Homem'

        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', './Imagens/criancahomem.png')
        }
        else if (idade < 21) {
            img.setAttribute('src', './Imagens/jovemhomem.png')
        }
        else if (idade < 50) {
            img.setAttribute('src', './Imagens/adultohomem.png')
        }
        else {
            img.setAttribute('src', './Imagens/velhohomem.png')
        }

    } else if (radsex[1].checked) {
        genero = 'Mulher'

        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', './Imagens/criancamulher.png')
        }
        else if (idade < 21) {
            img.setAttribute('src', './Imagens/jovemmulher.png')
        }
        else if (idade < 50) {
            img.setAttribute('src', './Imagens/adultamulher.png')
        }
        else {
            img.setAttribute('src', './Imagens/velhamulher.png')
        }

    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    img.style.display = 'block'
    img.style.margin = 'auto'

}

