# Previsão do tempo - Senior teste

Projeto teste para programador front-end.

## Iniciando

Para iniciar você só precisa clonar o senior-test repository e instalar as dependências:

### Pré requisitos

Você precisa do git para clonar o senior-test repository. Você pode baixar o git em [http://git-scm.com/](http://git-scm.com/).

Você também precisa do node.js e o package manager (npm) instalado. Você pode baixar o node.js em [http://nodejs.org/](http://nodejs.org/).

### Clone senior-test

Clone o senior-test repository usando [git][git]:

```
git clone https://github.com/agencialbp/senior-test.git
cd senior-test
```

### Instale as dependências

Para instalar as dependências execute o seguinte comando:

```
npm install
```

Será executado automaticamente os seguintes comandos:

```
bower install
gulp
serve -p 8080 ./app
```

* `node_modules` - contém as dependências do node.js
* `app/bower_components` - contém as dependências da aplicação

### Rodando a aplicação

Para iniciar um server local utilize o seguinte comando:

```
npm start
```

### Rodando a aplicação como desenvolvedor

Para compilar o less automaticamente utilize o seguinte comando:

```
gulp dev
```

Agora abra a seguinte URL no seu navegador: `http://localhost:8080/`.