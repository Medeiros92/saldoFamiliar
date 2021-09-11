// Declaração do Objeto
let myArray = {
    receitas: [800, 400],
    despesas: [1000, 1000],
}

// Função soma de elementos do array
function soma(array){
    let tot = 0;

    for(let value of array){
        tot += value;
    }
    return tot;
}

// Mostra na tela a soma dos elementos do array
console.log(`Despesas: R$${soma(myArray.despesas)}`)
console.log(`Receitas: R$${soma(myArray.receitas)}`)









