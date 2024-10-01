const express=require("express");
const router=express.Router();
require('dotenv').config();

const bcrypt=require("bcrypt");
const User=require("../schema/userSchema");
const jwt=require("jsonwebtoken");
const authMiddleware=require("../middlewares/auth");
const checkaccessMiddleware=require("../middlewares/check.access");
const roles=require("../constants/roles");
router.post("/register",async(req,res)=>{
    try {
        const {username,password,role}=req.body;
        let user=await User.findOne({username});
        if(user){
           return  res.status(400).send("Username already exist");
        }
        const hashPassword=await bcrypt.hash(password,10);
        const newUser=new User({username,password:hashPassword,role});
        const savedUser= await newUser.save();
        return res.status(201).json({message:'Resistered successfully',savedUser});

    } catch (error) {
        return res.status(400).send({messag:error})
    }
})

router.post("/login",async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username});
        if(!user){
           return  res.status(404).send("user not found");
        }
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword){
            return res.status(400).send("Wrong password")
        }
        const token = jwt.sign({_id: user._id, role: user.role}, process.env.SECRET_KEY, {expiresIn: "1h"});

        // const token= jwt.sign({_id:user._id,role:user.role},process.env.SECRET_KEY,{expiresIn:"1h"});
        res.json({token,message:"logged in successfully"});
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.get("/users",authMiddleware,checkaccessMiddleware(roles.ADMIN),async(req,res)=>{
    try {
        const users=await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error)
    }
 

})
module.exports= router;
