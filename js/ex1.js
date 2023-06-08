// Desafio 1
// Array de elementos por repetições
// Implemente um método que possa criar um array baseado nos valores que foram passados para ele.
// Exemplo:
// Entrada do método
//run(2, 'i')
// Resultado do método
//['i', 'i']

function criarArray(qtd, valor) {
    const arr = [];
    for(let i = 0; i < qtd; i++){
        arr.push(valor)
    }
    return arr;
}

const exemplo1 = criarArray(2,'i') 
const exemplo2 = criarArray(4,'v') 
console.log(exemplo1);
console.log(exemplo2);