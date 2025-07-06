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
    if (input.value.trim() !== '') {
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

        // Adicionar ícone de lixeira
        let lixeira = document.createElement('span');
        lixeira.innerText = '🗑️';
        lixeira.style.cursor = 'pointer';
        novaTarefa.appendChild(lixeira);
        // Evento para apagar a tarefa ao clicar na lixeira
        lixeira.addEventListener('click', function () {
        campoTarefas.removeChild(novaTarefa);
        });
        
};
};
