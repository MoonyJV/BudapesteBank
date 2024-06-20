document.querySelector("button").addEventListener("click", function () {
  var nome = document.getElementById("nome");
  var n = document.getElementById("n");
  var valor = document.getElementById("valor");

  // Clear existing error message
  var erroNome = document.querySelector("span");
  if (erroNome) {
    erroNome.parentNode.removeChild(erroNome);
    erroNome = null;
  }

  var erroNum = document.querySelector("span");
  if (erroNum) {
    erroNum.parentNode.removeChild(erroNum);
    erroNum = null;
  }




  
  if (nome.value.trim().split(" ").length < 2) {
    erroNome = document.createElement("span");
    erroNome.textContent = "Nome inválido";

    var h2Element = document.querySelector("h2");
    h2Element.appendChild(erroNome);
    
  } else {
  }


  if (n.value.trim().length != 6) {
    erroNum = document.createElement("span");
    erroNum.textContent = "Número invalído";

    var h2Element = document.querySelector("h2");
    h2Element.appendChild(erroNum);

    
  } else {
  }

  if (!erroNum && !erroNome) {
    alert(`Transferência de ${nome.value} de ${valor.value}R$ efetuado com sucesso.`);
    nome.value = ""
    n.value = ""
    valor.value = ""
  }

  else{}
});
