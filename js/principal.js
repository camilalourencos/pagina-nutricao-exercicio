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

var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(){
   event.preventDefault();
   
   var form = document.querySelector("#form-add");

   var nome = form.nome.value;
   var altura = form.altura.value;
   var peso = form.peso.value;
   var gordura = form.gordura.value;

   var pacienteTr = document.createElement("tr");

   var nomeTd = document.createElement("td");
   var pesoTd = document.createElement("td");
   var alturaTd = document.createElement("td");
   var gorduraTd = document.createElement("td");
   var imcTd = document.createElement("td");

   nomeTd.textContent = nome;
   pesoTd.textContent = peso;
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;

   imcTd.textContent = peso*(altura/altura);

   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   pacienteTr.appendChild(imcTd);
   

   var tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr);

   
});









