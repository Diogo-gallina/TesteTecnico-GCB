// Desafio 4
// Converter array em objeto
// Implemente um método que possa converter um array de arrays em um objeto com chave e valor
// Exemplo:
// Entrada do método
// run([["c",2],["d",4]])
// Resultado do método
// { c: 2, d: 4 }

const converteArray = (list) => {
    const object = {};
    
    for (let i = 0; i < list.length; i++) {
        const [a, b] = list[i];
        object[a] = b;
    }
    return object;
}

const newObject = converteArray([["c", 2], ["d", 4]]);
console.log(newObject);