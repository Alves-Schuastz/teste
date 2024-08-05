
function confirmar(){
    let email_capturado_input = document.getElementById("email").value;
    let nome_capturado_input = document.getElementById("nome").value;

    document.getElementById("mensagem_confirmacao").innerHTML = "Muito obrigado(a) senhor(a)" + nome_capturado_input + "Acabamos de enviar um e-mail para: " + email_capturado_input;
   

}