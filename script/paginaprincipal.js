
//declarando variável e abrindo um vetor vazio
var i = 0;
var imagem = [];

imagem.push("./imagens/carrossel_00.jpg");
imagem.push("./imagens/carrossel_01.jpg");
imagem.push("./imagens/carrossel_02.jpg");


//ao clicar no botão ir
function aoClicarEmIr() {

    //se o indice for extramente igual ao tamanho da imagem
    if (i === imagem.length) {

        //i recebe 0
        i = 0;
    }
    //imprima na tela do carrossel a imagem
    document.getElementById("telaCarrossel").src = (imagem[i++]);

}


//ao clicar no botão voltar

function aoClicarEmVoltar() {
    //se o indice 0 for extremamente diferente que 0

    if (i !== 0) {

        i--;
    }

    else {

        i = imagem.length - 1;

    }

    document.getElementById("telaCarrossel").src = (imagem[i]);


}


function aoDigitarCpf() {

    //123.458.000-00
    let aux = document.getElementById('icpfVerificar').value;

    if (aux.length == 3) {

        aux = aux + ".";

        document.getElementById('icpfVerificar').value = aux;
    }

    if (aux.length == 7) {

        aux = aux + ".";

        document.getElementById('icpfVerificar').value = aux;
    }

    if (aux.length == 11) {

        aux = aux + "-";

        document.getElementById('icpfVerificar').value = aux;
    }


}



function aoSairDoCpf() {


    let aux = document.getElementById('icpfVerificar').value;

    if (aux == null || aux == "") {


        document.getElementById('icpfVerificar').style.borderColor = "red";


    } else {

        document.getElementById('icpfVerificar').style.borderColor = "green";
    }
}


//quiz 

document.getElementById('primeiraPergunta').style.display = ""
document.getElementById('segundaPergunta').style.display = "none";
document.getElementById('terceiraPergunta').style.display = "none";
document.getElementById('faltaPouco').style.display = "none";
document.getElementById('agradecimentoQuiz').style.display = "none";


function aoclicar(questaoSelecionada) {


    if (questaoSelecionada === '1') {
        document.getElementById('primeiraPergunta').style.display = "none"
        document.getElementById('segundaPergunta').style.display = "";
    }

    if (questaoSelecionada == '2') {


        document.getElementById('segundaPergunta').style.display = "none"
        document.getElementById('terceiraPergunta').style.display = "";

    }

    if (questaoSelecionada == '3') {


        document.getElementById('terceiraPergunta').style.display = "none"
        document.getElementById('faltaPouco').style.display = "";

    }


    if (questaoSelecionada == '4') {

        document.getElementById('primeiraPergunta').style.display = "none"
        document.getElementById('segundaPergunta').style.display = "none";
        document.getElementById('terceiraPergunta').style.display = "none";
        document.getElementById('faltaPouco').style.display = "none";
        document.getElementById('agradecimentoQuiz').style.display = "";



    } else {

        if (questaoSelecionada == '5') {

            document.getElementById('primeiraPergunta').style.display = ""
            document.getElementById('segundaPergunta').style.display = "none";
            document.getElementById('terceiraPergunta').style.display = "none";
            document.getElementById('faltaPouco').style.display = "none";
            document.getElementById('agradecimentoQuiz').style.display = "none";



        }


    }



}



//funções para cpf
function aoDesfocarNome() {

    let aux = document.getElementById("iNomeQuiz").value;
    document.getElementById('iNomeQuiz').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso0').innerHTML = "x";
        document.getElementById('aviso0').style.color = "red";
        document.getElementById('aviso0').style.position = "absolute"
        document.getElementById('aviso0').style.marginLeft = "310px";
        document.getElementById('aviso0').style.marginTop = "60px"

        document.getElementById("iNomeQuiz").style.borderColor = "red";



    } else {
        document.getElementById('aviso0').innerHTML = " ✔";
        document.getElementById('aviso0').style.position = "absolute"
        document.getElementById('aviso0').style.marginLeft = "310px";
        document.getElementById('aviso0').style.marginTop = "60px"
        document.getElementById('aviso0').style.color = "green";
        document.getElementById("iNomeQuiz").style.borderColor = "green";

    }
}


function aoDesfocarEmail() {

    let aux = document.getElementById("iEmailQuiz").value;
    document.getElementById('iEmailQuiz').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso1').innerHTML = "x";
        document.getElementById('aviso1').style.color = "red";
        document.getElementById('aviso1').style.position = "absolute"
        document.getElementById('aviso1').style.marginLeft = "310px";
        document.getElementById('aviso1').style.marginTop = "60px"

        document.getElementById("iEmailQuiz").style.borderColor = "red";



    } else {
        document.getElementById('aviso1').innerHTML = " ✔";
        document.getElementById('aviso1').style.position = "absolute"
        document.getElementById('aviso1').style.marginLeft = "310px";
        document.getElementById('aviso1').style.marginTop = "60px"
        document.getElementById('aviso1').style.color = "green";
        document.getElementById("iEmailQuiz").style.borderColor = "green";

    }






}