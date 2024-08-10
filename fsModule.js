const fs = require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })

// const a=fs.readFileSync('file.txt')
// console.log(a.toString());

// fs.writeFile('file2.txt','this is data',()=>{
//     console.log("written");
// })
b=fs.writeFileSync('file2.txt','this is data new')
console.log(b);
console.log("finished");