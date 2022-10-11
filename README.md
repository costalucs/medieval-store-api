# 🚧 README em construção 🚧
## :hammer_and_wrench: Installation and execution/Instalação e execução

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />

To run this application you need to have **Git**, **Docker** and **Docker Compose** installed on your machine. Docker Compose needs to be at **1.29** version or superior.

### 1 - Clone the repository
```sh
git clone git@github.com:raphaelalmeidamartins/trybesmith.git
```

### 2 - Run the containers by running the command below in the application folder
```sh
docker-compose up -d --buid
```

### 3 - Run the SQL Script to create the database

Connect to the MySQL server running on the 3306 port using a MySQL client of your choice. With the following credentials:

* host: `db`
* user: `root`
* password: `password`

Then, in the client, run the script in the `Trybesmith.sql` file.

### 4 - Run this command to attach the container to your terminal
```sh
docker exec -it trybesmith bash
```

### 5 - On the attached container, install the dependencies and run the application

Install the dependencies:
```sh
npm install
```

Run the application:
```sh
npm start
```

# :hammer: Funcionalidades do projeto

1 - `Endpoint para o cadastro de produtos`: 
- O endpoint está acessível através do caminho (`/products`) com o método POST;
- Os produtos enviados devem são salvos na tabela `Products` do banco de dados;
- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```
2 - `Endpoint para a listagem de produtos`: 
- O endpoint deve ser acessível através do caminho (`/products`) com o método GET;
- O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    ```json
    [
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
        "orderId": null
      },
      {
        "id": 2,
        "name": "Escudo do Herói",
        "amount": "100 diamond",
        "orderId": 1
      }
    ]
    ```
3 - `Endpoint para o cadastro de pessoas usuárias`: 
- O endpoint está acessível através do caminho (`/users`) com o método POST;
- O endpoint deve receber a seguinte estrutura:
```json
{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```
4 - `Endpoint para listar todos os pedidos`: 
- O endpoint está acessível através do caminho (`/orders`) com o método GET.
- `Funcionalidade 5`: descrição da funcionalidade 5
- `Funcionalidade 6`: descrição da funcionalidade 6
- 

<!-- Olá, Tryber!

Esse é apenas um arquivo inicial para o README do seu projeto.

É essencial que você preencha esse documento por conta própria, ok?

Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!

⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

-->
