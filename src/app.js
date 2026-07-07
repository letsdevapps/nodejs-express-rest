const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// rotas
const usuariosRoutes = require('./routes/usuarios.routes');
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
  res.send('----- NodeJS Express Rest | Index -----');
});

module.exports = app;