// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

// const { readFileSync, writeFileSync, appendFileSync } = require('fs');
// const readOp = readFileSync('./test.txt', 'utf-8');
// // console.log(fs);

// writeFileSync('test.txt', 'wassup');
// appendFileSync('test.txt', ' ??');
// writeFileSync('test.txt', 'just now', { flag: 'a' });
// // appendFileSync('test.txt', ' ??');
// unLinkSync('test.txt');
// console.log(readOp);

// const sumMod = require('./mymod');
// const sumIS = sumMod(1, 4, 6);
// console.log(sumIS);


// const{readFile , writeFile}=require('fs');
// const readOp=readFile('./xyz.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// });
// console.log(readOp);
// console.log('Hello');


// const url =require('url');
// const parseUrl =url.parse('https://nodejs.org/dist/latest-v16.x/docs/api/os.html',true);
// console.log(parseUrl);

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.write('welcome');
//     res.end();
// });
// server.listen(4000);
// console.log(http);

const http=require('http');
const url=require('url');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    const path =req.url;
    if(path=="/about"){
        res.writeHead(200,{
            'content-type':'text/html'
        })
        const filedata = fs.readFileSync("./index.html");
        res.write(filedata);
        res.end();
    }
    console.log(path);
});

server.listen(4000);