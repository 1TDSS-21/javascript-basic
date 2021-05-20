

//Declaração de Vetores
var frutas = ['maça','banana','laranja'];

//Acessando uma posição do Array/Vetor
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

//Adicionando um item no Vetor/Array com push('item');
frutas.push('caqui');
frutas.push('melão');
//Visualizando a estrutura do vetor no log
console.table(frutas);

console.log("FOR-IN");
//for-in (Apresenta o índice do array na variavel de controle)
for(f in frutas){
    console.log("FRUTA - " + frutas[f]);
}

console.log("FOR-OF");
//for-of (Apresenta o item do array na variavel de controle)
for(f of frutas){
    console.log("FRUTA - " + f);
}
