const fs=require("fs");

const readStream=fs.createReadStream('./Duplex.js','utf8');
readStream.on('data',(chunk)=>{
    console.log('Reading chunk:',chunk)
});

readStream.on('end',()=>{
    console.log('Finished reading the file.');
})
