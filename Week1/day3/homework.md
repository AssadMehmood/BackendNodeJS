## Homework Week 1 Day 3

Go to the link: [ How to build REST API with Node js & Express](https://www.youtube.com/watch?v=pKd0Rpw7O48), and see how the api is created using Express. This API has been tested with Postman, and also includes the package **`joi`** for input validaiton, when sending data to the api, in post request.

Using the same tutorial for understanding how to build REST API, create an API which uses  `POST`, `GET`, `PUT`, `DELETE` methods. 

Create the **people** data array which has objects of the type **person** with following keys:
```js
* id
* firstName
* lastName
* age
* city
```
And create the **api** to add, update, get, and delete `person` elements inside the `people` array.

Make use of the package `joi` to validate the user input for all http methods where required. The validation rules are as follows:
- firstName, lastName, and city should have more than 3 characters.
- age should be more than 0 and less than 100.
- id should be a positive number starting from 1, and is unique for all records.

### Bonus
* Create file `people.js` and put all people data array in that file. Create your own module: i.e. create your methods, and using require in `app.js` access these methods to manipulate data inside the array from `app.js` from all http methods.