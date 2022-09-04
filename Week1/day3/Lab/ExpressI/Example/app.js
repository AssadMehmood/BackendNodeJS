/*To execute the code in the example files:
Copy the example folder to your local computer.
Navigate to the folder that contains the example files from your command line interface.
Use the command line interface to type npm install to install all the needed dependencies (including Express).
Use the command line interface to type npm start to start this application.


Once your server is running, test it with the following URLs:
http://localhost:3000/
http://localhost:3000/example.html
http://localhost:3000/image1.jpg */

const express = require('express');
/*Create an object called ‘app’ by calling the top level express() function. 
This object represents our Express application. The app object contains important methods that we use to create our server
including app.get() and app.listen(). */
const app = express();

/*We use app.use() to include any built-in middleware functions we need in our app. 
Here we use app.use to include the express.static built-in middleware function. This 
will allow us to serve static resources in the 'public' folder we have created. 

Test this by navigating to http://localhost:3000/example.html and http://localhost:3000/image1.html (make sure your sever is running (npm start) before you try this)*/
app.use(express.static('public'));

/* The app.get function is used to handle routing. The app.get() method takes two arguments: 
The path. In this example, the path is ‘/’ the root route of our app. 
A callback function that acts as a route handler. */

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send(`Welcome ${req.query.name}`);
})

/* To get the port number from the environment variables instead of hardcoding it, we use the following code: */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
