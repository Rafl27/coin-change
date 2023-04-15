function coinChange(S, C) {
    let moedas = []
    // começamos da maior moeda para ter uma quantidade de moedas menor
    // se começamos da menor s[0] teriamos 147 moedas de 1 😣
    for (let i = S.length - 1; i >= 0; i--) {
        //enquanto essa moeda for >= ao troco C
        while (C >= S[i]) {
            // ela é adicionada ao array de moedas
            moedas.push(S[i])
            // subtraimos do troco a moeda adicionada, assim sabemos quanto ainda falta
            C -= S[i]
        }
    }
    return moedas
}

const S = [1, 5, 10, 25, 50, 100]
const C = 147
const Troco = coinChange(S, C)

console.log(`Sistema de moedas: [${S}]\nTroco: ${C}\nMoedas usadas: [${Troco}]\nSendo ${Troco.length} a menor quantidade possível de moedas.`)
