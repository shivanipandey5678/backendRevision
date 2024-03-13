const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/structureLearning";

async function Connection(){
    await mongoose.connect(url)
    .then((res)=>{
        console.log("connected")
    }).catch(err=>{
        console.log(err,"Error in connection to DB")
    })

}

mosule.exports=Connection;