const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário
console.log(typeof media)
console.log(typeof Number)

//Alguns Cuidados

console.log(7 / 0) //gera o infinito
console.log("10" / 2) //respeita formato do numero, mesmo em aspas funciona
console.log('3' + 2) // no caso do + ele concatena (32)
console.log("Show!" * 2) //Not a Number
console.log(0.1 + 0.7) //gera imprecisão
//console.log(10.toString())
console.log((10.345).toFixed(2))