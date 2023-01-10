# Read 02

This matters because it is important to know what is happening behind the scenes for the things we build. Understanding the order of operations allows us to target what we need and how/ when we might accomplish it. 

## Reading

### React lifecycle

***Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?***

Render

***What is the very first thing to happen in the lifecycle of React?***

Mounting

***Put the following things in the order that they happen:***

 componentDidMount, render, constructor, componentWillUnmount, React Updates

Constructor, render, componentDidMount, React Updates, componentWillUnmount

***What does componentDidMount do?***

Loads anything to do with Dom Manipulation, network request, and etc

## Videos

### React State Vs Props

***What types of things can you pass in the props?***

Things that do not change, the things that will not be dynamic, like  titles or descriptions. Via static info. 

***What is the big difference between props and state?***

Props is something you pass into the component and state is handled inside of that component while props are handled outside

***When do we re-render our application?***

When the user does something that updates the Information on the app

***What are some examples of things that we could store in state?***

Names, dates, times, preferences 

## Things I want to know more about 

Even more instances of when to use props and states. What does Kyle mean by inside and outside of components?

## Bookmark and Review

* React Docs - State and Lifecycle
* React Docs - handling events
* React Tutorial through ‘Developer Tools’
* React Bootstrap Documentation
* Boootstrap Cheatsheet
* Bootstrap Shuffle - a class “sandbox”
* Netlify