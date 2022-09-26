'use strict'

let username = prompt('What is your name?');
console.log('Hello, ' + username);

let fresh = prompt('Do you eat fresh?)');
let message;

if(fresh = yes){
    message = 'You are awesome, Keep it up!' + username;
} else if (fresh = no){
    message = 'You are awesome and fresh veggies miss you!';
}  else if(fresh = sometimes){
    message = 'Way to go, You are well on your way to super human!' + username;
} else {
    message = "Go visit your local Farmers market and drink water" + username;
}

// look for the "<h2><script src="app.js"></script></h2>" on line 20 in the HTML, this is where the message will write too!
document.write('Hello ' + username + '! ' + message);