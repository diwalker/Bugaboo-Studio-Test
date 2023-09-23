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

- [cors](https://www.npmjs.com/package/cors) (v2.8.5) - Middleware para habilitar o Cross-Origin Resource Sharing (CORS) em seu aplicativo Express.

- [express](https://www.npmjs.com/package/express) (v4.17.1) - Um framework web rápido, minimalista e flexível para Node.js que facilita a criação de aplicativos web e APIs.

- [firebase](https://www.npmjs.com/package/firebase) (v9.4.0) - O SDK oficial do Firebase para JavaScript, que permite a integração do Firebase em seu aplicativo Node.js.

- [fs](https://www.npmjs.com/package/fs) (v0.0.1-security) - Biblioteca interna para manipulação de sistema de arquivos no Node.js.

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (v9.0.2) - Implementação de JSON Web Tokens (JWT) para autenticação e autorização.

- [mime-types](https://www.npmjs.com/package/mime-types) (v2.1.30) - Um módulo para ajudar na resolução do tipo MIME de extensões de arquivo.

- [multer](https://www.npmjs.com/package/multer) (v1.4.2) - Middleware para Node.js que facilita o manuseio de uploads de arquivos, útil para processar envios de arquivos em formulários da web.

- [path](https://www.npmjs.com/package/path) (v0.12.7) - Módulo interno do Node.js que fornece utilitários para trabalhar com caminhos de arquivos e diretórios.

Certifique-se de instalar essas dependências usando `npm install` antes de iniciar seu projeto.

# Screenshots do Projeto.

Página de Login 
![Captura de tela 2023-09-22 223209](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/3a5b280a-d83c-4516-b792-e9273a3b4c78)

Página de Upload/Gerenciamento de arquivos.
![Captura de tela 2023-09-22 223231](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/1a8f0dac-2605-4fb6-959d-e9fb28cd6da3)

Arquivos .GLB sendo visualizados usando MODEL VIEWER dentro de uma modal.
![Captura de tela 2023-09-22 223859](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/439d4296-ca0a-40b2-bf4a-2ab56d74a3f4)
![Captura de tela 2023-09-22 223325](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/3b6073de-24bf-4c44-8259-93311a42a904)
![Captura de tela 2023-09-22 223258](https://github.com/diwalker/Bugaboo-Studio-Test/assets/13918844/98db46e1-16ae-48fa-a7ce-ef826f84ab74)





