var http = require("http");
var fs = require("fs");



http.createServer(function(request, response){
  switch(request.url){
        case "/":
          response.writeHead(200, {'Content-Type': 'text/html'});
          fs.readFile("./index.html", 'utf-8', function(err, data){
            if(err) throw err;
            response.write(data);
            return response.end();
          });
          break;
        case "/index.html":
          response.writeHead(200, {'Content-Type': 'text/html'});
          fs.readFile("./index.html", 'utf-8', function(err, data){
            if(err) throw err;
            response.write(data);
            return response.end();
          });
          break;
        case "/strona1.html":
          response.writeHead(200, {'Content-Type': 'text/html'});
          fs.readFile("./strona1.html", 'utf-8', function(err, data){
            if(err) throw err;
            response.write(data);
            return response.end();
          });
          break;
        case "/strona2.html":
          response.writeHead(200, {'Content-Type': 'text/html'});
          fs.readFile("./strona2.html", 'utf-8', function(err, data){
            if(err) throw err;
            response.write(data);
            return response.end();
          });
          break;
        case "/strona3.html":
          response.writeHead(200, {'Content-Type': 'text/html'});
          fs.readFile("./strona3.html", 'utf-8', function(err, data){
            if(err) throw err;
            response.write(data);
            return response.end();
          });
          break;
        case "/doc.pdf":
          response.writeHead(200, {'Content-Type': 'application/pdf'});
          response.write(fs.readFileSync("doc.pdf"));
          response.end();
          break;  
        case "/zdj.png":
          response.writeHead(200, {'Content-Type': 'image/png'});
          response.write(fs.readFileSync("zdj.png"));
          response.end();
          break;  
        default:
          response.writeHead(404, {"Content-Type": "text/html"});
          response.end('404 Error');
          break;
      }
}).listen(8080);
        