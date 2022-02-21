const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer(function (request, response) {
    let filePath = "." + request.url;
    if (filePath == "./") {
      filePath = "./index.html";
    }

    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
      ".html": "text/html",
      ".css": "text/css",
    };

    let contentType = mimeTypes[extname];

    fs.readFile(filePath, function (request, content) {
      response.writeHead(200, { "Content-Type": contentType });
      response.end(content, "utf-8");
    });
  })
  .listen(8125, () => console.log("Server running at http://127.0.0.1:8125/"));
