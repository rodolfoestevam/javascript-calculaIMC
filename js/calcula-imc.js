//calcula-imc js
var titulo = document.querySelector(".titulo");
titulo.textContent = "Rodolfo Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); //true or false
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

    function validaPeso(peso) {

        if (peso >= 0 && peso < 1000) {
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(altura) {

      if(altura >= 0 && altura <= 3.0) {
        return true;
      } else {
        return false;
      }
    }

    function validaGordura(imc) {
        if(imc > 50 && imc < 0){
            return true;
        } else {
            return false;
        }
    }

    function calculaImc(peso, altura){
      var imc = 0;
      var imc = peso / (altura * altura);

      return imc.toFixed(2);
    }
}
