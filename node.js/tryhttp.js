const http = require('http');
const server = http.createServer((req, resp) => {
  if (req.url === '/') {
    resp.end('default web page');
  } else if (req.url === '/about') {
    resp.end('about web page');
  } else if (req.url === '/favicon.ico') {
    resp.writeHead(404);
    resp.end();
  } else {
    resp.setHeader('Content-Type', 'text/html');
    resp.end(`error
      <a href="/">Back home</a>`);
  }
});

server.listen(9999);
