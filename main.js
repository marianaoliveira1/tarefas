document.querySelector('#push').onclick = function(){
    if(document.querySelector('#novatarefa input').value.length ==0){
        alert("Digita a tarefa primeiro (:")
    }
    else{
        document.querySelector('#tarefas').innerHTML += `
        <div class="tarefas">
            <span id="nomedatarefa">
                ${document.querySelector('#novatarefa input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;

        var atual_tarefa = document.querySelectorAll(".delete");
        for(var i = 0; i <atual_tarefa.length; i++){
            atual_tarefa[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}