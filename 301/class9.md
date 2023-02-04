# Read 09

**This is important because we want to build sustainable code that is clean and do not want keep inventing the same wheels so to speak.**

## Functional Programming Concepts

***What is functional programming***

	This is a programming paradigm that emphasizes immutability, first-class and higher-order functions, and a declarative approach to problem-solving. In functional programming, functions are treated as first-class citizens and can be used as inputs or outputs to other functions, making it easy to write code that is both concise and maintainable. This approach to programming often leads to more robust and predictable code, and is commonly used in modern software development.

***What is a pure function and how do we know if something is a pure function?***

	A pure function is a function in which the output is solely determined by its inputs and has no side effects. This means that given the same inputs, a pure function will always produce the same output and have no effect on external state or variables.
To determine if a function is pure, you can ask yourself these questions:
* Does the function have any side effects (modifying external state, input arguments, throwing exceptions, etc.)?
* Does the function rely on any external state or mutable data?
* Does the function produce the same output for the same inputs?
If the answer to all of these questions is "no," then the function is considered pure

***What are the benefits of a pure function?***

1. Predictability: Pure functions always produce the same output given the same inputs, making it easier to reason about your code and predict the outcome.
2. Composability: Pure functions can be combined and reused easily, making it easier to build and maintain complex systems.
3. Testability: Pure functions have no side effects and do not rely on external state, making them easier to test and less prone to bugs.
4. Referential transparency: Pure functions can be replaced with their output values, making it easier to understand and optimize code.
5. Simplicity: Pure functions have a single responsibility and are often more straightforward and easier to understand than impure functions with multiple responsibilities and side effects.
6. Concurrency: Pure functions can be run in parallel without affecting each other, making it easier to write scalable and performant code.
7. Improved code quality: By using pure functions and avoiding side effects, you can write code that is more predictable, composable, and maintainable, leading to improved code quality and a better overall development experience.

***What is immutability?***

	Immutability is a concept in programming where an object cannot be changed once it is created.

***What is Referential transparency?***

	Referential transparency is a property of pure functions in which an expression can be replaced with its value without affecting the behavior of a program. This means that if a function is referentially transparent, you can always replace a call to the function with its output value without changing the meaning of the program.

## Node JS Tutorial for Beginners #6 - Modules and require()

***What is a module?***

	In Node.js, a module is a unit of encapsulated code that can be exported and imported for use in other parts of a Node.js application.

***What does the word ‘require’ do?***

	In Node.js, the require function is used to import a module and make its exports available for use in your code. The require function takes a single argument, which is the name or path of the module you want to import.

***How do we bring another module into the file the we are working in?***

	To bring another module into the file you are working in, you use the require function in Node.js. The require function takes a single argument, which is the name or path of the module you want to import.

***What do we have to do to make a module available?***

	To make a module available in Node.js, you need to export the functions, objects, and values that you want to make available for use in other parts of your application.
To do this, you use the module.exports object in your module file. You can assign any value or object to module.exports, and that value or object will be the exports of your module.

### Things I want to know more about

Can one reuse the code in another app just by copying it into another file in that app?

Can we modulate in most languages?