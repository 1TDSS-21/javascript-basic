
//SOLUÇÃO DOS EXERCÍCIOS

/*
    1 - Faça um programa JavaScript em que o usuário informará 3 números e o programa calculará a média aritmética desses números. Informe o resultado em um console.log.

let nr1 = parseInt(prompt("Digite o primeiro número!"));
let nr2 = parseInt(prompt("Digite o segundo número!"));
let nr3 = parseInt(prompt("Digite o terceiro número!"));
let result = ((nr1+nr2+nr3)/3);
console.log("O resultado da operação é : " + result);
*/

/*
2 - Faça um programa JavaScript em que o usuário informará sua altura e peso e o programa calculará o seu IMC. Informe o resultado em um console.log.
let peso = parseInt(prompt("Imforme seu peso!"));
let altura = parseInt(prompt("Imforme sua altura!"));
//console.log("O seu IMC é : " + (peso/(altura**2)));
console.log("O seu IMC é : " + (peso/(altura*altura)));
*/

/*
3 - Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma  mensagem de alerta informando qual é o maior número dentre os números informados. Informe o resultado em um   console.log.
let nr1 = parseInt(prompt("Digite o primeiro número!"));
let nr2 = parseInt(prompt("Digite o segundo número!"));
let nr3 = parseInt(prompt("Digite o terceiro número!"));
let msg;
if((nr1 > nr2) && (nr1 > nr3) ){
    msg = "O primeiro numero é o maior!";
    console.log(msg);
}else if((nr2 > nr1) && (nr2 > nr3) ){
    msg = "O segundo numero é o maior!";
    console.log(msg);
}else{
    msg = "O Terceiro numero é o maior!";
    console.log(msg);
}
*/

/*
  4 - Faça um programa JavaScript em que o usuário informará a sua idade e o programa emitirá uma mensagem  dizendo se o usuário e ou não menor de idade. Informe o resultado em um console.log.
*/

let idade = parseInt(prompt("Digite sua idade!"));
let msg;
/*
if(idade < 18){
    msg = "Você é menor de idade!";
    console.log(msg);
}else{
    msg = "Você é maior de idade!";
    console.log(msg);
}
*/
//IF TERNÁRIO
msg = idade < 18 ? "Você é menor de idade!":"Você é maior de idade!";
console.log(msg);
