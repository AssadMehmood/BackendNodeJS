### Introduction to MongoDB

#### Usage

##### Mongoose
- `npm install mongoose`

Include The following code in server.js file!
```js
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})
```

##### Defining the Model

- Create a seperate file and name it say: BlogPost.js inside **models** folder

```js
const mongoose = require('mongoose') 
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({ title: String,
body: String
});
```

- Export the schema:
  ```js
  const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
  module.exports = BlogPost
  ```


#### CRUD Operations with Mongoose Models

- In your app directory, create a file test.js with the following code:

```js
const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost') 
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
BlogPost.create({
title: 'The title here',
body: 'Body text, some loreum epsum text!!!'
}, (error, blogpost) =>{ console.log(error,blogpost)
})
```

#### Visualizing Data in MongoDB
- Using MongoDB Compass

#### Reading Data from MongoDB using Mongoose

- Pass empty document to Query filter parameter 
```js
BlogPost.find({}, (error, blogspot) =>{ 
    console.log(error,blogspot)
})
```

- Find by title

#### Updating Records

```js
var id = "5cb436980b33147489eadfbb";
BlogPost.findByIdAndUpdate(id,{ title:'Updated title'
}, 
(error, blogspot) =>{ 
    console.log(error,blogspot)
})
```

#### Deleting Single Record

```js
var id = "5cb436980b33147489eadfbb";
BlogPost.findByIdAndDelete(id, (error, blogspot) =>{
     console.log(error,blogspot)
})
```