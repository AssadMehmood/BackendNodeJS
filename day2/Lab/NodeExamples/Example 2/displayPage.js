//This code will respond to a HTTP request on port 8080 by displaying the file 'about.html' on the users browser


var http = require('http');
var fs = require('fs'); //Include the File System Module to allow you to access files

http.createServer(function (req, res) {
  fs.readFile('about.html', function(err, data) { //read the 'about.html' file
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);	//display the content of the 'about.html' file 
    return res.end();
  });
}).listen(8080);