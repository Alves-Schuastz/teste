let soma_button = document.getElementById("SOMA_button");
let sub_button = document.getElementById("SUB_button");
let multi_button = document.getElementById("MULTI_button");
let div_button = document.getElementById("DIV_button");
let fat_button = document.getElementById("FAT_button");
let imc_button = document.getElementById("IMC_button");
let nom_button = document.getElementById("NOM_button");
let login_button = document.getElementById("LOGIN_button");
let img_button = document.getElementById("IMG_button");

soma_button.addEventListener("click", soma);
sub_button.addEventListener("click", subtracao);
multi_button.addEventListener("click", multiplicacao);
div_button.addEventListener("click", divisao);
fat_button.addEventListener("click", fatorial);
imc_button.addEventListener("click", imc);
nom_button.addEventListener("click", nome);
login_button.addEventListener("click", login);
img_button.addEventListener("click", imagem);

function soma(){
    let a = document.getElementById("sub_A-SOM").value;
    let b = document.getElementById("sub_B-SOM").value;

    a = parseInt(a);
    b = parseInt(b);
    document.getElementById("SOMA_result").innerHTML= a+b;
}

function subtracao(){
    let a = document.getElementById("sub_A-SUB").value;
    let b = document.getElementById("sub_B-SUB").value;

    a = parseInt(a);
    b = parseInt(b);
    document.getElementById("SUB_result").innerHTML = a-b;
}

function multiplicacao(){
    let a = document.getElementById("sub_A-MULTI").value;
    let b = document.getElementById("sub_B-MULTI").value;

    a = parseInt(a);
    b = parseInt(b);
    document.getElementById("MULTI_result").innerHTML = a * b;
}

function divisao(){
    let a = document.getElementById("sub_A-DIV").value;
    let b = document.getElementById("sub_B-DIV").value;

    a = parseInt(a);
    b = parseInt(b);
    document.getElementById("DIV_result").innerHTML = a / b;
}

/*//////////////////////////////////// */

function fatorial(){
    let num = document.getElementById("sub_A-FAT");
    let result = 1;
    let error = "o numero esta incorreto";

    if(num <= 0){
        document.getElementById("FAT_result").innerHTML = error;
    }
    else{
        for(let i=num.value ; i>1 ; i--){
            result*=i;
        }
        document.getElementById("FAT_result").innerHTML = result;
    }
}

/*//////////*/

function imc(){
    let altura = document.getElementById("sub_A-IMC").value;
    let peso = document.getElementById("sub_B-IMC").value;
    let imc_c1 ;
    let imc_c2;


    altura = parseFloat(altura);
    peso = parseFloat(peso);
     
    imc_c1 = altura * altura;
    console.log(altura);
    imc_c2 = peso / imc_c1;

    document.getElementById("IMC_result").innerHTML = imc_c2.toFixed(2);
}

function nome(){
    let nom = document.getElementById("sub_A-NOM").value;
    let sob_nom = document.getElementById("sub_B-NOM").value;

    document.getElementById("NOM_result").innerHTML = nom + " " + sob_nom;
}

function login(){
    let log = document.getElementById("sub_A-LOGIN").value;
    let senha = document.getElementById("sub_B-LOGIN").value;

    if(log && senha == "adimin"){
        document.getElementById("LOGIN_result").innerHTML = "sucesso";
    }
    else{
        document.getElementById("LOGIN_result").innerHTML = "erro";      
    }
}





function imagem(){
    var img = document.createElement('img');

    // Define a fonte da imagem (substitua pelo caminho da sua imagem)
    img.setAttribute('src', 'images.jpeg');

    // Define um texto alternativo para a imagem (opcional)
    img.setAttribute('alt', 'Descrição da imagem');

    // Seleciona o contêiner onde a imagem será adicionada
    var imageContainer = document.getElementById('img');

    // Adiciona a imagem ao contêiner
    imageContainer.appendChild(img);
    
}