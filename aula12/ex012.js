let agora = new Date()
let hora = agora.getHours() 
let minutes = agora.getMinutes ()

console.log(`Agora são exatamante ${hora}:${minutes}h.`)

if (hora < 12 && hora >= 6) {
    console.log("Bom dia!")
} else if(hora < 20 && hora >= 12) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}