function carregar() {
    var data = new Date();
    var hora = data.getHours();
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');

    msg.innerHTML = `Agora são ${hora} Horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = './Imagens/manhaedit.jpg';
        document.body.style.backgroundColor = '#e2cd9f';

    } else if (hora >= 12 && hora <= 18) {
        img.src = './Imagens/tardeedit.jpg';
        document.body.style.backgroundColor = ('#b9846f')

    } else {
        img.src = './Imagens/noiteedit.jpg';
        document.body.style.backgroundColor = 'black';
    }
}