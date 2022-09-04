/* In this example we write the text, 'Hello Node.js' to a text file called 'message.txt'.

To include a module, use the require() method as shown below. We need the fs module to write to 
a file and the http module to create a server. */
const http = require('http');
const fileHandler = require('fs');

fileHandler.writeFile('message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;

});

/* The createServer() method takes a callback function as an argument. This function, that will get executed when a request is made, is known as a requestListener. 
The requestListener takes two objects as arguments: 
The request object that contains properties and methods related to the HTTP request that has been made.
The response object that contains properties and methods related to the HTTP response that will be sent back to the browser.
*/
http.createServer(function(request, response) {
    response.write('The file has been saved');
    response.end();
}).listen(8080, () => {//The listen() method is used to specify which port you want to listen for HTTP requests on. 
    console.log(`Server is listening on port 8080. Open http://localhost:8080`);
});