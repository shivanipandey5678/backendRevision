const {stringify} =require('uuid');

let byteArray=[244, 122, 193, 11, 88, 204, 67, 114, 165, 103, 14, 2, 178, 195, 212, 121];

let newans=stringify(byteArray);
console.log(newans)