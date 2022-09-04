## Using Mongoose along with Express

Following are the steps to use MongoDB for CRUD operations by utilizing Mongoose:

- Add the mongoose package in your Express `server.js` or `app.js`. 
- Connect to the database
- Create the Schemas and Models out of these schemas for the data objects to be stored in the database.
- For each of the http method calls, use the models to respond to user request.

Consider the following Example for creating a blog, and manipulate blog posts in database based on user request. 
- Create a seperate file and name it say: blog.js inside **models** folder

- Blog Model
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
```

At the top of your express server add the following to use mongoose and model(s) and connect to the database 

```js
const mongoose = require('mongoose');
const Blog = require('./models/blog');
.
.
.
//Connect to the database using mongoose.connect
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

```
- In `app.js` define the routes for **CRUD** operations.

The routes based on http methods are defined as under:

```js

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.json({ blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/blogs', (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog.save()
    .then(result => {
      res.send(blog);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.json({ blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.send("Blog item deleted");
    })
    .catch(err => {
      console.log(err);
    });
});

```

