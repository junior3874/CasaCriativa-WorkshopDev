import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Corpo (Request Body): Dados para a criação, ou atualização de um registro.
// Route Params: Identificar qual recurso eu quero atualizar, ou deletar.
// Query Paramns: Paginação, filtros, ordenação.

app.listen(3333);