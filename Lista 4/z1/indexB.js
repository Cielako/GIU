const http = require("http");
const fs = require("fs");
const path = require('path');

http.createServer(function (req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./index.html", "utf-8", function (err, data) {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
      break;
  }

  let filename_path = "./" + path.win32.basename(req.url);
  if (fs.existsSync(filename_path)) {
    if (filename_path.includes(".html")) {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile(filename_path, "utf-8", function (err, data) {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
    }

    else if (filename_path.includes(".pdf")) {
      res.writeHead(200, { 'Content-Type': 'application/pdf' });
      res.write(fs.readFileSync(filename_path));
      res.end();
    }

    else if (filename_path.includes(".jpg")) {
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
      res.write(fs.readFileSync(filename_path));
      res.end();
    }
  }
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("strona nie istnieje :(");
  }
}).listen(8080);