document.querySelector("#botao-cadastrar").addEventListener("click", () => {
  const form = document.querySelector("form");

  const tarefa = {
    titulo: form.select_title.value,
    mode: form.select_mode.value,
    descricao: form.descricao.value,
    pontos: form.pontos.value,
  };

  validar(tarefa);

  console.log(tarefa);
});

function validar(tarefa) {
  //   limparErros();
  if (tarefa.titulo.trim() == "") {
    document.querySelector("#error_Hb").classList.add("is-error");
    document.querySelector("#select_title_erro").innerText =
      "A Seleção da Habilidade é Obrigatório";
  }

  if (tarefa.descricao.trim() == "" || tarefa.descricao.length < 10) {
    document.querySelector("#descricao").classList.add("is-error");
    document.querySelector("#descricao-erro").innerText =
      "A Descrição deve ter pelo menos 10 caracteres";
  }
  if (tarefa.pontos <= 0) {
    document.querySelector("#pontos").classList.add("is-error");
    document.querySelector("#pontos-erro").innerText =
      "Os pontos devem ser maior que zero";
  }
}
// function limparErros() {
//   document
//     .querySelectorAll("input .is-error, textarea .iserror")
//     .classList.remove("is-error");
// }
