import concluirTarefa from './concluirTarefa.js';
import deletarTarefa from './deletarTarefa.js';

export default function htmlTarefas(tarefasDados) {
  const dataTarefasHtml = document.querySelector('[data-tarefas-html]');

  if (typeof tarefasDados !== 'undefined') {
    dataTarefasHtml.innerHTML = '';
    tarefasDados.forEach((tarefa) => {
      const divTarefa = document.createElement('div');
      divTarefa.setAttribute('data-tarefa-marcar', '');
      divTarefa.classList.add(
        'flex',
        'item-center',
        'justify-between',
        'gap-4',
        'p-3',
        'border-b-2',
        'border-purple-50',
      );
      divTarefa.innerHTML = `
      <div data-tarefa-div class="flex-1 flex gap-4">
        <input data-input-checked class="p-5 accent-purple-500" type="checkbox" name="tarefa" id="tarefa" />
        <h2 data-tarefa-titulo class="text-[1.75rem] ">${tarefa.titulo}</h2>
      </div>
      <img data-deletar-tarefa src='/code/src/imgs/excluir.svg' alt="Icone excluir" />
    `;
      dataTarefasHtml.appendChild(divTarefa);
    });
    const tarefaDiv = dataTarefasHtml.querySelectorAll('[data-tarefa-div]');
    const dataTarefaTitulo = dataTarefasHtml.querySelectorAll(
      '[data-tarefa-titulo]',
    );
    const dataInputChecked = dataTarefasHtml.querySelectorAll(
      '[data-input-checked]',
    );
    const dataDeletarTarefa = dataTarefasHtml.querySelectorAll(
      '[data-deletar-tarefa]',
    );

    dataDeletarTarefa.forEach((itemExcluir, index) => {
      itemExcluir.addEventListener('click', () => {
        deletarTarefa(tarefasDados[index]);
      });
    });

    tarefasDados.forEach((tarefaConcluida, index) => {
      if (tarefaConcluida.concluida == true) {
        dataTarefaTitulo[index].classList.add(
          'text-green-600',
          'line-through',
          'opacity-45',
        );
        dataInputChecked[index].checked = true;
      } else {
        dataInputChecked[index].checked = false;
      }
    });

    tarefaDiv.forEach((itemClick, index) => {
      itemClick.addEventListener('click', () => {
        concluirTarefa(tarefasDados[index]);
      });
    });
  }
}
