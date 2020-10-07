import express from 'express';

import ControllersIdea from './controllers/ControllersIdea';

const controllerIdea = new ControllersIdea();


const routes = express.Router();

routes.get('/ideias', controllerIdea.index);
routes.get('/', (req, res) => {
    res.send('kk');
})
routes.post('/create-ideia', controllerIdea.create);

export default routes;
