document.getElementById('adicionarPerguntaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const questionInput = document.getElementById('perguntaTextoInput');

  if (questionInput.value.trim() !== '') {
    // Adicione o código que insere a pergunta como um <li> na
    // <ul id="questionarioList>"

    questionInput.value = ''; // Limpa o campo após adicionar
  } else {
    alert("Por favor, digite uma pergunta.");
  }
});

