const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');
const figlet = require('figlet')
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if('pokemon' in params){
      if(params['pokemon'] == 'Chimchar'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Chimchar",
          type: "Fire Type",
          number: "#390",
          animal: "Monkey",
          photo: ""
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['pokemon'] == 'Turtwig'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Turtwig",
          type: "Grass Type",
          number: "#387",
          animal: "Turtle"
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['pokemon'] == 'Piplup'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Piplup",
          type: "water Type",
          number: "#393",
          animal: "Penguin"
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  else if (page == '/css/normalize.css'){
    fs.readFile('css/normalize.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!', function(err, data) {
      if (err) {
        console.log('The pokemon seem to have escaped...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
