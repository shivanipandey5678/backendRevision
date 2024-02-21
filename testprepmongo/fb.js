const mongoose=require("mongoose");

const url="mongodb://127.0.0.1:27017/prep";

async function Connection(){
    try {
       await mongoose.connect(url);
       console.log("Connected");
    } catch (error) {
        console.log("Error")
    }
}
module.exports=Connection;


