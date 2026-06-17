# NodeJS Express Rest

![GitHub release](https://img.shields.io/github/v/release/letsdevapps/nodejs-express-rest)
![GitHub last commit](https://img.shields.io/github/last-commit/letsdevapps/nodejs-express-rest)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/letsdevapps/nodejs-express-rest/build-ci.yml)


![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-API-blue)
![Docker](https://img.shields.io/badge/Docker-enabled-blue)
![Status](https://img.shields.io/badge/status-active-success)

## Criar a API com Node.js e Express:

### 1. **Inicialize o projeto:**

Abra o terminal e crie uma nova pasta para o projeto. Em seguida, inicialize o npm para criar o arquivo `package.json`.

	mkdir nodejs-express-rest
	cd nodejs-express-restv
	npm init -y

### 2. **Instale o Express:**

No mesmo diretório, instale o **Express** como dependência:

	npm install express

### 3. **Criar app **

Criar server.js na raiz do projeto

Criar app.js

Criar routes

Criar controllers

### 4. **Rodando o servidor:**

Agora, você pode rodar o servidor com o comando abaixo:

	node src/server.js

O servidor estará rodando na porta `3000`. A partir de agora, você pode acessar as rotas da API no seu navegador ou usar uma ferramenta como o **Postman** para testar as requisições.

### Testando as rotas

1. **GET `/`**:
   Acesse no navegador ou no Postman:

	   ```
	   http://localhost:3000/
	   ```

2. **GET `/usuarios`**:
   Acesse:

	   ```
	   http://localhost:3000/usuarios
	   ```

   Você deve receber a resposta JSON:

	   ```json
	   [
	     { "id": 1, "nome": "João" },
	     { "id": 2, "nome": "Maria" },
	     { "id": 3, "nome": "Pedro" }
	   ]
	   ```

3. **POST `/usuarios`**:
   Para criar um novo usuário, envie uma requisição **POST** com o corpo no formato JSON:

	   ```json
	   {
	     "nome": "Ana"
	   }
	   ```

   O corpo da resposta será:

	   ```json
	   {
	     "nome": "Ana",
	     "id": 123 // ID aleatório gerado
	   }
	   ```

4. **PUT `/usuarios/:id`**:
   Para atualizar um usuário, envie uma requisição **PUT** com o corpo da requisição:

	   ```json
	   {
	     "nome": "Joana"
	   }
	   ```

   A resposta será:

	   ```json
	   {
	     "id": 2,
	     "nome": "Joana"
	   }
	   ```

5. **DELETE `/usuarios/:id`**:
   Para excluir um usuário, envie uma requisição **DELETE** para o endpoint com o ID do usuário:

	   ```
	   DELETE http://localhost:3000/usuarios/2
	   ```

   A resposta será:

	   ```json
	   {
	     "mensagem": "Usuário 2 excluído com sucesso!"
	   }
	   ```

## Clone Reinstall 

Clone o repositorio nodejs-express-rest e inicialize as dependencias

	npm install
	
	npm audit fix

## Start

Vamos adicionar comandos rapidos de inicialização

	"scripts": {
	  "start": "node src/server.js",
	  "dev": "nodemon src/server.js"
	}

Rode com

	npm run start
	
ou

	npm run dev
	
(Opcional) modo dev automático. Pra não precisar reiniciar toda hora:

	npm install --save-dev nodemon

## Variaveis de ambiente

	npm install dotenv

Criar arquivo .env (este não irá para git remote por conter infos sensiveis)

	touch .env

Incluir 

	PORT=3000

Criar tambem arquivo .env.example (esta até pode ir para git remote sem preenchimento das infos sensiveis para referencia do time)

**Infos vazias**

	PORT=
	DB_PASSWORD=
	
**Evite Infos importates**

	PORT=3000
	DB_PASSWORD=123456
	JWT_SECRET=segredo_super_importante
	API_KEY=abc123

## Docker

    docker build -t nodejs-express-rest .
    
    docker run --rm -it -p 3000:3000 nodejs-express-rest

## Kubernetes (Minikube)

## Como rodar

### 1. Subir o cluster
    
    minikube start

### 2. Habilitar Ingress

    minikube addons enable ingress

### 3. Build da imagem

    docker build -t nodejs-express-rest:latest .

### 4. (ou) carregar no minikube

    minikube image load nodejs-express-rest:latest

### 5. Aplicar manifests

    kubectl apply -f k8s/

### 6. Acessar

    minikube ip

    http://<minikube-ip>/nodejs

## Debug

    kubectl get pods
    kubectl get svc
    kubectl get ingress
    kubectl get endpoints
