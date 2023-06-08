// Desafio 6
// Novo array sem valores duplicados
// Implemente um método que retorne um array, sem valores duplicados.
// Exemplo:
// Entrada do método
// run([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])
// Resultado do método
// [1, 2, 3, 4, 5, 7]

const removeElementosIguais = (list) =>{
    const newList = [];

    for(let i = 0; i < list.length; i++){
        let igual = false;
        for (let x = 0; x < newList.length; x++) {
            if (list[i] === newList[x]) {
                igual = true;
              break;
            }
          }
        if(igual == false){
            newList.push(list[i])  
        }
    }

    return newList;
}

const semNumDuplicados = removeElementosIguais([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);
console.log(semNumDuplicados);
