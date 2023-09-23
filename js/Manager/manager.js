const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

// Inicialize o Firebase com sua configuração
const firebaseConfig = {
    apiKey: "AIzaSyBBSoDXkqwr59VAPDjZhYjYOvz7PuQAgqk",
    authDomain: "bugaboo-508b3.firebaseapp.com",
    projectId: "bugaboo-508b3",
    storageBucket: "bugaboo-508b3.appspot.com",
    messagingSenderId: "9s94984867794",
    appId: "1:994984867794:web:e3379eab5365bc40733a0b",
    measurementId: "G-96JX86EQNV"
  };

const firebaseApp = initializeApp(firebaseConfig);

// Middleware para verificar se o usuário está logado
const isAuthenticated = (req, res, next) => {
    // Verifique se o usuário está autenticado usando Firebase Authentication
    const auth = getAuth();

    // Adapte esta lógica para a sua forma de autenticação real
    const isUserLoggedIn = !!auth.currentUser; // Verifica se o usuário atual está autenticado

    if (isUserLoggedIn) {
        window.location.href = '/back/manager.html'; // Continue para a próxima rota (usuário autenticado)
    } else {
        // Se o usuário não estiver autenticado, redirecione para a página de login
        res.redirect('/login');
    }
};

// Use o middleware para a rota que requer autenticação
app.get('/manager', isAuthenticated, (req, res) => {
    // Esta rota só será alcançada se o usuário estiver autenticado
    res.sendFile(path.join(__dirname, 'manager.html'));
});

// Verifique o login real
document.getElementById('login-button').addEventListener('click', function () {
    const auth = getAuth();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Autenticar com email e senha usando Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sucesso no login, redirecione para a página manager.html
            res.redirect = '/back/manager.html';
        })
        .catch((error) => {
            // Exiba uma mensagem de erro se o login falhar
            const errorMessageDiv = document.getElementById('error-message');
            errorMessageDiv.textContent = error.message;
        });
});


