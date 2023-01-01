# Read 01 - Introduction to React and Components

## Component-Based Architecture

***What is a “component”?***

In React, a component is a piece of code that represents a part of a user interface. It is a way to reuse code, and to think about building a user interface in terms of small, independent pieces that can be composed together.

***What are the characteristics of a component?***

1. A component is a class or function that returns a React element, which can be a JS element or a string, number, boolean, or null.
2. A component can receive props, which are values that are passed to the component from its parent component. Props can be used to pass data to the component and to specify the behavior of the component.
3. A component can have a state, which is an object that contains data specific to the component. The state can be used to store values that change within the component and can trigger a re-render of the component when it is updated.
4. A component can have lifecycle methods, which are functions that are called at specific points in the lifetime of a component. These methods can be used to perform actions when a component is created, updated, or destroyed.
5. A component can have a render method, which specifies the JSX code that is rendered to the DOM. The render method must return a single React element.
6. A component can be a stateful or stateless component. A stateful component is a class component that has a state, while a stateless component is a function component that does not have a state.


***What are the advantages of using component-based architecture?***

1. Reusability: Components can be reused throughout an application, which can save time and reduce code duplication.
2. Modularity: Components can be developed and tested independently, which makes it easier to maintain and scale an application.
3. Separation of concerns: Components are designed to be self-contained, which means that each component has a specific purpose and responsibility. This helps to keep the code organized and easy to understand.
4. Improved performance: React's virtual DOM system helps to optimize the rendering of components, which can improve the performance of an application.
5. Easy to learn and use: React has a declarative and intuitive syntax, which makes it easy for developers to learn and use.
6. Good developer experience: React has a large developer community and a rich ecosystem of tools and libraries, which makes it a good choice for building modern web applications.

## What is Props and How to Use it in React

***What is “props” short for?***

Properties

***How are props used in React?***

In React, props are used to pass data from a parent component to a child component. Props are passed to a component like HTML attributes, and they can be used to specify the behavior and appearance of a component.

***What is the flow of props?***

Props flow in a one-way direction, from the parent component to the child component. A child component cannot change its props, only use them to render its output. This helps to keep the component hierarchy organized and easy to understand. Props can also be used to customize the behavior and appearance of the child component.

Most answers found on https://chat.openai.com/chat 