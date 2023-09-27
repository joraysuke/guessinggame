
let min = 1
let max = 100
let nA = Math.floor(Math.random() * (max - min) + min);

console.log(`Bem-vindo ao jogo de adivinhação!`)
console.log(`Você terá 5 chances para acertar um número aleatório de 1 a 100. Boa sorte!`)

for (let i = 0; i < 5; i++){
    number = Number(prompt(`Digite o número desejado: `))
    if (number === nA){
        console.log(`Parabéns você acertou o número!`)
        break
    } else if (number < nA){
        console.log(`Você errou, o número está acima desse!`)
    } else{
        console.log(`Você errou, o número está abaixo desse!`)
    }

}

if (number === nA){
    console.log(`Deveria jogar na megasena!!!`)
} else {
    console.log(`Suas tentativas acabaram!`)
}