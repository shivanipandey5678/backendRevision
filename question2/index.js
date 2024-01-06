const {v4:uuidv4} =require("uuid");


const { NIL } = require('uuid');

console.log(NIL);  // Output: '00000000-0000-0000-0000-000000000000'

const { parse } = require('uuid');

const uuidString = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
const byteArray = parse(uuidString);

console.log(byteArray);  // Output: [244, 122, 193, 11, 88, 204, 67, 114, 165, 103, 14, 2, 178, 195, 212, 121]
