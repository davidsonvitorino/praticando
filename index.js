// Função para enviar o formulário de contato
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Simula o envio dos dados (pode ser substituído por uma requisição AJAX)
    console.log('Formulário enviado:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);

    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    document.getElementById('formContato').reset(); // Limpa o formulário
});