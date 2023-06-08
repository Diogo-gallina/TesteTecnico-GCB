// Desafio 7
// Igualar arrays
// Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Exemplo:
// Entrada do método
// run([1, 2, 3, 4],[1, 2, 3, 4])
// run([1, 2, 3, 4],[1, 2, 3, 5])

// Resultado do método
// true
// false

const comparandoArray = (list1, list2) =>{
    let igual = true;

    for(let i = 0; i < list1.length; i++){
        if(list1[i] != list2[i]){
            igual = false;
        }
    }

    if(list1.lenght != list2.lenght){
        igual = false;
    }

    return igual;
}

const exemplo1 = comparandoArray([1, 2, 3, 4],[1, 2, 3, 4]);
const exemplo2 = comparandoArray([1, 2, 3, 4],[1, 2, 3, 5]);
console.log(exemplo1);
console.log(exemplo2);