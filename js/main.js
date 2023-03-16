
function cargar_bloques(){
    
    let main = document.querySelector(".main");

    for(let i=0; i<=14;i++){
        let div = document.createElement("div");
        div.innerHTML= `<div class="bloque"></div>`;
        main.appendChild(div);
    }
}
cargar_bloques();

/*agregamos evento */
function agregar_evento(){
    let todos_los_bloques = document.querySelectorAll(".bloque");

    function saludar(){
        this.classList.add("activo");
    };
    todos_los_bloques.forEach(function(elemento){
        elemento.addEventListener("click", saludar);
    })

}
agregar_evento();