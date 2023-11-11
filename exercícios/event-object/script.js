let btn = document.querySelector('input#button')

btn.addEventListener('click', function (e) {
    if (e.cntrKey =  true) {
        console.log('Clicou com o CTRL')
    } else {
        console.log('Clicou sem o CTRL')
    }
})