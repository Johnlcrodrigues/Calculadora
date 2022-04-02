function clicouNumero(valor) {
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML += valor;
  }

  function clean()
  {
    document.getElementById("resultado").innerHTML = "";
  }

  function result(){
let exibirResultado = document.getElementById("resultado").innerHTML;
    if(exibirResultado){
      document.getElementById("resultado").innerHTML = eval(exibirResultado);
    }
    else
    {
      document.getElementById("resulado").innerHTML = "0";
    }
   
  };