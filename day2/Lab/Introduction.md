## Introduction to Node.js


### Running Node file 
```js
const speak = () => {
  console.log('hello, ninjas');
}

speak();
```
**What will be the output of the above code?**

There are differences in front-end JS and back-end JS. Somem of them are:

### The Global Object

Create a file with name global.js and type in the following code in it.

```js

console.log(global);

 global.setTimeout(() => {
   console.log('in the timeout');
 }, 3000);
```
**Another Example**
```js
setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log('in the interval');
}, 1000);
```

##### How to access the current directory and the current file:

Two properties available in the global object: to get the absolute path of the current directory or file when used!

```js
console.log(__dirname);
console.log(__filename);
```
Its useful as we'll be interacting with files and manipulating them as well.

In Node.js, we don't have the access to DOM methods. Try the following code and see:

```js
// no access to DOM methods
console.log(document.querySelector);
```

### Modules and Require

When splitting code into more than one file, as it is much easier to manage and mantain. 
create a file with name **`people.js`**
This file has the data related to people:

```js
const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
console.log(people);

```
Create another file with the name **`modules.js`**, we want to access the people data inside modules, for the purpose, we need to use `require()`

```js
 const people = require('./people');
console.log(people); // see what is shown in terminal

```
If we want to access the data in modules file, we need to manually export that from the other file. 

```js
module.exports = people;
```
This way we can access people inside modules.js file or any file where we require people.js file.

Similarly, for more than one pieces of data, let's see how can do that. 
Let's add the following to **`people.js`**

```js
const ages = [20, 25, 30, 35];

module.exports = {
  people,
  ages,
}
```
Inside other file, we have:
**`modules.js`**
```js
const data = require('./people');
console.log(data.people, data.ages);

```

A nice way to import data is:

```js
const { people, ages } = require('./people');

console.log(people, ages);
```

Node.js comes with core modules built in, we can use them, as for example:

```js
const os = require('os');

console.log(os.platform(), os.homedir());

```

### File System in Node.js (A module in Node.js)

First, we need to import file system module in the following way:

```js
const fs = require('fs');
```

#### Reading Files
```js
fs.readFile('./docs/blog.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});
```
The functions in fs module are asynchronus, meaning that it will take some time to execute the function. And it doesn't block the code from execution.

To confirm it, do the following:
```js
console.log('Last Line');
```
See the output in the terminal by running the file again.

#### Writing Files
```js
fs.writeFile('./docs/blog.txt', 'hello, world', () => {
  console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
  console.log('file was written');
});

```

#### Directories
```js
fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
```
Run and see what has happened. 
What if the folder already existed! The good way of doing that is putting the above code in conditional statements, as below:

```js
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}
```

#### Deleting Files
```js
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
```


If the files are quite big, we can use the stream mechanism of reading the files, and can use them before we have read the entire file. The example code for reading such files is given in [steams.js](streams.js) 

