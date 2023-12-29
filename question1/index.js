
let fs=require("fs");
let args = process.argv;
let operation=args[2];
let file1=args[3];
let file2=args[4];
// console.log(operation);
let str="sonu\n";


switch(operation){
    case "read":{
       let readContent=fs.readFileSync(file1,"utf-8");
       console.log(readContent)
    }
    case "delete":{
        fs.unlink(file1,(err)=>{
            console.log(`Error:${err}`)
        })
        console.log("file deleted")
    }
    case "append":{

        fs.appendFileSync(file1 ,str);
        console.log("appended")
    }
    case "rename":{
        fs.renameSync('new.js','next.js');
        console.log("rename successfully")
    }
    case 'create':{
        fs.writeFileSync(file1,str);
        console.log("writting complete")
    }
    case 'list':{
        let filesname=fs.readdirSync('../question2');

        console.log(filesname)
    }
  
}