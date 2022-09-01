## Using Mongoose to Populate: some issues (you may encouter)

Consider the following scenario

```js
const AuthorSchema = new Schema({
  name: String
});

const BlogPostSchema = new Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  comments: [{
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    content: String
  }]
});
```

Unfortunately, these two schemas, as written, don't support populating an author's list of blog posts. That's where virtual populate comes in. Virtual populate means calling populate() on a virtual property that has a ref option as shown below.

```js
// Specifying a virtual with a `ref` property is how you enable virtual
// population
AuthorSchema.virtual('posts', {
  ref: 'BlogPost',
  localField: '_id',
  foreignField: 'author'
});

const Author = mongoose.model('Author', AuthorSchema, 'Author');
const BlogPost = mongoose.model('BlogPost', BlogPostSchema, 'BlogPost');
```

Then you can populate() the authors posts as following
```js
const author = await Author.findOne().populate('posts');

author.posts[0].title; // Title of the first blog post
``` 

For details refer to the following:
* [Populate in Mongoose](https://mongoosejs.com/docs/populate.html)