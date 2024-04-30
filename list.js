let botaoAdd = document.getElementById('botao');
let input = document.getElementById('input-tarefa');
let campoTarefas = document.getElementById('tarefas');
let marcado = false;

// Adiciona a tarefa quando a tecla Enter é pressionada
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

botaoAdd.addEventListener('click', adicionarTarefa);

// Adiciona a tarefa quando a tecla Enter é pressionada
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    if (input.value != '') {
        let novaTarefa = document.createElement('p');
        campoTarefas.appendChild(novaTarefa);

        // Adicionar checkbox para marcar a tarefa como concluída
        let checkbox = document.createElement('span');
        checkbox.innerText = '⬜';
        novaTarefa.appendChild(checkbox);

        // Adicionar texto da tarefa
        let textoTarefa = document.createElement('span');
        textoTarefa.innerText = input.value;
        novaTarefa.appendChild(textoTarefa);

        input.value = '';

        // Evento para marcar/desmarcar a tarefa como concluída
        checkbox.addEventListener('click', function() {
            if (checkbox.innerText === '⬜') {
                checkbox.innerText = '✅'; // Unicode para uma caixa de seleção marcada
            } else {
                checkbox.innerText = '⬜';
            }
        });

        // Evento para remover a tarefa clicando na lixeira.
        novaTarefa.addEventListener('dblclick', function(){
            campoTarefas.removeChild(novaTarefa);
        });
    }
}
