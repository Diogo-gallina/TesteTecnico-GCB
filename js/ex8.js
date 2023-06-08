// Desafio 8
// Remover aninhamentos de um array
// Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Exemplo:
// Entrada do método
// run([1, 2, [3], [4, 5]])
// Resultado do método
// [1, 2, 3, 4, 5]

const interseccaoArray = (list) =>{
    const newList = [];
    const fila = [list];

    while (fila.length) {
        let item = fila.pop();

        if (Array.isArray(item)) {
            for (let i = item.length - 1; i >= 0; i--) {
                fila.push(item[i]);
            }
        } else {
            newList.push(item);
        }
    }

    return newList;
    
}

const exemplo = interseccaoArray([1, 2, [3], [4, 5]]);
console.log(exemplo);