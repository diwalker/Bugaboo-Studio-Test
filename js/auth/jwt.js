// Função para verificar se o usuário está autenticado
function verificarAutenticacao() {
    const token = localStorage.getItem('token'); // Obtenha o token do armazenamento local (localStorage)

    if (!token) {
        // Se não houver token, redirecione para a página de login
        window.location.href = '/index.html'; // Substitua 'login.html' pelo caminho da sua página de login
        return;
    }

    // Verifique o token JWT no servidor (pode ser feito com uma solicitação AJAX)
    // Se o token for inválido, redirecione para a página de login

    // Se o token for válido, permita o acesso à página atual
}

// Chame a função de verificação de autenticação em todas as páginas que requerem autenticação
verificarAutenticacao();
