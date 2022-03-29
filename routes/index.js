const express = require('express');
const router = express.Router();

const lugaresController = require("../controller/lugaresController");
const mailController = require("../controller/mailControler");

module.exports = function(){
    router.get("/",lugaresController.lugares);
    
    //ruta de creacion de  lugares turisticos
    router.post("/lugares",lugaresController.registrarLugares);
    router.get("/lugares",lugaresController.listarLugares);
    router.get("/lugares/:idLugares",lugaresController.listarPorId)
    //traer popr categoria
    router.get("/lugares/busqueda/:categoria",lugaresController.listarPorCategoria);
    router.post("/mail",mailController.mail);
    return router
}