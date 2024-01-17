//Readable streams are used to read data. 
//1 Checks if the stream is currently paused.

// const {Readable}=require("stream");
// const readableStream=Readable.from("../question2");


// console.log(readableStream.isPaused()); 



//Pauses the stream, meaning no more data will be read.
const {Readable}=require("stream");
const readableStream=Readable.from("../question2");

readableStream.pause();

console.log(readableStream.isPaused()); 




