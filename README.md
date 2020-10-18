## ViaCepDotnet (Frontend)

Projeto desenvolvido com o objetivo de realizar buscas de CEPS no webservice do VIA CEP.

### Iniciando
Use as intruções abaixo para rodar o projeto.

#### Requisitos
Você precisará das seguintes ferramentas se desejar codificar algo:

* [Visual Studio Code](http://www.visualstudio.com/downloads/)

Você precisará das seguintes ferramentas se desejar rodar o projeto usando docker:

* [Docker](http://www.docker.com/)
* [Docker-compose](http://docs.docker.com/compose/install/)

#### Setup
Siga estas etapas para para rodar o projeto em produção:

  1. Clone o repositório
 
  2. Instale o angular-cli
     ```
     npm install -g @angular/cli
     ```
  3. No diretório raiz, restaure os pacotes (npm) executando:
     ```
     npm install
     ```
  4. Em seguida o parâmetro "url server" no arquivo "src/environments/environment.ts" com o objetivo de apontar para a API:
     ```
     urlServer: 'http://localhost:8000'
     ```
  5. Em seguida compile o projeto executando:
     ```
     ng serve
     ```
  6. Agora seus projetos estão em execução, abra o navegador e acesse: http://localhost:4200/
  
  
  #### Setup (Com Docker)

Siga estas etapas para para rodar o projeto em produção:

  1. Clone o repositório

  2. No diretório raiz, execute o comando:
     ```
     docker-compose build
     docker-compose up -d
     ```
  3. Agora seus projetos estão em execução, abra o navegador e acesse: http://localhost:4200/

### Technologies:

- Angular 10

### Autor
* **Jackson Veroneze** - *Contribuidor* - [JacksonVeroneze](http://github.com/JacksonVeroneze)


### Licença
Este projeto está licenciado sob a Licença MIT: [LICENSE.md](http://github.com/jacksonveroneze/ViaCepDotnetFrontend/blob/develop/LICENSE).
