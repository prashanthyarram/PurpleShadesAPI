# purpleShadesAPI
This is the backend API server for purpleshades e commerce website
This API has been deployed on https://purpleshades-api.onrender.com on render Free plan
It uses a Express and mongoDB based application used to serve as a server for purpleshades.com an E-commerce website project by prashanth yarram
Its routes and responses are as follows:

GET -----  https://purpleshades-api.onrender.com/api/products/seed --- This loads the mongoDB with some demo products data

GET -----  https://purpleshades-api.onrender.com/api/users/seed --- This loads the mongoDB with some demo users data

GET -----  https://purpleshades-api.onrender.com/api/reviews/seed --- This loads the mongoDB with some demo  reviews data

GET -----  https://purpleshades-api.onrender.com/api/products/ --- This gives users all the products in the database

GET -----  https://purpleshades-api.onrender.com/api/products/:id --- This returns the product with the specified id of the product

POST -----  https://purpleshades-api.onrender.com/api/products/register --- This adds a new product to the database with the data from request object body

POST -----  https://purpleshades-api.onrender.com/api/products/delete --- This deletes the specified product with the id given in request object body

GET -----  https://purpleshades-api.onrender.com/api/reviews/:id --- This returns all the reviews of a certain product with the average star rating of a certain                                                                            product according to the product mentioned in the request body

POST -----  https://purpleshades-api.onrender.com/api/reviews/delete --- This deletes the specified review with the id given in request object body

POST -----  https://purpleshades-api.onrender.com/api/reviews/post --- This is used to post a review to the database based on the product

POST -----  https://purpleshades-api.onrender.com/api/users/register --- This adds a new user to the database based on the data from request object body

POST -----  https://purpleshades-api.onrender.com/api/users/signin --- This is used to authenticate a user and send user data in response if password matches.

POST -----  https://purpleshades-api.onrender.com/api/users/delete --- This is used to delete a user based on user ID
