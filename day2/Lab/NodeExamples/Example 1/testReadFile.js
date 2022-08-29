/* In this example we read the text from a text file called 'message.txt' and respond to the 
HTTP request by sending the contents of the file to the browser.

To include a module, use the require() method as shown below. We need the fs module to read from 
a file and the http module to create a server. */
const http = require('http');
const fileHandler = require('fs'); //inlude the file system module


//Try to read the file "message.txt". If the file cannot be read, throw an error.
//Note that the text file must be in the same folder as the Node.js file if you
//don't specify a path. 

fileHandler.readFile('message.txt', (err, data) => {
    if (err) throw err;

    http.createServer(function(request, response) {
        response.write(data); //write the data in the text file as a HTTP response
        response.end();
    }).listen(8080, () => {
        console.log(`Server is listening on port 8080. Open http://localhost:8080`);
    });
});