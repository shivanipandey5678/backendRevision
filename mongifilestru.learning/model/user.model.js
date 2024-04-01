const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/]
    },age:{
        type:Number,
        min:[5,"number below than 5"]
    },
    gender:{
        type:String,
        enum:["male","Male","female","Female"],
    }

})