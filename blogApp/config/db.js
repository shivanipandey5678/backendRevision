const mongoose=require("mongoose");
require('dotenv').config();

const mongoURL=process.env.MONGOURL;


module.exports=async()=>{
   return await mongoose.connect(mongoURL)
};