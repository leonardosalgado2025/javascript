function verificar() {
    let data = new Date() //Data atual PC.
    let ano = data.get() //Ano da var"data".

    let fano = document.getElementById('txtano') //Ano do form do HTML.
    let res = document.getElementById('res') //res da Div do HTML.

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value < '1930')){ //Validação dos dados.
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else { //Cado esteja tudo OK:
        let fsex = document.getElementsByName('radsex') //Sexo do form do HTML.
        let idade = ano - Number(fano.value) //Cálculo da idade.
        let gênero = "" //var para Gênero do user.
        let img = document.createElement('img') //Criação do elmnt. "img".
        img.setAttribute('id', 'foto') //Atribuição de id à "img".

        if (fsex[0].checked){ //Verificação do form "Radio", caso o primeiro [0](Homem) estiver selecionado.
            gênero = "Homem" //Caso selecione "Homem":
            if(idade >= 0 && idade < 10) { //Idade = criança.
                //Criança
                img.setAttribute('src', 'imagens/foto-criança-m.png')
            } else if (idade >= 10 && idade < 30) { //Idade = Jovem.
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 57) { //Idade = Adulto.
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else { //Se nenhum dos outros: Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
                //Idoso
            }
        } else if (fsex[1].checked){ //Verificação do form "Radio", caso o segundo [1](Mulher) estiver selecionado.
            gênero = "Mulher" //Caso selecione Mulher:
            if(idade >= 0 && idade < 10) { //Idade = criança.
                //Criança
                img.setAttribute('src', 'imagens/foto-criança-f.png')
            } else if (idade >= 10 && idade < 30) { //Idade = Jovem.
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 57) { //Idade = Adulto.
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else { //Se nenhum dos outros: Idoso
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detetamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.</p>`
        res.appendChild(img)
    }
}