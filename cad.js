function excluirCliente(button) {
    const row = button.closest('tr'); // Encontra a linha da tabela mais próxima
    row.remove(); // Remove a linha da tabela
  }
  function alterarCliente(botao) {
    const linha = botao.closest('tr'); // Pega a linha da tabela
    const celulas = linha.cells; // Obtém todas as células da linha
  
    if (botao.textContent === 'Salvar') return; // Se já estiver em modo salvar, não faz nada
  
    for (let i = 0; i < celulas.length - 1; i++) {
      celulas[i].innerHTML = `<input value="${celulas[i].textContent}">`; // Torna cada célula editável
    }
}