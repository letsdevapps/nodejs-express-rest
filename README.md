Para criar uma API simples usando **Node.js** com **Express**. A API vai ter alguns endpoints para demonstrar o funcionamento.

### Passos para criar a API com Node.js e Express:

#### 1. **Inicialize o projeto:**

Abra o terminal e crie uma nova pasta para o projeto. Em seguida, inicialize o npm para criar o arquivo `package.json`.

	```bash
	mkdir meu-api
	cd meu-api
	npm init -y
	```

#### 2. **Instale o Express:**

No mesmo diretório, instale o **Express** como dependência:

	```bash
	npm install express
	```

#### 3. **Crie o arquivo do servidor (server.js):**

Crie um arquivo chamado `server.js` na raiz do projeto.

	```javascript
	const express = require('express');
	const app = express();
	const port = 3000;

	// Middleware para lidar com o formato JSON
	app.use(express.json());

	// Rota GET simples
	app.get('/', (req, res) => {
	  res.send('Olá, mundo!');
	});

	// Rota GET para retornar uma lista de usuários
	app.get('/usuarios', (req, res) => {
	  const usuarios = [
	    { id: 1, nome: 'João' },
	    { id: 2, nome: 'Maria' },
	    { id: 3, nome: 'Pedro' }
	  ];
	  res.json(usuarios);
	});

	// Rota POST para criar um novo usuário
	app.post('/usuarios', (req, res) => {
	  const novoUsuario = req.body;  // Dados do usuário enviados no corpo da requisição
	  novoUsuario.id = Math.floor(Math.random() * 1000);  // Gerar um ID aleatório
	  res.status(201).json(novoUsuario);  // Retornar o novo usuário
	});

	// Rota PUT para atualizar um usuário existente
	app.put('/usuarios/:id', (req, res) => {
	  const id = req.params.id;
	  const dadosAtualizados = req.body;
	  // Em um banco de dados real, você faria a atualização aqui
	  res.json({ id, ...dadosAtualizados });
	});

	// Rota DELETE para excluir um usuário
	app.delete('/usuarios/:id', (req, res) => {
	  const id = req.params.id;
	  // Em um banco de dados real, você excluiria o usuário aqui
	  res.json({ mensagem: `Usuário ${id} excluído com sucesso!` });
	});

	// Inicia o servidor
	app.listen(port, () => {
	  console.log(`Servidor rodando na porta ${port}`);
	});
	```

#### 4. **Rodando o servidor:**

Agora, você pode rodar o servidor com o comando abaixo:

	```bash
	node server.js
	```

O servidor estará rodando na porta `3000`. A partir de agora, você pode acessar as rotas da API no seu navegador ou usar uma ferramenta como o **Postman** para testar as requisições.

### Testando as rotas

1. **GET `/`**:
   Acesse no navegador ou no Postman:

	   ```
	   http://localhost:3000/
	   ```

   Você deve ver:

	   ```
	   Olá, mundo!
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

### Resumo:

Esse exemplo cria um servidor simples usando **Node.js** e **Express** com as principais operações de uma API RESTful: **GET**, **POST**, **PUT** e **DELETE**. Você pode expandir isso para interagir com um banco de dados (como MongoDB, PostgreSQL, etc.), adicionar autenticação, validações e muito mais.

Se você quiser adicionar um banco de dados ou precisar de mais detalhes sobre algum ponto, só avisar!

