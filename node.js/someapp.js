const http = require('http');

http.createServer((req, resp) => {
  resp.writeHead(200, {'Content-type': 'text/html'});
  resp.write('<h3>hii</h3');
  resp.end();
}).listen(6969);