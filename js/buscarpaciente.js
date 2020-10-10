var botaoBuscar = document.querySelector("#buscar-paciente");
botaoBuscar.addEventListener("click", function(){
    console.log("Estou buscando")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erropagina");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente){
                addPacienteTabela(paciente);
    
            })

        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

        
    })
    xhr.send();


});
