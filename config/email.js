const nodemailer = require('nodemailer');

const createTransport = () =>{
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:'465',
        auth:{
            user:'brucecahuanabrandon@gmail.com',
            pass:'hhplrieeyirsoszg'
        }
    });
  return transporter;
}

const sendMail  = async(user)=>{
    const transporter = createTransport();
    const info = await transporter.sendMail({
        from:"Top Tour Peru<toptoursperu@gmail.com>",
        to:user.correo,
        subject:`Consulta de usuario${user.nombre}`,
        html:`<div style='background:"red";width:"100%";height:"300px"'>
            <h3>Top Tour Peru</h3>
        <div>
        <div>
            <h4>usuario:${user.nombre}</h4>
            <h4>consulta:${user.consulta}</h4>
        <div>`
    })
    return
}
  
exports.sendMail = (user) =>sendMail(user);
