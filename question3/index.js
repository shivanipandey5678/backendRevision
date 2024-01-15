let args=process.argv;
let operation=args[2];
const os=require("os");
const crypto=require("crypto");
const uuid=require("uuid");


function OS(){
    
    console.log(` free system memory in bytes :${os.freemem()}`)
    console.log(` string path of the current user's home directory:${os.homedir()}`);
    console.log(` host name of the operating system:${os.hostname()}`);
    console.log(` the machine type :${os.machine()}`)
    console.log(`an object containing network interfaces that have been assigned a network address.${os.networkInterfaces()}`)
}

function Crypto(){
   const  vi = crypto.randomBytes(16);
   const  key = crypto.randomBytes(32);
   const  algo="aes-256-cbc";
   const cipher=crypto.createCipheriv(algo,key,vi);
   
   let encrypted=cipher.update("Good morning","utf8",'hex');
   encrypted+= cipher.final('hex');

   console.log('Encrypted:', encrypted);

     
}

function UUID(){
    let newuuid=uuid()
    console.log(newuuid);
}




