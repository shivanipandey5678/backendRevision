//read()

const { Readable } = require("stream");

let readStream = Readable.from("../question3");
console.log(readStream.read().toString());
