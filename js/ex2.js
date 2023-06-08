//  Desafio 2
// Inverter array
// Implemente um método que inverta um array, sem utilizar métodos nativos (.map(), .forEach() ...).
//  Exemplo:
// Entrada do método
// run([1, 2, 3, 4])
// Resultado do método
// [4, 3, 2, 1]

function inverteArray(list) {
    const invert = [];
    for (let i = list.length - 1; i >= 0; i--) {
      invert.push(list[i]);
    }
    return invert;
  }
  
  const invert = inverteArray([1,2,3,4]);
  console.log(invert);