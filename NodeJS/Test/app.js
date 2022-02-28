// const os=require('os');
// const version=os.version();
// const totalmem=os.totalmem();
// console.log(version);
// console.log(totalmem);

// const path=require('path');
// const filepath=path.join('./content','/subfolder','file.text');
// console.log(filepath);

const http=require('http');
const url=require('url');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    const path =req.url;
    if(path=="/"){
        res.writeHead(200,{
            'content-type':'text/html'
        })
        const filedata = fs.readFileSync("./index.html");
        res.write(filedata);
        res.end();
    }
    else if(path=="/about"){
        res.writeHead(200,{
            'content-type':'text/html'
        })
        const abCont = fs.readFileSync("./about.html");
        res.write(abCont);
        res.end();

    }
    console.log(path);
});

server.listen(4000);