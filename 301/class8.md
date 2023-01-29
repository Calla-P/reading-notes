# Read 08

**This is important because knowing how one goes about creating a good API allows us to have a better understanding of how our machines converse and what we can do to streamline it***

## Reading

### API Design Best Practices

***What does REST stand for?***

Representational State Transfer

***REST APIs are designed around a ____.***

Client- Server Architecture

***What is an identifier of a resource? Give an example.***

An identifier of a resource is a unique string (typically a URL) that represents a specific resource in a RESTful API.
Example:
* The URL "https://api.example.com/users/123" could represent a specific user resource with ID 123.

***What are the most common HTTP verbs?***

* GET: retrieve a resource
* POST: create a new resource
* PUT: update a resource
* DELETE: delete a resource.


***What should the URIs be based on?***

URIs (Uniform Resource Identifiers) should be based on the resources they represent and should follow the principle of nouns being used to represent resources and verbs being used to represent actions on those resources. The URIs should also be intuitive and easy to understand.

***Give an example of a good URI.***

https://api.example.com/users/{user_id}/posts/{post_id}
This URI identifies a specific post resource belonging to a user, and follows the principle of using nouns to represent resources (users, posts) and using a hierarchical structure to represent relationships (a post belonging to a user).

***What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?***

This is generally considered a bad thing as it negatively impacts the performance and usability of the API. A well-designed API should strive to minimize the number of requests and responses necessary to complete a task, making it more efficient and user-friendly.

***What status code does a successful GET request return?***

200

***What status code does an unsuccessful GET request return?***

* 404 (Not Found): indicates that the requested resource could not be found on the server.
* 403 (Forbidden): indicates that the client is not authorized to access the requested resource.
* 500 (Internal Server Error): indicates a server-side error occurred while processing the request.

***What status code does a successful POST request return?***

A successful POST request typically returns a 201 (Created) HTTP status code.

***What status code does a successful DELETE request return?***

A successful DELETE request typically returns a 204 (No Content) HTTP status code.

### Thing I want to know more about  

What is the website that has these different codes on theme?
What is a non chatty or a non chatty way to build API’s?  

Some answers found on Chatgpt.

### Bookmark and Review

* RegExr - Pay particular attention to the cheatsheet
* Regex Tutorial
* Regex 101