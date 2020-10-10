var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(){
   event.preventDefault();
   
   var form = document.querySelector("#form-add");
   var paciente = obtemInfo(form);
   var pacienteTr = montaTr(paciente);
   var erros = validaPaciente(paciente);

   if(erros.length > 0){
       exibeMsgErro(erros);
       return;
               
   } 
    // adicionando as informações na tabela

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
    
    var mensagemDeErro = document.querySelector("#mensagem-erro");
    mensagemDeErro.innerHTML="";
})

function exibeMsgErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
     
    return;
}

function obtemInfo(form){

    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)

    } // o uso de chaves cria um objeto onde damos as caracteristícas ao objeto. em vez de criar muitas váriaveis, criamos 1 (o objeto) que contém todas as informações necessárias.
    return paciente;

}

function montaTr(paciente){
    // cria a TR e a TD do paciente
   var pacienteTr = document.createElement("tr");
   pacienteTr.classList.add("paciente");

   pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
   pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
   pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
   pacienteTr.appendChild(montaTd(paciente.gordura, "infoe-gordura"));
   pacienteTr.appendChild(montaTd(paciente.imc, "info-imc")); 

   return pacienteTr;

}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente (paciente){

    var erros = [];

    if(paciente.nome.length==0){
        erros.push("O nome não pode ser em branco")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push ("Peso inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push ("Altura inválida");   
    }

    if(paciente.gordura.length==0){
        erros.push("A gordura não pode ser em branco")
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco")
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco")
    }
    return erros;   
}