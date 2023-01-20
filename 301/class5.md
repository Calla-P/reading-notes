# Read 05

## Reading

This is important because knowing the best professional practices are important and will make us a cut above. Knowing how to load the fastest is worth the time because users don’t want to wait.

### React Docs - Thinking in React

***What is the single responsibility principle and how does it apply to components?***

The Single Responsibility Principle (SRP) is a software design principle that states that a class or module should have one and only one reason to change. In the context of React, this principle applies to components. A component should have a single responsibility, such as handling user input or displaying data, and not be responsible for multiple concerns. This makes the component easier to understand, test, and maintain, as changes to one responsibility do not affect the others.

***What does it mean to build a ‘static’ version of your application?***

Building a "static" version of a React application means that the application is pre-rendered on the server and sent to the client as a fully-formed HTML document, rather than relying on client-side JavaScript to dynamically generate the content.

***Once you have a static application, what do you need to add?***

May want to add dynamic functionality such as user input, real-time updates, and client-side routing.

***What are the three questions you can ask to determine if something is state?***

1. Is the value going to change over time? If so, it's likely state.
2. Is this value being used in multiple components and being passed down through props? If so, it's likely state that should be managed at a higher level in the component tree.
3. Can this value be derived from other state or props? If so, it's likely not state and can be computed using a computed property or a method.  

Also, you can use the rule of thumb that states that if a value is used to render something on the screen, it's state, if it's used to make a decision but doesn't affect the render it's a props, and if it's used for both it's state.

***How can you identify where state needs to live?***

1. Cohesion: State should be kept as close to the components that use it as possible. This helps to keep the state management logic in one place and makes it easier to understand and debug.
2. Reusability: If a piece of state is used by multiple components, it should be moved to a higher level in the component tree where it can be shared. This allows for greater reusability and avoids duplicating state management logic.
3. Performance: State that is used to render a large number of components should be kept as low in the component tree as possible. This helps to minimize the number of re-renders that need to occur when the state changes.
4. Derivability: If a piece of state can be derived from other state or props, it may not be necessary to store it as state. Instead, it can be computed using a computed property or a method.
5. Context: Sometimes, it's useful to use React's context API to share state that is not part of the component tree, for example, to share a global state across the application.  

Ultimately, the best location for state depends on the specific requirements of the application and the structure of the component tree.  

### Higher-Order Functions

***What is a “higher-order function”?***

A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result.

***Explore the greaterThan function as defined in the reading. In your own words, what is line 2 of this function doing?***

It is returning a different function that will either be true or false depending on the value of (n).  

***Explain how either map or reduce operates, with regards to higher-order functions.***

map is a function that takes a callback function as an argument, and applies that callback to each element in an array, returning a new array with the results. The callback function takes the current element, its index, and the entire array as arguments.

Some answers were also found on Chatgpt

## Things I want to know more about

I want to know more about load speed.
