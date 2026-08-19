   // Lista de tarefas vazio
    let tarefas = [];

    // Elementos DOM
    const inputTarefa = document.getElementById("nova-tarefa");
    const btnAdicionar = document.getElementById("btn-adicionar");
    const listaTarefas = document.getElementById("lista-tarefas");
    const contador = document.getElementById("contador");
    const estadoVazio = document.getElementById("estado-vazio");

    // Adicionar uma nova tarefa
    function adicionarTarefa(){

        const texto = inputTarefa.value.trim();
        if (texto == ""){
            return;
        }

        // Alterar o estado
        tarefas.push(texto);

        // Atualizar a interface
        renderizarTarefas();

        // Limpar o campo
        inputTarefa.value = "";
    }

    // Atualizar o DOM
    function renderizarTarefas(){
        listaTarefas.innerHTML = "";
        tarefas.forEach((tarefa,indice) =>{
                const item = document.createElement("li");
                item.innerHTML = `
                    ${tarefa}
                    <button onclick="removerTarefa(${indice})">Remover</button>
                `;
                listaTarefas.appendChild(item);
        })
        //Atualiza Contador
        if(tarefas.length === 1){
            contador.textContent = `${tarefas.length} tarefa cadastrada`;
        }
        else{
            contador.textContent = `${tarefas.length} tarefas cadastradas`;
        }
        //Controla o estado vazio
        if(tarefas.length === 0){
            estadoVazio.style.display = "block";
            contador.style.display = "none";
        }
        else{
            estadoVazio.style.display = "none";
            contador.style.display = "block";
        }

    }
    //Remover Tarefa
    function removerTarefa(indice){
        //Altera o estado
        tarefas.splice(indice,1);
        renderizarTarefas();
    }
    // Capturar evento
    btnAdicionar.addEventListener("click", adicionarTarefa);

    
    // Estado Inicial
    renderizarTarefas();
