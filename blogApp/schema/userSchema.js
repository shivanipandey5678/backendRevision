const mongoose=require("mongoose");
const ROLES=require("../constants/roles")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        enum:[ROLES.ADMIN,ROLES.AUTHOR,ROLES.READER],
        required: true,
        default:ROLES.READER,

    }


},
{versionKey:false}
);

const User=mongoose.model("user",userSchema);
module.exports=User;