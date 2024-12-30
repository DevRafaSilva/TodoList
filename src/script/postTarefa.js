import getTarefa from './getTarefa.js';
export default function postTarefa() {
  const dataTarefa = document.querySelector('[data-tarefa]');
  const dataImgClick = document.querySelector('[data-img-click]');
  const erroHtml = document.querySelector('[data-erro]');
  function postarTarefa(event) {
    event.preventDefault();
    try {
      fetch('https://apitarefas-ahhx.onrender.com/tarefas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo: dataTarefa.value,
        }),
      })
        .then((response) => {
          if (response.status == 201) erroHtml.style.display = 'none';
          else {
            if (response.status != 201) erroHtml.style.display = 'block';
          }
          return response.json();
        })
        .then((dados) => {
          if (dados.message) {
            erroHtml.innerText = dados.message;
            throw new Error(dados.message);
          }
          dataTarefa.value = '';
          dataTarefa.focus();
          getTarefa();
        });
    } catch (err) {
    } finally {
      return true;
    }
  }

  dataImgClick.addEventListener('click', postarTarefa);
}
