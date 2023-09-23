@echo off
cd %~dp0  

echo Instalando dependências...
npm install

if %errorlevel% equ 0 (
  echo Dependências instaladas com sucesso.
) else (
  echo Houve um erro na instalação das dependências.
  pause
  exit /b 1
)

echo Executando o Servidor...
start cmd /k node server.js

echo Aguarde enquanto o servidor inicia...

timeout /t 2 > nul  

echo Abrindo o navegador padrão...

start index.html

echo Aperte ESC para fechar esta janela

choice /c x /t 86400 /d x > nul
if errorlevel 2 goto :EOF

taskkill /f /im cmd.exe
