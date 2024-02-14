const {v4:uuidv4} =require("uuid");

//1. uuid.NIL – Nil UUID (all zeros)
const { NIL } = require('uuid');
console.log(NIL);  // Output: '00000000-0000-0000-0000-000000000000'


//2. uuid.parse() – Convert UUID string to an array of bytes
const {parse}=require('uuid');
const uuidString = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
let byteArray=parse(uuidString);
console.log(byteArray)


