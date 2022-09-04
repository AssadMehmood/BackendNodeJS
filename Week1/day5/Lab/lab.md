
### Using Mongoose to work with MongoDB 


#### Async Function Calls:
- Always use the the promises / async await approach while working with the databases!
  
```js
  async function run(){
    //const user = new User({name:'name', age:26})
    //await user.save()

    const user = await User.create({name:'name', age:26})
    user.name = 'Abc';
    await user.save();
    console.log("User saved")
}
```
#### Catch the Errors
- We may come accross some error e.g. The validation error! or any other error, so use the try catch blocks inside!!!
  
```js
async function run(){
    try{
        //The Object
    }
    catch(err){
        console.log(err.message)
    }
}
```
#### Custom Validation in Schema

```js
Custom Validation:

validate:{
validator: v => v % 2 == 0,
props: `${props.value} is not a valid number`
}
```


#### Avoid using some default methods
- Built in and Custom Validations only work with create and save methods!
- Methods like findByIdAndUpdate, findByIDAndUpdateMany etc don't use the validations, nor give an error is the data is not valid!
- Always use save method when updating or saving the data!


#### Query Basics
Some of the available methods are:

- find
- findById
- findOne
- exists

###### Custom Query
E.g. Search users with age greater than 12!
```js
const users = await User.where("age")
                        .gt("12")
                        .where("name")
                        .equals("...")
                        .limit(2)
                        .select("..") // field name wanted to return
```