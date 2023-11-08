let val = []
let num = document.querySelector('input#txtnum')
let sel = document.getElementById('sel')
let res = document.querySelector('div#res')

function limpar(){ //Limpar "select".
    sel.innerHTML = ''
    num.value = ''
    res.innerHTML = ''
    val = []

}
function add() { //Adicionar valores ao "select"
    let n = Number(num.value)
    let res = document.querySelector('div#res')

    if (num.value.length == 0){
        alert('[ERRO] Preencha o campo abaixo.')

    } else if (n > 100 || n < 1){
        alert('[ERRO] Valores inválidos! Tente novamente.')

    } else {
        //Atualizar Arr:
        val.push(n)

        //Apagar dados:
        num.value = ''
        res.innerHTML = ''

        //Criar "option":
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        sel.appendChild(item)
    }
}

function fim(){ //Apresentar os resultados.
    val.sort((a,b) => a - b) //Organiza o Arr.

    //Variáveis:
    let n = Number(num.value)
    let tam = Number(val.length)
    let last = tam - 1
    let soma = 0
    let media = 0

    //Soma dos valores do arr:
    for(let pos in val) {
        soma += val[pos]
    }

    media = soma / tam //Calculo da média 

    //Apresentar resultado:
    res.innerHTML = `<p>Ao todo, temos ${tam} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${val[last]}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${val[0]}.</p>`
    res.innerHTML += `<p>A soma de todos os números é ${soma}. </p>`
    res.innerHTML += `<p>A média dos valores informados é ${media}. </p>`
    
}