const express = require('express');
const multer = require('multer');
const path = require('path');
const mime = require('mime-types');
const fs = require('fs');
const cors = require('cors');
const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

const app = express();
const port = 3000;

app.use(cors());

// Configuração do Firebase
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

// Configurando o diretório de uploads e filtragem de arquivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const originalname = file.originalname;
        cb(null, originalname); // Usa o nome original do arquivo
    },
});

const fileFilter = (req, file, cb) => {
    if (mime.lookup(file.originalname) === 'model/gltf-binary') {
        cb(null, true);
    } else {
        cb(new Error('Apenas arquivos .GLB são permitidos'), false);
    }
};

const upload = multer({ storage, fileFilter });

// Rota para lidar com o envio de arquivos (solicitações POST)
app.post('/uploads', upload.single('file'), (req, res) => {
    res.send('Arquivo enviado com sucesso!');
});

// Rota para permitir o acesso aos arquivos enviados (solicitações GET)
app.get('/uploads/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);

    fs.access(filePath, fs.constants.R_OK, (err) => {
        if (err) {
            res.status(404).send('Arquivo não encontrado');
        } else {
            res.sendFile(filePath);
        }
    });
});

// Verificação de se o usuário está autenticado
function isAuthenticated(req, res, next) {
    const auth = getAuth(firebaseApp);

    if (auth.currentUser) {
        // Usuário autenticado
        next(); // Continua para a próxima rota (usuário autenticado)
    } else {
        // Se o usuário não estiver autenticado, redirecione para a página de login
        res.redirect('/login'); // Certifiqca de que '/login' seja a rota correta para a página de login
    }
}

// Rota para processar o formulário de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Autenticação usando Firebase
    const auth = getAuth(firebaseApp);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sucesso no login, redireciona para a página manager.html
            res.redirect('/manager.html'); 
        })
        .catch((error) => {
            // Exibe uma mensagem de erro se o login falhar
            res.render('login', { errorMessage: error.message });
        });
});

// Use o middleware para a rota que requer autenticação
app.get('/manager.html', isAuthenticated, (req, res) => {
    console.log("Rota de gerenciamento alcançada.");
    // Essa rota só será alcançada se o usuário estiver autenticado
    res.sendFile(path.join(__dirname, 'manager.html'));
});

app.get('/list-files', (req, res) => {
    fs.readdir('uploads', (err, files) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar arquivos' }); // Retorna um objeto JSON com uma mensagem de erro
        } else {
            res.json({ files }); // Retorna um objeto JSON com a lista de arquivos
        }
    });
});


// Códigos ANSI para cor e estilo
const logStyle = '\x1b[1;92m';
const blueText = "\x1b[34m"; 
const redText = "\x1b[31m";
const resetStyle = '\x1b[0m';

// Emojis
const rocketEmoji = '🚀';
const pcEmoji = '🖥️';

// Monta o log formatado
const manager = `${blueText}    ${pcEmoji}  Gerenciador de arquivos  ${resetStyle}${pcEmoji}      `
const server = `${redText}${rocketEmoji}  Servidor rodando na porta:${resetStyle} ${logStyle}${port}${resetStyle}  ${rocketEmoji}`;

// Inicia o servidor
app.listen(port, () => {
    console.log(manager);
    console.log(server);
    console.log('          github.com/diwalker')
});
