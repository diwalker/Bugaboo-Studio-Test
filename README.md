# Desafio Técnico - Gerenciador de Arquivos GLB com Integração ao Model Viewer.

Descrição:
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
![Captura de tela 2023-09-22 223209](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/3a5b280a-d83c-4516-b792-e9273a3b4c78)

Página de Upload/Gerenciamento de arquivos.
![Captura de tela 2023-09-22 223231](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/1a8f0dac-2605-4fb6-959d-e9fb28cd6da3)

Arquivos .GLB sendo visualizados usando MODEL VIEWER dentro de uma modal.
![Captura de tela 2023-09-22 223859](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/439d4296-ca0a-40b2-bf4a-2ab56d74a3f4)
![Captura de tela 2023-09-22 223325](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/3b6073de-24bf-4c44-8259-93311a42a904)
![Captura de tela 2023-09-22 223258](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/98db46e1-16ae-48fa-a7ce-ef826f84ab74)

# Rodando o Projeto.
Primeiramente abra o Cmd ou Terminal e clone o repositório em alguma pasta de sua escolha com 
`git clone https://github.com/diwalker/Bugaboo-Studio-Test.git`, no meu caso em Documentos.
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/33536a56-8def-41d8-9651-f61bce1a1508)

Abra a pasta do projeto com `cd Bugaboo-Studio-Test` e depois rode `npm install` e aguarde a instalação das dependências.
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/edab4381-4fe8-4dbf-9771-a6dbf661d51c)

Após a instalação de dependências, limpe a tela com `cls` se for Windows ou `clear` no Terminal Linux, precisamos rodar o servidor para o gerenciamento do projeto.
Para isso, entre no diretório do gerenciador com `cd back` e logo em seguida execute o servidor com `node server.js`. Ele irá ficar rodando na porta:3000 como a imagem abaixo.
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/4083e0cb-f49b-45f1-8274-8e33eca62ea7)

Agora, com o servidor rodando. entre a pasta do projeto e abra o arquivo index.html, irá abrir o Form de Login para autencicação.
Entre com o seguinte usuário e senha e clique em Fazer Login:
email: dwalkerserver@gmail.com
password: ogumiansa13@
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/2243cf21-6017-4189-9ff7-ff258572abe9)

Irá abrir o Gerenciador de arquivos, com as opções de envio, exibição de arquivos e se clicado no link do arquivo enviado, abre um modal visualizando o arquivo .GLB podendo controlar o arquivodentro do modal com o mouse!
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/d0e67438-d8b4-4518-9dac-7f1a133cce94)
![image](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/798d18f4-dca8-4608-a022-e854b38ef7aa)

Excelente desafio, que me fez estudar mais sobre aextensão GLB e como a visualizar. Agradeço imensamente a oportunidade e aguardo um retorno. 
Diego Silva.















