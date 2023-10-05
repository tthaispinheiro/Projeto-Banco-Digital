//função para input nome

function aoDesfocarNome() {

    let aux = document.getElementById("iNome").value;
    document.getElementById('iNome').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso0Um').innerHTML = "x";
        document.getElementById('aviso0Um').style.color = "red";
        document.getElementById("iNome").style.borderColor = "red";


    } else {
        document.getElementById('aviso0Um').innerHTML = " ✔";
        document.getElementById('aviso0Um').style.color = "green";
        document.getElementById("iNome").style.borderColor = "green";

    }


}


function aoDesfocarEmail() {

    let aux = document.getElementById("iEmail").value;
    document.getElementById('iEmail').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso0Dois').innerHTML = "x";
        document.getElementById('aviso0Dois').style.color = "red";
        document.getElementById("iEmail").style.borderColor = "red";


    } else {
        document.getElementById('aviso0Dois').innerHTML = " ✔";
        document.getElementById('aviso0Dois').style.color = "green";
        document.getElementById("iEmail").style.borderColor = "green";

    }


}



function aoDesfocarCelular() {

    let aux = document.getElementById("iCelular").value;
    document.getElementById('iCelular').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso0Tres').innerHTML = "x";
        document.getElementById('aviso0Tres').style.color = "red";
        document.getElementById("iCelular").style.borderColor = "red";


    } else {
        document.getElementById('aviso0Tres').innerHTML = " ✔";
        document.getElementById('aviso0Tres').style.color = "green";
        document.getElementById("iCelular").style.borderColor = "green";

    }



}


function aoDesfocarCpf() {


    let aux = document.getElementById("iCpf").value;
    document.getElementById('iCpf').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso0Quatro').innerHTML = "x";
        document.getElementById('aviso0Quatro').style.color = "red";
        document.getElementById("iCpf").style.borderColor = "red";


    } else {
        document.getElementById('aviso0Quatro').innerHTML = " ✔";
        document.getElementById('aviso0Quatro').style.color = "green";
        document.getElementById("iCpf").style.borderColor = "green";

    }




}




function aoDigitarCpf() {

    //123.456.789-00

    let aux = document.getElementById('iCpf').value;



    if (aux.length == 3) {

        aux = aux + ".";

        document.getElementById('iCpf').value = aux;

    }

    if (aux.length == 7) {

        aux = aux + ".";

        document.getElementById('iCpf').value = aux;
    }


    if (aux.length == 11) {

        aux = aux + "-";

        document.getElementById('iCpf').value = aux;
    }


}


function aoDigitarCelular() {

    //(21)96470-1292

    let aux = document.getElementById('iCelular').value;


    if (aux.length == 0) {

        aux = aux + "(";

        document.getElementById('iCelular').value = aux;

    }

    if (aux.length == 3) {

        aux = aux + ")";

        document.getElementById('iCelular').value = aux;
    }


    if (aux.length == 9) {

        aux = aux + "-";

        document.getElementById('iCelular').value = aux;
    }


}





