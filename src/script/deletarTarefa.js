import getTarefa from './getTarefa.js';
import htmlTarefas from './htmlTarefas.js';

export default function deletarTarefa(tarefaDeletar) {
  try {
    fetch(`https://apitarefas-ahhx.onrender.com/tarefas/${tarefaDeletar.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((dados) => {
      getTarefa();
      htmlTarefas();
    });
  } catch (err) {
  } finally {
  }
}
