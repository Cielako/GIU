const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) { // function to handle request
    switch(req.url){
      case "/":
      case "/index.html":
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("./index.html", "utf-8", function (err, data){
          if (err) throw err;
          res.write(data);
          return res.end();
        });
        break;
      case "/str1.html":
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("./str1.html", "utf-8", function (err, data){
          if (err) throw err;
          res.write(data);
          return res.end();
        });
        break;
      case "/str2.html":
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("./str2.html", "utf-8", function (err, data){
          if (err) throw err;
          res.write(data);
          return res.end();
        });
        break;
      case "/str3.html":
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("./str3.html", "utf-8", function (err, data){
          if (err) throw err;
          res.write(data);
          return res.end();
        });
        break;
      case "/doc.pdf":
        res.writeHead(200, {'Content-Type': 'application/pdf'});
        res.write(fs.readFileSync("./doc.pdf"));
        res.end();
        break;  
      case "/img.jpg":
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(fs.readFileSync("./img.jpg"));
        res.end();
        break;  
      default:
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("Przepraszamy, nie mamy takiej strony");
        break;
  }
}).listen(8080);
