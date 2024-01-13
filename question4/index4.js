//unpipe


const {Readable,Writable}=require('stream');

const ReadStream=Readable.from(["happy","birthday"]);
const Writable=new Writable({
    write(chunk, encoding, callback) {
        console.log(`Received chunk: ${chunk}`);
        callback();
      }
})
readableStream.unpipe(writableStream);