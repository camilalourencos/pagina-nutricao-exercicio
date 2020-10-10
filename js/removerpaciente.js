var pacientes = document.querySelectorAll(".paciente");
var tabelas = document.querySelector("table");

tabelas.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fade-out");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500)
    //500 milissegundos
})
