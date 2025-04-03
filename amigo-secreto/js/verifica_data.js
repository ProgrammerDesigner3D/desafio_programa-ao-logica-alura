function verificaData() {
    let ano = document.getElementById("ano").value;

    let recebeDatas = ano.split("-");

    //alert(ano);
    //alert(recebeDatas[0]);
    if ((recebeDatas[0] % 4 === 0 && recebeDatas[0] % 100 !== 0) || recebeDatas[0] % 400 === 0) {
        return alert("                  Ano bissexto");
    } else {           
        return alert("                  Não é bissexto");
    }  


}