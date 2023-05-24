var http=require('http')
var fs = require('fs')
http.createServer(function(req,resp){
    const filestream = fs.createReadStream('./content/big.txt','utf-8');
    filestream.on('open',()=>{
        filestream.pipe(resp);
    })
    

filestream.on('error',(err)=>{
    resp.end(err);
})
})
.listen(9999)