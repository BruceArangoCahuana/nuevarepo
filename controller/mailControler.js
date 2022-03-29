const email = require('../config/email');
const Mail = require('../models/Mail');

exports.mail = async(req,res,next)=>{
    const mail = new Mail(req.body);
    try {
        await mail.save()
        email.sendMail(mail);
        res.json({mensaje :"se agrego"});
    } catch (error) {
        console.log(error);
        res.send(error);
        return next()
    }
   
    await Mail.deleteOne({_id: mail._id})
}