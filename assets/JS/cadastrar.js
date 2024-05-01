document.querySelector("#botao-cadastrar").addEventListener("click", () => {
  const form = document.querySelector("form");

  const tarefa = {
    titulo: form.select_title.value,
    mode: form.select_mode.value,
    descricao: form.descricao.value,
    pontos: form.pontos.value,
  };

  if (!validar(tarefa)) {
    salvar(tarefa);
  }
});

function salvar(tarefa) {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  window.location.href = "index.html";
}

function validar(tarefa) {
  let auxError = false;
  limparErros();
  if (tarefa.titulo.trim() == "") {
    document.querySelector("#error_Hb").classList.add("is-error");
    document.querySelector("#select_title_erro").innerText =
      "A Seleção da Habilidade é Obrigatório";
    auxError = true;
  }

  if (tarefa.descricao.trim() == "" || tarefa.descricao.length < 10) {
    document.querySelector("#descricao").classList.add("is-error");
    document.querySelector("#descricao-erro").innerText =
      "A Descrição deve ter pelo menos 10 caracteres";
    auxError = true;
  }
  if (tarefa.pontos <= 0) {
    document.querySelector("#pontos").classList.add("is-error");
    document.querySelector("#pontos-erro").innerText =
      "Os pontos devem ser maior que zero";
    auxError = true;
  }
  return auxError;
}
function limparErros() {
  const campos = document.querySelectorAll(
    "input.is-error, textarea.is-error, div.is-error"
  );
  console.log(campos);

  campos.forEach((input) => {
    input.classList.remove("is-error");
  });

  document
    .querySelectorAll(".nes-field span")
    .forEach((span) => (span.innerText = ""));
}
