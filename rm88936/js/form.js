function validaCamposInput() {
    const inputs = document.querySelectorAll('input');

    let controle = true;

    for (campo of inputs) {
        if(campo.value == ''){
            campo.style.border = '2px solid #ff0000';
            controle = false;
        }
    }
        return controle;
}

function Pessoa(){
    this.nome = 'Giovana',
    this.matricula = '12345',
    this.profissão = 'Estudante'
}
    
const pessoa = new Pessoa();
console.log("Valor da propriedade do objeto : " + pessoa.nome);
const pessoa2 = new Pessoa();
console.log("Valor da propriedade do objeto2 : " + pessoa2.nome);

function Carro(modelo, ano){
    this.modelo = modelo,
    this.ano = ano
}

const carro = new Carro('Fusca','1999');
console.log("Valor da propriedade do carro: " + carro.modelo);

const carro2 = new Carro('HB20','2020');
console.log("Valor da propriedade do carro2: " + carro2.modelo);

let carros = [carro,carro2];

for (car of carros) {
    console.log("Modelo dos carros no vetor: " + car.modelo);
}

function bannerAnimado(){
    const girassol = document.getElementById('titImg');
    girassol.alt = 'Girassol';
    girassol.src = './img/banner-1.jpg';
    setTimeout('bannerAnimado2()',1000);
}

function bannerAnimado2(){
    const girassol = document.getElementById('titImg');
    girassol.alt = 'Girassol';
    girassol.src = './img/banner-2.jpg';
    setTimeout('bannerAnimado3()',1000);
}

function bannerAnimado3(){
    const girassol = document.getElementById('titImg');
    girassol.alt = 'Girassol';
    girassol.src = './img/banner-3.jpg';
    setTimeout('bannerAnimado()',1000);
}

bannerAnimado();