const jwt=require("jsonwebtoken");
const config=require('../config');


module.exports=async function authenticate(req,res,next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token,config.signature,(err,decoded)=>{
            if(err){
                res.status(401).json({
                    message:"user not authorized",
                    success:false
                })
            }
        })
    }
}
