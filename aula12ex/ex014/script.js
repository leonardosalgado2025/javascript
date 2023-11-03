function carregar() {

    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min}h`

    if (hora >= 6 && hora < 12) {
        img.src = './/imagens/fotomanha.png'
        document.body.style.background = '#FFFBE7'
    }else if (hora >=12 && hora <19){
        img.src = './/imagens/fototarde.png'
        document.body.style.background = '#57462A'
    }else {
        img.src = './/imagens/fotonoite.png'
        document.body.style.background = '#131F26'
    }
}
