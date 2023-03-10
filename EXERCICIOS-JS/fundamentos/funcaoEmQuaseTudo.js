console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())

// Armazenando uma funcao em uma variavel
const salvarSoma1 = function (a, b) {
    console.log(a + b)
}

salvarSoma1(2, 3)

// Armazenando um funcao arrow em uma variavel
const salvarSoma2 = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')