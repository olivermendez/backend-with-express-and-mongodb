const bodyParser = require("body-parser");
const express = require("express");
//arquitectura: https://static.platzi.com/media/user_upload/Rutas%20Controladores%20y%20Base%20de%20Datos-d3688e37-44a4-47fb-984f-d0d82d6be50e.jpg
const response = require("./network/response");

//Este router me permitira separar las peticiones get, post..etc
const router = express.Router();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get("/", function (req, res) {
  //cabeceras
  //console.log(req.headers);
  //body
  //console.log(req.body);
  //query
  //console.log(req.query);

  response.sucess(req, res, "lista de mensajes para el get");
});

router.post("/", function (req, res) {
  res.send("Hola desde post");
});

router.post("/error", function (req, res) {
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(req, res, "Error inesperado", 500, "simulacion de errores");
  } else {
    response.sucess(req, res, "creado correctamente", 201);
  }
});

router.delete("/delete", function (req, res) {
  res.status(201).send({ error: "", body: "creado correctamente" });
});

app.use("/app", express.static("public"));

app.listen(3000);
console.log("listening");
