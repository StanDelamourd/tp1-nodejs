 const http = require('http');

 const server = http.createServer((req,res) => {
     res.statusCode = 400;
     res.end('Hello world!');
 });
 server.listen(3100, () => console.log('Le serveur tourne sur http://localhost:3100'));