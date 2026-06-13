const service = require('../services/usuarios.service');

function listar(req, res) {
  res.json(service.listarUsuarios());
}

function criar(req, res) {
  const novo = service.criarUsuario(req.body.nome);
  res.status(201).json(novo);
}

function atualizar(req, res) {
  const id = req.params.id;
  const dadosAtualizados = req.body;
  res.json({ id, ...dadosAtualizados });
}

function deletar(req, res) {
  const id = req.params.id;
  res.json({ mensagem: `Usuário ${id} excluído com sucesso!` });
}

module.exports = {
  listar,
  criar,
  atualizar,
  deletar
};