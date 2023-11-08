function parimp(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let res = parimp(13)

console.log(`O número é ${res}`)