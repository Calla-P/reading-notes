# Read Class 12

**This is important because understanding the errors help to navigate the solution**

## Status Codes Based On REST Methods

***In your own words, describe what each group of status code represents:***

    * 100’s = an initial request was received and is starting to process it
    * 200’s = all is well. 
    * 300’s = client needs to take additional action to complete the request
    * 400’s = error with the request made by the client
    * 500’s =  error in the server

***What is a status code 202?***

    In general, a 202 status code is used to indicate that the server has accepted a request that may take a long time to process, but the client should continue to use the existing resource in the meantime.

***What is a status code 308?***

    308 status code is used to indicate that a resource has been permanently moved to a new location, and the client should update its bookmarks or cached information to reflect the change.

***What code would you use if an update didn’t return data to a client?***

    204

***What code would you use if a resource used to exist but no longer does?***

    410

***What is the ‘Forbidden’ status code?***

    403 status code is used to indicate that the client does not have the necessary permissions to access a protected resource, even if the client is properly authenticated.

## Build A REST API With Node.js, Express, & MongoDB - Quick - First 20 minutes

***Why do we need to pull our MongoDB database string out of our server and put it into our .env?***

    Separating the database connection string from the rest of your code and storing it in a .env file can improve the security, flexibility, readability, and portability of your code.

***What is middleware?***

    Middleware provides a way to add additional functionality to an application and to make it easier to modify and maintain the application over time. It allows developers to separate concerns and make it easier to test and deploy their applications.

***What does app.use(express.json()) do?***

    the app.use(express.json()) line is a common and essential part of many Express.js applications, as it allows the application to easily parse incoming request bodies that are encoded as JSON data.

***What does the /:id mean in a route?***

    The use of URL parameters makes it possible to define routes that can handle requests for different resources with different identifiers. This can be useful when building RESTful APIs, for example, where the URL structure is used to identify specific resources that are being requested or modified.

***What is the difference between PUT and PATCH?***

    PUT is used when you want to replace an entire resource, while PATCH is used when you want to perform a partial update to a resource.

***How do you make a default value in a schema?***

    Using the default option in the field definition. The default value is used when a new document is inserted into the collection and the field value is not specified.

***What does a 500 error status code mean?***

    "Internal Server Error," indicates that an error has occurred on the server and the server is unable to process the request. This error is a generic error message that is sent when the server encounters an unexpected condition that prevents it from fulfilling the request.

***What is the difference between a status 200 and a status 201?***

    200 status code is used to indicate a successful request, while a 201 status code is used to indicate a successful request that resulted in the creation of a new resource.

### Things I to know more about:

    How does the sever understand what the client is getting wrong?
    Are these code universal?