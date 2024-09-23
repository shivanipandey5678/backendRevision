const fs =require('fs');

const WriteStream=fs.createWriteStream('output.txt');

WriteStream.write('Hello, world!\n');
WriteStream.write('Writing to a file using writable streams.\n');


WriteStream.end();
