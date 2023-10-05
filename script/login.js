//função para usuário
function aoDigitarCpfLogin() {

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


function aoPerderOFocoCpfLogin() {

    let aux = document.getElementById("iCpf").value;
    document.getElementById('iCpf').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso').innerHTML = "x";
        document.getElementById('aviso').style.fontSize = "20px";
        document.getElementById('aviso').style.color = "red";
        document.getElementById("iCpf").style.borderColor = "red";


    } else {
        document.getElementById('aviso').innerHTML = " ✔";
        document.getElementById('aviso').style.fontSize = "20px";
        document.getElementById('aviso').style.color = "rgb(250, 247, 65)";
        document.getElementById("iCpf").style.borderColor = "green";

    }


}


//função para senha

function aoPerderOFocoSenha(){

    let aux = document.getElementById("iSenha").value;
    document.getElementById('iSenha').style.textAlign = "center";


    if (aux == null || aux == "") {

        document.getElementById('aviso1').innerHTML = "x";
        document.getElementById('aviso1').style.fontSize = "20px";
        document.getElementById('aviso1').style.color = "red";
        document.getElementById("iSenha").style.borderColor = "red";


    } else {
        document.getElementById('aviso1').innerHTML = " ✔";
        document.getElementById('aviso1').style.fontSize = "20px";
        document.getElementById('aviso1').style.color = "rgb(250, 247, 65)";
        document.getElementById("iSenha").style.borderColor = "green";

    }




}





