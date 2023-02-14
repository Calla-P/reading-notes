# Read 13

*Reading*

***This is important because understanding best practices will allow us to build efficient habits***

## CRUD Basics

***Which HTTP method would you use to update a record through an API?***

	Methods "PUT" or "PATCH". Both methods are commonly used for updating records in a database through an API, with "PUT" typically used for full updates and "PATCH" for partial updates.

***Which REST methods require an ID parameter?***

    1. GET: When fetching a specific resource, you would usually provide the ID of the resource in the URL, for example: GET /api/users/123.
    2. PUT/PATCH: When updating a specific resource, you would also provide the ID of the resource in the URL, for example: PUT /api/users/123 or PATCH /api/users/123.
    3. DELETE: When deleting a specific resource, you would provide the ID of the resource in the URL, for example: DELETE /api/users/123.
It's worth noting that not all RESTful APIs require an ID parameter for these methods, as some may use other means of identifying resources, such as using a slug or a unique identifier.

*Videos*

## Speed Coding: Building a CRUD API (Watch a Twitch streamer code an Express API in 20 minutes!)

***What’s the relationship between REST and CRUD?***

	CRUD represents the four basic operations that can be performed on data, REST defines a way to expose and access these operations over the web. A well-designed RESTful API will typically implement CRUD operations as HTTP methods on resources, but not all APIs that use CRUD operations necessarily follow REST principles.

***If you had to describe the process of creating a RESTful API in 5 steps, what would they be?***

    1. Identify the resources: Determine the resources that your API will expose and define the endpoints that will be used to access them. For example, if you were building an API for a blog, the resources could be posts, comments, and users.
    2. Define the data model: Design the data model for each resource, including the attributes and relationships that will be exposed. This can involve creating database tables and defining schemas for JSON payloads.
    3. Implement the API endpoints: Write the code that implements the endpoints for each resource, handling the various HTTP methods (GET, POST, PUT, DELETE) as appropriate.
    4. Add authentication and authorization: Decide how your API will handle authentication and authorization, such as using API keys, OAuth, or JWT. Implement the necessary security features to ensure that only authorized clients can access your API.
    5. Test and document the API: Finally, thoroughly test your API to ensure that it behaves as expected and meets the needs of your users. Write clear and concise documentation that explains how to use the API and the expected responses for each endpoint.

### Things I want to know more about

- Who invented Restful or CRUD?
- What is an average time to build an API?
- Is thunder client the best for testing API communication?
- Where does cache relate in these topics?
