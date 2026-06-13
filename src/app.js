const express = require('express');
const app = express();

app.use(express.json());

// rotas
const usuariosRoutes = require('./routes/usuarios.routes');
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
  res.send('----- NodeJS Express Rest | Index -----');
});

module.exports = app;