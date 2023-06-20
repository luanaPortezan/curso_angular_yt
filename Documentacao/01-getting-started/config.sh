# Instale o Angular CLI
npm install -g @angular/cli

# Crie um espaço de trabalho e um aplicativo inicial
# 1. Execute o comando CLI ng newe forneça o nome my-app, conforme mostrado aqui:
ng new my-app
# O ng new comando solicita informações sobre os recursos a serem incluídos no aplicativo inicial. Aceite os padrões pressionando a tecla Enter ou Return.


# Execute o aplicativo
# Navegue até a pasta do espaço de trabalho, como my-app.
# Execute o seguinte comando:
cd my-app
ng serve --open
# O ng servecomando inicia o servidor, observa seus arquivos e reconstrói o aplicativo à medida que você faz alterações nesses arquivos.
# A opção --open(ou apenas -o) abre automaticamente seu navegador para http://localhost:4200/.

# _______________________________________________________

# Criando componente
# - Para criar um componente podemos utilizar o CLI
ng generate component components/first-component
# - Comando é:
ng generate <nome>
# - todos os arquivos necessários serão criados no projeto
# - para importar o componente basta utilizar o seu <selector> em uma HTML de outro componente
