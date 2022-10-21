let posicao1 = 0
let posicao2 = 1
let posicao3

for (i = 0; i <= 10; i++) {
    posicao3 = posicao1 + posicao2
    posicao1 = posicao2
    posicao2 = posicao3
    console.log(posicao3)
}


do {
    console.log(++a)
} while (a <= 20)

for (let a = 0; a <= 30; a++) {
    if (a % 2 != 0) {
        console.log(a)
    }

}

if (2 % 3 == 0) {
    console.log(true)
}