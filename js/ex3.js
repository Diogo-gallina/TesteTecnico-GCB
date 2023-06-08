// Desafio 3
// Limpar array
// Implemente um método que limpe os itens desnecessários de um array que foi passado para a função (false, undefined, strings vazias, zero, null)
// Exemplo:
// Entrada do método
// run([1, '', undefined, 0, 4, 'ola'])
// Resultado do método
// [1, 4, 'ola']

const limpaArray = (list) =>{
    const newList = []
    for(let i = 0; i < list.length; i++){
        if(list[i] !== 0 && list[i] !== undefined && list[i] !== '' && list[i] !== null && list[i] !== false){
            newList.push(list[i])
        }
    }
    return newList
}

const clearList = limpaArray([1, '', undefined, 0, 4, 'ola']);

console.log(clearList);

