// Desafio 10
// Encontrar valores comuns de arrays
// Implemente um método que encontre os valores comuns entre dois arrays.
// Exemplo:
// // Entrada do método
// run([6, 8], [8, 9])
// // Resultado do método
// [8]

const valoresEmComum = (list1, list2) => {
    const valoresComuns = [];

    for(let i = 0; i < list1.length; i++){
        let igual = false;
        for(let x = 0; x < list2.length; x++){
            if (list1[i] === list2[x]){
                igual = true;
            }
        }
        if (igual == true){
            valoresComuns.push(list1[i])
        }
    }

    return valoresComuns;
}

const exemplo1 = valoresEmComum([6, 8], [8, 9]);
console.log(exemplo1);