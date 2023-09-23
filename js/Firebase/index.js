const firebaseConfig = {
  apiKey: "AIzaSyBBSoDXkqwr59VAPDjZhYjYOvz7PuQAgqk",
  authDomain: "bugaboo-508b3.firebaseapp.com",
  projectId: "bugaboo-508b3",
  storageBucket: "bugaboo-508b3.appspot.com",
  messagingSenderId: "9s94984867794",
  appId: "1:994984867794:web:e3379eab5365bc40733a0b",
  measurementId: "G-96JX86EQNV"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginForm = document.getElementById("login-form");
const errorMessageContainer = document.getElementById("error-message");


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Autenticação bem-sucedida, você pode redirecionar o usuário ou fazer outras ações aqui
      const user = userCredential.user;
      console.log("Usuário logado:", user);
    })
    .catch((error) => {
      // Tratar erros de autenticação
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro de autenticação:", errorCode, errorMessage);
    
          // Verificar se o erro é de permissão
      if (errorCode === "auth/insufficient-permission") {
        // Exibir mensagem de erro e link de contato
        errorMessageContainer.innerHTML = `
          <p>Você não tem permissão para acessar este recurso.</p>
          <p>Por favor, entre em contato com o administrador em <a href="mailto:dwalkerserver@gmail.com">dwalkerserver@gmail.com</a>.</p>
        `;
      } else {
        // Limpar mensagem de erro anterior
        errorMessageContainer.innerHTML = "";
      }
    });
});