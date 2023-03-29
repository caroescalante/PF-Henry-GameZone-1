const express = require ("express");
const morgan = require ("morgan");
const cookieParser = require ("cookie-parser");
const routes = require ("./routes/index");  // requiero lo que será la raiz de ruta en mi app
const dotenv = require ("dotenv")
const server = express();     //creo instancia de mi servidor express

server.name = 'API';     //la propiedad "name" del servidor será API

dotenv.config();

server.use(express.urlencoded({ extended: false, limit: '50mb' }));//middlweare solicitudes url
server.use(express.json());//lo mismo de arriba pero "notación de objeto de JavaScript" json
server.use(cookieParser());//middleware para analizar cookies de solicitudes entrantes 
server.use(morgan('dev'));//mostrar las solicitudes entrantes en la consola. ( get 200 ok. ejemp)

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');//permitir acceso cors
    next();
});

server.use('/', routes);    // se agregan las rutas definidas en el index a la instancia del sv.

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

module.exports = server;