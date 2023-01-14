# Read 03

## Reading

This matters because when working with api or large libraries we want to create code that is flexible with the data we need.

***What does .map() return?***

The .map() method in JavaScript returns a new array with the results of calling a provided function on every element in the calling array. The returned array will have the same length as the original array.

***If I want to loop through an array and display each value in JSX, how do I do that in React?***

Map ( ) function

***Each list item needs a unique ____.***

Key

***What is the purpose of a key?***

The purpose is to help React to keep track of which elements have been changed, added, or removed. If you're using an array of objects, you can use the id property of the object as the key.

### The Spread Operator

***What is the spread operator?***

The spread operator (...) is a feature in JavaScript that allows an iterable (such as an array or an object) to be expanded in places where zero or more elements are expected.

***List 4 things that the spread operator can do.***

- It can be used to merge two or more arrays together.
- It can be used to copy an array or an object.
- It can be used to spread the elements of an array or the properties of an object into a function call.
- It can be used to spread the elements of an array or the properties of an object into a destructuring assignment.

***Give an example of using the spread operator to combine two arrays.***

Lets say I am making two list one has veggie and the other are fruits, then we make them one and call it a grocery list

***Give an example of using the spread operator to add a new item to an array.***

 let veggie = [ potatoes, spinach, onion] ;
 let newVeggie = “ beets ” ;

veggie = [ colors, newVeggie ] ;

This is to adds the other veggie into the color array. 

***Give an example of using the spread operator to combine two objects into one.***

Let’s say you have person 1 and person 2, we name the city they live , age, and what they are passionate about. We can then use a spread operator to make these two objects into a combinedPerson that list out person 1, 2, and how ever many more objects.

**Somethings here were found via Chatgpt**

## Videos

### How to Pass Functions Between Components

***In the video, what is the first step that the developer does to pass functions between components?*** 

Define the function in the parent then pass it as a prop

***In your own words, what does the increment function do?***

It is a function that will increase a value by the amount set. 

***How can you pass a method from a parent component into a child component?***

Passing it as  a prop

***How does the child component invoke a method that was passed to it from a parent component?***

this.prop. (whatever) and call the method to cause a state change and effect the change desired. 

## Bookmark and Review

**React Tutorial through ‘Declaring a Winner’**
**React Docs - Lifting State Up**

Things to know more about:

Is map the best way to work with arrays when making updates?