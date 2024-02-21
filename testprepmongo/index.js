
const ConnectingURL=require("./fb.js");
const mongoose=require("mongoose");

const express=require("express")
const app=express();

app.get("/",(req,res)=>{
  res.send("hi")
})

const UserSchema=new mongoose.Schema({
    name:String,
    age:Number,
});

const UserModel=mongoose.model("user",UserSchema);

const newUser=UserModel({
    name:"shivay",
    age:10,
})
newUser.save();
app.listen(8014,async ()=>{
    await ConnectingURL();
    console.log("at 8012")
})



UserModel.updateOne({name:"Dansish"},{$set:{age:110}}).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err,"issue in updating data from DB")
})

async function deletedata(){
    UserModel.deleteOne({name:"shivay"});
    console.log("delted")
}

async function filterand(){
    UserModel.find({$and:[{name:"Dansish"} ,{age:{$gt:90}}]})
    .then((res)=>{console.log(res)})
    
}
UserModel.find().sort({name:1}).then(res=>{
    console.log("find")
}).catch(err=>{
    console.log(err,"issue in getting data from DB")
})
deletedata()
filterand()