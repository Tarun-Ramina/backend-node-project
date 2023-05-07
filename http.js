const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{

    if(req.url=='/')(
        fs.readFile('index.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
    )

    else if(req.url=='/about')(
        fs.readFile('about.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
    )

    else if(req.url=='/gallery')(
        fs.readFile('gallery.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
    )

    else{
        fs.readFile('404.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
           
        }


}).listen(7777,(err)=>{
    console.log('start');
})