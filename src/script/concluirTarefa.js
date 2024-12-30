import getTarefa from './getTarefa.js';
import htmlTarefas from './htmlTarefas.js';

export default function concluirTarefa(tarefaItem) {
  if (tarefaItem !== undefined) {
    try {
      fetch(`https://apitarefas-ahhx.onrender.com/tarefas/${tarefaItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo: tarefaItem.titulo,
          concluida: true,
        }),
      })
        .then((response) => response.json())
        .then((dados) => {
          htmlTarefas();
          getTarefa();
        });
    } catch (err) {
    } finally {
    }
  }
}
