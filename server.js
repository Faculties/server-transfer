var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    /* This is broken because you're appending the string
     * 'req.url' into the file instead of req.url.  req.url
     * is a string variable already so if you just print
     * req.url it will append the end of localhost:8080/blahblah
     * but if you add 'req.url' it just literally puts req.url
     * into the .txt file, you can see if you open the .txt file that
     * it's just 'req.urlreq.urlreq.url'.
     *
     * It is also just appending them all right next to one another
     * instead of putting them on new lines.  The new line marker
     * in strings is '\n' so instead of 'req.url' you should put:
     * req.url + "\n"
     */
    fs.appendFile('received_data.txt', req.url + "\n",(err)=>{
    console.log(req.url + " " + "was appended to file!");
  });
  /* This isn't actually displaying the contents of the file
   * on the webpage, it's just showing the req.url.  This readFile
   * function outputs the information in the data variable, so you
   * need to replace the res.write(req.url) line with the info from
   * the file
   */
  fs.readFile('received_data.txt', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
