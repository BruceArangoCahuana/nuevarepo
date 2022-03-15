const express = require('express');
const router = express.Router();

const lugaresController = require("../controller/lugaresController");

module.exports = function(){
    router.get("/",lugaresController.lugares);
    
    //ruta de creacion de  lugares turisticos
    router.post("/lugares",lugaresController.registrarLugares);
    router.get("/lugares",lugaresController.listarLugares);
    router.get("/lugares/:idLugares",lugaresController.listarPorId)
    return router
}