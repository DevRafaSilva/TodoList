import htmlTarefas from './htmlTarefas.js';

export default function getTarefa() {
  try {
    fetch('https://apitarefas-ahhx.onrender.com/tarefas')
      .then((response) => response.json())
      .then((dados) => {
        htmlTarefas(dados);
      });
  } catch (err) {
  } finally {
  }

  htmlTarefas();
}
