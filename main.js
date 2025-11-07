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

