# Car_Rental_System
In order to run this app you need to install express framework first.
Then install mongoose for connectivity with MongoDB.
Install Body-Parse for handling incoming post method body data.
To test this app you need to use Postman application.
In postman you need to hit localhost:3000/products/ url with post method to add some data to Database.
Then hit localhost:3000/products/:"carmodel" with get method to retrive car.
For delete car from system hit localhost:3000/products/:"carRegNo" with delete method .
So like this all the methods found in .routes/product.js file and it's bussiness logic need to refer ./controller/product.js
