//4. uuid.v1() – Create a version 1 (timestamp-based) UUID

const {v1:uuidv1}=require("uuid");

let newid=uuidv1();
console.log(newid)


const {v3:uuidv3} =requir("uuid");

const namespace='6ba7b810-9dad-11d1-80b4-00c04fd430c8'; 
const name = 'good morning'; 

const uuidans = uuidv3(name, namespace);

console.log(uuidans); 