const userSchema=new mongoose.Schemaa({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:0,
        max:120,
    },
    role:{
        type:String,
        enum:["user","admin"],
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
});