function clicouNumero(valor) {
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML += valor;
  }

  function clean()
  {
    document.getElementById("resultado").innerHTML = "";
  }