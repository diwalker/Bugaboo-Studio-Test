# Desafio Técnico - Gerenciador de Arquivos GLB com Integração ao Model Viewer.
Sua tarefa é criar um sistema web que permita aos usuários fazer upload de arquivos
GLB (formato de arquivo 3D) e visualizá-los usando o Model Viewer. Você precisará
desenvolver o backend, frontend e o gerenciamento de dados para este sistema.

# Features
1. Autenticação de Usuário:
a. Os usuários podem fazer login usando login e senha.
b. A autenticação deve ser integrada com a sua conta para verificar as
permissões.
2. Upload de Arquivo GLB:
a. Crie uma página para permitir que usuários autenticados façam upload de
arquivos GLB.
b. Valide o formato do arquivo para garantir que seja um arquivo GLB válido.
c. Armazene o arquivo.
3. Gerenciamento de Arquivos:
a. Desenvolva uma página que liste os arquivos GLB enviados pelo usuário.
4. Integração com Model Viewer:
a. Use o Model Viewer (https://modelviewer.dev/) para exibir os arquivos GLB
carregados.
b. Crie uma visualização dedicada do Model Viewer para cada arquivo GLB.

# Dependências do Projeto
As seguintes bibliotecas e módulos foram usados neste projeto:

- [**cors**](https://www.npmjs.com/package/cors) (^2.8.5) 🔄 - Middleware para permitir solicitações de origens cruzadas (CORS).
- [**express**](https://www.npmjs.com/package/express) (^4.17.1) 🚀 - Framework web para Node.js.
- [**firebase**](https://www.npmjs.com/package/firebase) (^9.4.0) 🔥 - Biblioteca para integração com o Firebase.
- [**fs**](https://www.npmjs.com/package/fs) (0.0.1-security) 📁 - Módulo de sistema de arquivos (File System).
- [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken) (^9.0.2) 🔐 - Implementação de JSON Web Tokens (JWT).
- [**mime-types**](https://www.npmjs.com/package/mime-types) (^2.1.30) 📃 - Biblioteca para trabalhar com tipos MIME.
- [**multer**](https://www.npmjs.com/package/multer) (^1.4.2) 📁 - Middleware para manipulação de uploads de arquivos.
- [**path**](https://www.npmjs.com/package/path) (^0.12.7) 📂 - Utilitário para manipulação de caminhos de arquivo.
- [**esm**](https://www.npmjs.com/package/esm) (^3.2.25) 🔍 - Suporte a ECMAScript Modules para o Node.js.
- [**express**](https://www.npmjs.com/package/express) (^4.18.2) 🚀 - Framework web para Node.js.
- [**express-fileupload**](https://www.npmjs.com/package/express-fileupload) (^1.4.0) 📤 - Middleware para lidar com uploads de arquivos no Express.
- [**file-type**](https://www.npmjs.com/package/file-type) (^18.5.0) 📄 - Detector de tipos de arquivos baseado em cabeçalhos de arquivo.
- [**fs**](https://www.npmjs.com/package/fs) (^0.0.1-security) 📁 - Módulo de sistema de arquivos (File System).
- [**multer**](https://www.npmjs.com/package/multer) (^1.4.5-lts.1) 📁 - Middleware para manipulação de uploads de arquivos.

Certifique-se de instalar essas dependências usando `npm install` antes de iniciar seu projeto.

# Screenshots do Projeto.
Página de Login.
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/f6659b53-e235-4f10-bb82-6232e2902373)

Página de Upload/Gerenciamento de arquivos.
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/ca033829-58a6-4d74-8521-a3231e5f0664)

Arquivos .GLB sendo visualizados usando MODEL VIEWER dentro de uma modal.
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/40a2fc17-f4cb-4ec0-8bae-870ef8895dd1)
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/8943f74d-bfae-4faf-a9ca-87b28e970229)
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/6e4624e6-947d-4de7-8b5f-a68ca0ecf46a)

# Rodando o Projeto.
Primeiramente abra o Cmd ou Terminal e clone o repositório em alguma pasta de sua escolha com<br> 
`git clone https://github.com/diwalker/Bugaboo-Studio-Test.git`, no meu caso em Documentos.

Abra a pasta do projeto com `cd Bugaboo-Studio-Test` e depois rode `npm install` e aguarde a instalação das dependências.

Após a instalação de dependências, limpe a tela com `cls` se for Windows ou `clear` no Terminal Linux, precisamos rodar o servidor para o gerenciamento do projeto.
Para isso, entre no diretório do gerenciador com `cd back` e logo em seguida execute o servidor com `node server.js`. Ele irá ficar rodando na porta:3000 como a imagem abaixo.

Agora, com o servidor rodando. entre a pasta do projeto e abra o arquivo index.html, irá abrir o Form de Login para autencicação.
Entre com o seguinte usuário e senha e clique em Fazer Login:
email: dwalkerserver@gmail.com
password: ogumiansa13@

Irá abrir o Gerenciador de arquivos, com as opções de envio, exibição de arquivos e se clicado no link do arquivo enviado, abre um modal visualizando o arquivo .GLB podendo controlar o arquivodentro do modal com o mouse!

Excelente desafio, que me fez estudar mais sobre a extensão GLB e como a visualizar. Agradeço imensamente a oportunidade e aguardo um retorno positivo.<br>
Diego Silva.















