const http = require('http')


const server = http.createServer((req,resp)=>{
    console.log('request event');
    resp.end('end');
})
server.listen(9999,()=>
{
    console.log('server started');
});
