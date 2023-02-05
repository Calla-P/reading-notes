# Read 10

**This is important because knowing how to review your code and to understand what kind of thing is wrong can save the coder a lot of time and give direction for where to look for resolutions.

## Understanding the JavaScript Call Stack

***What is a ‘call’?***

	Invoking a function

***How many ‘calls’ can happen at once?***

	Only one happens at a time

***What does LIFO mean?***

	Last In, First Out - like me a party ; )
	When the function is returned it is the last one that was brought to the stack

***Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.***

function startFunction () {
	console.log(“Hiya from the start”);
}

function endingFunction() {
	startFunction();
	console.log(“The ending from the endingFunction”);
}

endingFunction();

- endingFunction gets called first and put into the stack
- Then startFunction is called, which pushes it into the stack

***What causes a Stack Overflow?***

	A function calling itself without an exit point, when it continuously executes it will never pop off the stack 

## JavaScript error messages

***What is a ‘reference error’?***

	It means what ever you are trying to reference is undefined, undeclared, or non-existent.

***What is a ‘syntax error’?***

	A typing error or misspelling

***What is a ‘range error’?***

A "RangeError" is a type of error that occurs in JavaScript when a numeric value is outside the expected range or when a value is not a number (NaN). This typically results in a message like "Uncaught RangeError: argument is not a valid code point". For example, trying to create an array with a negative length, or calling a function with a parameter that is outside the expected range, can cause a RangeError to be thrown. This error indicates that the value being used is not within the expected range and needs to be corrected in order to proceed.

***What is a ‘type error’?***

	The type of variable you are using is incompatible with the function being called

***What is a breakpoint?***

	A breakpoint is a point in the code where execution is temporarily paused, allowing the developer to inspect the state of the program and debug it.

***What does the word ‘debugger’ do in your code?***

	The word adds a breakpoint to the code, allowing the coder to review the things that are happening to that particular point

**Bookmark and Review**

*JavaScript errors reference on MDN*
