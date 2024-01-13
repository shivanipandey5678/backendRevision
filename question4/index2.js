//pipe()

// Connects a readable stream to a writable stream. Data from the readable stream will be written to the writable stream.

// const {Readable,Writable}=require("stream");

// const readableStream=Readable.from("../question2");
// const writableStream= new Writable({
    
// })

const {Readable,Writable} = require('stream');
const readableStream=Readable.from(['hello','world']);
const writableStream=new Writable({
    write(chunk,encoding,callback){
        console.log(`Received chunk: ${chunk}`)
        callback();
    }
})
readableStream.pipe(writableStream);
