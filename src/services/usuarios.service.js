const usuarios = require('../data/usuarios.data');

function listarUsuarios() {
  return usuarios;
}

function criarUsuario(nome) {
  const novo = {
    id: Math.floor(Math.random() * 1000),
    nome
  };
  usuarios.push(novo);
  return novo;
}

module.exports = {
  listarUsuarios,
  criarUsuario
};