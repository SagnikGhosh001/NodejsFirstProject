const http = require('http');

const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader=('content-type','text/html');
    res.end('<h1> hello sagnik here</h1>');
})

server.listen(port,()=>{
    console.log(`server is listening on post ${port}`);
})