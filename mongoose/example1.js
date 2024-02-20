const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
})

const SchemaModel=mongoose.model("User",userSchema);

const user=new SchemaModel({name:"shivani",age:12});
user.save().then(()=>{console.log("User Saved")});



