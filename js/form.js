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