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
        </div>
        `;
    }
}