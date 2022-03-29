const Lugares = require('../models/Lugares');


exports.lugares = (req,res,next)=>{
    res.send("tamos listos")
}

///insertar lugares turisticos
 exports.registrarLugares = async(req,res,next)=>{
     const lugares = new Lugares(req.body);
     try {
         await lugares.save()
         res.json({mensaje:"Se registro con exito"})
     } catch (error) {
         res.send(error);
         console.log(error);
         return next()
     }
 }

///traer lugares
exports.listarLugares = async(req,res,next) =>{
    try {
        const lugares = await Lugares.find({});
        res.json(lugares)
    } catch (error) {
        res.send(error);
        console.log(error);
        return next()
    }
}
///traer por id
exports.listarPorId = async(req,res,next)=>{
    const lugares = await Lugares.findById(req.params.idLugares);
    if(!lugares){
        res.json({mensaje:"No existe tour"});
        return next();
    }
    res.json(lugares)
}
//traer por categoria
exports.listarPorCategoria = async(req,res,next)=>{
    try {
        const lugaresPorcategoria = await Lugares.find({categoria:req.params.categoria});
        res.json(lugaresPorcategoria)
    } catch (error) {
        res.send(error);
        console.log(error);
        return next()
    }
}
