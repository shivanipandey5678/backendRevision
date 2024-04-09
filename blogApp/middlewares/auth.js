const jwt=require("jsonwebtoken");
require('dotenv').config();
const userModel=require("../schema/userSchema")
const auth=async(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).send("Access denied.No token provided")
    }
    try{
       const decode=jwt.verify(token,process.env.SECRET_KEY);
       req.user=await userModel.findById(decode._id);
       next()
    }catch(err){
       res.status(400).send("Invalide token")
    }
}
module.exports=auth;