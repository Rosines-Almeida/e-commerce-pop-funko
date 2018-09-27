const express = require('express'); //arquivo do servido
const path = require('path'); //arquivo do servidor 
const port = process.env.PORT || 8080;
const app = express();

app.use("/dist", express.static(__dirname + '/dist'));//colocar arquivios estatiticos js css 

app.get('*', function (request, response) {//esta direcionando para pagaina index html quando digitar qq coisa
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);