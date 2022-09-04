### Using Express

Can work in raw node, as we have seen but when the server side code gets complex, express provides us much more easier (saves time) and elegant way of writing server side code and managing requests. 

#### How to install and start using

* Visit the link [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
* Install using `npm init` and after finishing the basic settings, use `npm i express` to install express framework.

#### Working with Express
* Create a file with any name, convention is to call this file as **app.js**

```js
const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(5000);

app.get('/', (req, res) => {
   res.send('<p>home page</p>'); 
   // res.send() infers the content type and 
   // sets the status code as well
});

```

```js
app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile('./views/index.html', {
       root: __dirname });
    // express looks this file as on absolute path
    //to make it relative, we send second parameter
});
```
* Now another route added to our application i.e. About page:
```js
app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});
```

* Redirects for a route

```js
// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});
```
* 404 Page

```js
app.use((req, res) => {
  res.status(404).sendFile(
      './views/404.html', 
      { root: __dirname }
      );
});
```

**use** function, creates a middleware function. It will fire for every request regardless of the url, if code reaches this line. 
* use function should be positioned at the end of the page.

#### Adding parameters to url

For example, we are making an API, and want to read information about student with specific id, we can add that id with the url in this way by putting `/:id`, for example the whole url may look like: `/api/students/:id`. Similarly multiple parameters can be passed like as in the example: `/api/posts/:year/:month`. Query string parameters can also be added after `?`.

To access these parameters, we can use `req.params.id`, for getting the id for example in students example above. Always remember that parameters are in string form, so we need to parse them, E.g. `parseInt(req.params.id)` before using them. 