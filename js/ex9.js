// Desafio 9
// Dividir array
// Implemente um método que divida um array por uma quantidade passada por parâmetro.
// Exemplo:
// Entrada do método
// run([1, 2, 3, 4, 5], 2)
// Resultado do método
// [[1, 2], [3, 4], [5]]

const divideArray = (list, qtd) => {
    var newList = [];
    var divisao = [];
  
    for (var i = 0; i < list.length; i++) {
      divisao.push(list[i]);
  
      if (divisao.length === qtd || i === list.length - 1) {
        newList.push(divisao);
        divisao = [];
      }
    }
  
    return newList;
}

const exemplo = divideArray([1, 2, 3, 4, 5], 2);
console.log(exemplo);
  