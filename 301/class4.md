# Read 04 

## Reading

**This is important because often times we want to customize based on what the user inputs and want to have a way to target the data received.**

### React Docs - Forms

***What is a ‘Controlled Component’?***

A controlled component is a form element in React that is controlled by the state of the component.

***Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why?***

In most cases, it is recommended to update the state as soon as the user enters their response if you need instant feedback, like validation, and update the state when the form is submitted if you don't need instant feedback.

***How do we target what the user is entering if we have an event handler on an input field?***

You can target the user's input in an event handler on an input field by using the event.target.value property.

## The Conditional (Ternary) Operator Explained

***Why would we use a ternary operator?***

It is useful when you have a simple condition to check, and don't want to use an if-else statement as it makes the code less verbose and more readable.

***Rewrite the following statement using a ternary statement:***

**if( x===y ){
  console.log( true ) ;
} els e {
  console.log( false ) ;
}**

( x === y ) ? console.log( true ) : console.log( false ) ;

Found some answers on Chat GPT as well :)

***Things I want to know more about…***

How often is a ternary used? It feels like things wouldn’t always be yes or no.

Where is the form information being stored?