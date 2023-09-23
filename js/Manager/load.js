const fileList = document.getElementById('files');
const fileInput = document.getElementById('fileInput');

// Carregar e exibir arquivos na pasta de upload
fetch('/uploads')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((file) => {
      const listItem = document.createElement('li');
      listItem.textContent = file;
      fileList.appendChild(listItem);
    });
  });

// Atualizar a lista de arquivos após o envio de um novo arquivo
fileInput.addEventListener('change', () => {
  fileList.innerHTML = ''; // Limpar a lista atual
  fetch('/uploads')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((file) => {
        const listItem = document.createElement('li');
        listItem.textContent = file;
        fileList.appendChild(listItem);
      });
    });
});
