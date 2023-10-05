
//funções para cpf
function aoPerderFocoCpf() {

    let aux = document.getElementById("icpf").value;
    document.getElementById('icpf').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso0').innerHTML = "x";
        document.getElementById('aviso0').style.color = "red";
        document.getElementById("icpf").style.borderColor = "red";



    } else {
        document.getElementById('aviso0').innerHTML = " ✔";
        document.getElementById('aviso0').style.color = "green";
        document.getElementById("icpf").style.borderColor = "green";

    }


}


function aoDigitarCpf() {


    //123.456.789-00

    let aux = document.getElementById('icpf').value;



    if (aux.length == 3) {

        aux = aux + ".";

        document.getElementById('icpf').value = aux;

    }

    if (aux.length == 7) {

        aux = aux + ".";

        document.getElementById('icpf').value = aux;
    }


    if (aux.length == 11) {

        aux = aux + "-";

        document.getElementById('icpf').value = aux;
    }


}

//funções para RG
function aoDigitarRg() {

    //0.000.000

    let aux = document.getElementById("iRg").value;

    if (aux.length == 1) {

        aux = aux + ".";

        document.getElementById('iRg').value = aux;

    }

    if (aux.length == 5) {

        aux = aux + ".";

        document.getElementById('iRg').value = aux;
    }



}



function aoPerderFocoRg() {

    let aux = document.getElementById("iRg").value;
    document.getElementById('iRg').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso1').innerHTML = "x";
        document.getElementById('aviso1').style.color = "red";
        document.getElementById("iRg").style.borderColor = "red";


    } else {
        document.getElementById('aviso1').innerHTML = " ✔";
        document.getElementById('aviso1').style.color = "green";
        document.getElementById("iRg").style.borderColor = "green";

    }

}

//funções para nome
function aoPerderOFocoNome() {

    let aux = document.getElementById("iNomeCompleto").value;
    document.getElementById('iNomeCompleto').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso2').innerHTML = "x";
        document.getElementById('aviso2').style.color = "red";
        document.getElementById("iNomeCompleto").style.borderColor = "red";


    } else {
        document.getElementById('aviso2').innerHTML = " ✔";
        document.getElementById('aviso2').style.color = "green";
        document.getElementById("iNomeCompleto").style.borderColor = "green";

    }


}

//funções para celular

function aoPerderOFocoCelular() {

    let aux = document.getElementById("icelular").value;
    document.getElementById('icelular').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso3').innerHTML = "x";
        document.getElementById('aviso3').style.color = "red";
        document.getElementById("icelular").style.borderColor = "red";


    } else {
        document.getElementById('aviso3').innerHTML = " ✔";
        document.getElementById('aviso3').style.color = "green";
        document.getElementById("icelular").style.borderColor = "green";

    }

}

function aoDigitarCelular() {

    //(21)96470-1292

    let aux = document.getElementById('icelular').value;


    if (aux.length == 0) {

        aux = aux + "(";

        document.getElementById('icelular').value = aux;

    }

    if (aux.length == 3) {

        aux = aux + ")";

        document.getElementById('icelular').value = aux;
    }


    if (aux.length == 9) {

        aux = aux + "-";

        document.getElementById('icelular').value = aux;
    }


}

//funções para e-mail

function aoPerderFocoEmail() {

    let aux = document.getElementById("iEmail").value;
    document.getElementById('iEmail').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso4').innerHTML = "x";
        document.getElementById('aviso4').style.color = "red";
        document.getElementById("iEmail").style.borderColor = "red";


    } else {
        document.getElementById('aviso4').innerHTML = " ✔";
        document.getElementById('aviso4').style.color = "green";
        document.getElementById("iEmail").style.borderColor = "green";

    }




}


//confirmação de email

function aoPerderFocoConfirmEmail() {

    let aux = document.getElementById("confirmarEmail").value;
    document.getElementById('confirmarEmail').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso5').innerHTML = "x";
        document.getElementById('aviso5').style.color = "red";
        document.getElementById("confirmarEmail").style.borderColor = "red";


    } else {
        document.getElementById('aviso5').innerHTML = " ✔";
        document.getElementById('aviso5').style.color = "green";
        document.getElementById("confirmarEmail").style.borderColor = "green";

    }

}
//cep 

function aoPerderFocoCep() {

    let aux = document.getElementById("iCep").value;
    document.getElementById('iCep').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso6').innerHTML = "x";
        document.getElementById('aviso6').style.color = "red";
        document.getElementById("iCep").style.borderColor = "red";


    } else {
        document.getElementById('aviso6').innerHTML = " ✔";
        document.getElementById('aviso6').style.color = "green";
        document.getElementById("iCep").style.borderColor = "green";

    }

}

function aoDigitarCep() {

    //21931-590

    let aux = document.getElementById('iCep').value;


    if (aux.length == 5) {

        aux = aux + "-";

        document.getElementById('iCep').value = aux;

    }

}

//complemento
function aoPerderFocoComplemento() {

    let aux = document.getElementById("iComplemento").value;
    document.getElementById('iComplemento').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso7').innerHTML = "x";
        document.getElementById('aviso7').style.color = "red";
        document.getElementById("iComplemento").style.borderColor = "red";


    } else {
        document.getElementById('aviso7').innerHTML = " ✔";
        document.getElementById('aviso7').style.color = "green";
        document.getElementById("iComplemento").style.borderColor = "green";

    }


}

//cidade
function aoPerderFocoCidade() {

    let aux = document.getElementById("iCidade").value;
    document.getElementById('iCidade').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso8').innerHTML = "x";
        document.getElementById('aviso8').style.color = "red";
        document.getElementById("iCidade").style.borderColor = "red";


    } else {
        document.getElementById('aviso8').innerHTML = " ✔";
        document.getElementById('aviso8').style.color = "green";
        document.getElementById("iCidade").style.borderColor = "green";

    }


}
//nacionalidade
function aoPerderFocoNacionalidade() {

    let aux = document.getElementById("iNacionalidade").value;
    document.getElementById('iNacionalidade').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso9').innerHTML = "x";
        document.getElementById('aviso9').style.color = "red";
        document.getElementById("iNacionalidade").style.borderColor = "red";


    } else {
        document.getElementById('aviso9').innerHTML = " ✔";
        document.getElementById('aviso9').style.color = "green";
        document.getElementById("iNacionalidade").style.borderColor = "green";

    }


}

//nome da mae 

function aoPerderFocoNomeMae() {

    let aux = document.getElementById("iNomedaMae").value;
    document.getElementById('iNomedaMae').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso10').innerHTML = "x";
        document.getElementById('aviso10').style.color = "red";
        document.getElementById("iNomedaMae").style.borderColor = "red";


    } else {
        document.getElementById('aviso10').innerHTML = " ✔";
        document.getElementById('aviso10').style.color = "green";
        document.getElementById("iNomedaMae").style.borderColor = "green";

    }



}