var titulo = document.querySelector(".titulo");
titulo.textContent= "Aparecida Nutricionista";
console.log(titulo.textContent);



var pacientes = document.querySelectorAll(".paciente"); 

for(var i = 0 ; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso < 0 || peso > 1000) {
        tdPeso.textContent = "Peso inválido";
        pesoValido = false;
    }
    if (altura > 3.00 || altura < 0){
        tdAltura.textContent = "Altura inválida";
        alturaValida = true;
    }

    if (pesoValido && alturaValida){
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Impossível calcular o IMC";
        paciente.classList.add("paciente-invalido");
    }


}    











