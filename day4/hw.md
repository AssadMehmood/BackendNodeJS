# MongoDB I Homework

 1) create a file called db.js and inside it do the necessary steps to create a MongoDB connection to localHost 27017.
 2) Create a file called `user.js`, then create a mongoose schema named `users` with the following requirements:
    - firstName: first name of the user
    - lastName: last name of the user
    - birthDate: the date of birth of the user
    - isMarried: true if the user is married and false if not
    
3) Create a file called `store.js`, then create a mongoose schema named `products` with the following requirements:
    - productName: the name of the product.
    - amount: the number of the products stored.
    - lastUpdated: the date of the last update on the product.
    - distributors: an array with all the product distributors.

4) Add at least 3 entries in each model.
5) write a query to filter all users who are not married
6) update one of the products entries by adding another distributor to the distributors array
7) Delete one of the users in the users schema