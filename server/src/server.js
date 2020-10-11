const express = require("express")
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(require("./routes"));


// Corpo (Request Body): Dados para a criação, ou atualização de um registro.
// Route Params: Identificar qual recurso eu quero atualizar, ou deletar.
// Query Paramns: Paginação, filtros, ordenação.

app.listen(3333);