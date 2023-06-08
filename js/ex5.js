// Desafio 5
// Filtrar array
// Implemente um método que retorne um array filtrado, sem os itens passados por parâmetro.    
// Exemplo:
// Entrada do método
// run([5, 4, 3, 2, 5], [5, 3])
// Resultado do método
// [4, 2]

const filtraArray = (list1, list2) =>{
    const filtrado = [];
    
    for(let i = 0; i < list1.length; i++ ){
        let remove = false;
        for(let x = 0; x < list2.length; x++){
            if(list1[i] == list2[x]){
                remove = true
            }
        }
        if(remove == false){
           filtrado.push(list1[i]); 
        }
        
    }
    
    return filtrado;
}

const listaFiltrada = filtraArray([5, 4, 3, 2, 5], [5, 3]);
console.log(listaFiltrada);

