document.getElementById("btnEnviar").addEventListener("click", function () {

    if (document.getElementById("txtNome").value != "" &&
        document.getElementById("txtEmail").value != "" &&
        document.getElementById("txtTelefone").value != "" &&
        document.getElementById("txtMensagem").value != "") {
        
        enviarDados(
            document.getElementById("txtNome"), 
            document.getElementById("txtEmail"),
            document.getElementById("txtTelefone"),
            document.getElementById("txtMensagem"));
    }
});

function enviarDados(nome, email, telefone, mensagem) {
    var xhr = new XMLHttpRequest();

    var params = 
        "nome=" + nome.value +
        "&email=" + email.value + 
        "&telefone=" + telefone.value +
        "&mensagem=" + mensagem.value;

    xhr.onreadystatechange = function(){
        
    }
    xhr.open('POST', '/Email/enviarEmail');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(params);
}