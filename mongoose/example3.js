const mongoose=require("mongoose")
const userSchema= new mongoose.Schema({
    name:{
      type:String,
      required:true,
    },
    age:{
        type:Number,
        min:0,
        max:120,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    role:{
        type:String,
        enum:["dev","painter"],
    },
    email:{
        type:String,
        match: /.+\@.+\..+/ ,
        required:true,
    }

    
})

const User=mongoose.model("User",userSchema);
const newUser=new User({
    name:"shivani",
    email:"shivani2@gmail.com",
    role:"dev",
    age:12,

});
newUser.save().then(()=>{console.log("saved")}) .catch((err) => console.log("Validation error:", err.message));



