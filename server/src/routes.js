const routes = require("express").Router();
const ControllersIdea = require("./controllers/ControllersIdea");
const multer = require("multer");
const multerConfig = require('./config/multer');

const controllerIdea = new ControllersIdea();

routes.get('/ideias', controllerIdea.index);
routes.get('/', (req, res) => {
    
    res.send('kk');
})
routes.post('/create-ideia', multer(multerConfig).single("file"), controllerIdea.create);

module.exports = routes;
