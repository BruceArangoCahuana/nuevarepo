const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors')
//habilitar env
require('dotenv').config({path:'variable.env'});
//conexion base de datos
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATA_BASE,{
    useNewUrlParser:true
})
//validamos errores de conexion
mongoose.connection.on('error',(err)=>{
    console.log(err)
})


const app = express();
//habilitando bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
//agarra desde la router
app.use('/',router());

const host = '0.0.0.0';
const port = process.env.PORT;
app.listen(port,host,()=>{
    console.log("el server esta listo entrar: http://localhost:5000/")
})