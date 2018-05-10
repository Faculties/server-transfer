var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.appendFile('received_data.txt','req.url',(err)=>{
    console.log(req.url + " " + "was appended to file!");
  });
  fs.readFile('received_data.txt', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
  });
}).listen(8080);
