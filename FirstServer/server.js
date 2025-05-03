import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res)=>{
    if(req){
        console.log('Req received')
    }

    if(req.url ==='/getSecretData'){
        res.end('There is no secret data');
    }

    res.end('Welcome to my server');
})

server.listen(7777);

//async file reading operation
fs.readFile('./ReadFile.txt','utf-8', (err,data)=>{
    if(err){
        console.error('Error while reading the file', err);
    }else{
        console.log('the data from the async read is', data);
    }
})

//reading file synchronously
