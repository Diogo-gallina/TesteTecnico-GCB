// Desafio 1
// Array de elementos por repetições
// Implemente um método que possa criar um array baseado nos valores que foram passados para ele.
// Exemplo:
// Entrada do método
//run(2, 'i')
// Resultado do método
//['i', 'i']

const criarArray = (qtd, valor) => {
    const list = [];
    for(let i = 0; i < qtd; i++){
        list.push(valor);
    }
    return list;
}

const exemplo1 = criarArray(2,'i'); 
console.log(exemplo1);