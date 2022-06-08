var { autores } = require("./models");
var { livros } = require("./models");
var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

//Routes - autores

app.get("/autores", async function(req, res) {
  var mostrar = await autor.findAll();
  res.json(mostrar);
});

app.get("/autores/:id", async function(req, res) {
  const id = await autor.findByPk(req.params.id);
  res.json(id)
});

app.post("/autores", async function(req, res) {
  var mostrar = await autor.create(req.body);
  res.json(mostrar);
});

app.put("/autores/:id", async function(req, res) {
  var resultado = autor.update(req.body, { where: { id: req.params.id } });
  res.json(resultado);
});

app.delete("/autores", async function(req, res) {
  autor.destroy({ where: { id: 1 } });
});

app.listen(3000, function() {
  console.log("Servidor esta funcionando");
});
