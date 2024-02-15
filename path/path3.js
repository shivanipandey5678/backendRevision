// const path = require('path');

// const fileName=path.normalize('C:\/////Users\ADMIN\Desktop\assignment\Revision\backendfinalstarting\backendRevision\question3\index.js');
// console.log("hlo",fileName)

const path = require('path');
const normalizedPath = path.normalize('/folder///////////subfolder/../file.txt');
// Outputs: '/folder/file.txt'
console.log(normalizedPath)