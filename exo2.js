const http = require('http');

var data = {
    "message": "Hello world",
    "status": 200,
};
var monJson = JSON.stringify(data);

 const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'application/json');
     res.end(monJson);
 });
 server.listen(3100, () => console.log('Le serveur tourne sur http://localhost:3100'));