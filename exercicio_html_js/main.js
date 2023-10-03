document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);
  
    if (!isNaN(campoA) && !isNaN(campoB)) {
      if (campoB > campoA) {
        exibirMensagem("Parabéns os campos foram preenchidos corretamente !!", "mensagem-sucesso");
      } else {
        exibirMensagem(" Erro !!!  O numero B deve ser maior que o número A.  ", "mensagem-erro");
      }
    } else {
      exibirMensagem("Por favor, preencha ambos os campos com números validos.", "mensagem-erro");
    }
  });
  
  function exibirMensagem(mensagem, classe) {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    mensagemDiv.className = "mensagem " + classe;
  }