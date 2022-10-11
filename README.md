# 🚧 README em construção 🚧

## :hammer_and_wrench: Instalação e execução
Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório
```sh
git clone git@github.com:costalucs/medieval-store-api.git
```

### 2 - Rode os containers executando o comando abaixo na pasta raiz da aplicação
```sh
docker-compose up -d --build
```

### 3 - Execute o script SQL para criar o banco de dados

Conecte ao servidor MySQL rodando na porta 3306 usando um cliente MySQL de sua preferência. Utilize as seguintes credenciais:

* host: `db`
* user: `root`
* password: `password`

Então, no cliente, rode o script que está no arquivo `Trybesmith.sql`.

### 4 - Rode o comando para abrir o terminal do container trybesmith
```sh
docker exec -it trybesmith bash
```

### 5 - No terminal do container, installe as dependências e execute a aplicação

Instalando dependências:
```sh
npm install
```

Executando aplicação:
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
