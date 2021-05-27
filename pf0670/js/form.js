
function validaCamposInput(){
    //Recuperando todos os elementos input da página
    const inputs = document.querySelectorAll('input');

    //Criando a variável de controle do onsubmit
    let controle = true;

    for (campo of inputs) {
        //Verificando o valor do campo!
        if(campo.value == ''){
            campo.style.border = '2px solid #ff0000';
            controle = false;
        }
        //alert("VALOR DO CAMPO : " + campo.value)
    }
    return controle;
}


//CRIAÇÃO OBJETOS
//CONSTRUÇÃO DE OBJETOS

//CONSTRUTOR DO OBJETO
function Pessoa(){
    this.nome = 'Alê',
    this.matricula = '12345',
    this.profissão = 'professor'
}

const pessoa1 = new Pessoa();
console.log("Valor da propriedade do objeto1 : " + pessoa1.nome);
const pessoa2 = new Pessoa();
console.log("Valor da propriedade do objeto2 : " + pessoa2.nome);

function Carro(modelo, ano, chassi){
    this.modelo = modelo,
    this.ano = ano,
    this.chassi = chassi
}

const carro1 = new Carro('Corvete','2015','HJG67D45EDZA');
console.log("Valor da propriedade do Carro1 : " + carro1.modelo);

const carro2 = new Carro('Ka','2018','KJX8976GFX5R43');
console.log("Valor da propriedade do Carro2 : " + carro2.modelo);

//VETOR DE OBJETOS
let carros = [carro1,carro2];

//ITERANDO O VETOR DE OBJETOS
for (car of carros) {
    console.log("MODELO DOS CARROS NO VETOR: " + car.modelo);
}


//ROTAÇÃO DE BANNER
function bannerAnimado1(){
    const girassol = document.getElementById('titImg');
    girassol.alt = 'Girassol!';
    girassol.src = './img/banner-1.jpg';
    girassol.style.transition = '0.5s';
    //UTILIZANDO A FUNÇÃO SETTIMEOUT PARA CONTROLAR A CHAMADA DE OUTRA FUNÇÃO EM MS.
    setTimeout('bannerAnimado2()',1000);
}

function bannerAnimado2(){
    const girassol = document.getElementById('titImg');
    girassol.alt = 'Girassol!';
    girassol.src = './img/banner-2.jpg';
    girassol.style.transition = '0.5s';
    //UTILIZANDO A FUNÇÃO SETTIMEOUT PARA CONTROLAR A CHAMADA DE OUTRA FUNÇÃO EM MS.
    setTimeout('bannerAnimado3()',1000);
}

function bannerAnimado3(){
    const girassol = document.getElementById('titImg');
    girassol.alt = 'Girassol!';
    girassol.src = './img/banner-3.jpg';
    girassol.style.transition = '0.5s';
    //UTILIZANDO A FUNÇÃO SETTIMEOUT PARA CONTROLAR A CHAMADA DE OUTRA FUNÇÃO EM MS.
    setTimeout('bannerAnimado1()',1000);
}

bannerAnimado1();


