

let username = prompt('What is your name?');
console.log('Hello, ' + username);

let time = prompt('What hour is it? (0-23)');
let message;

if(time <= 11){
    message = 'Good Morning!';
} else if (time <= 18){
    message = 'Good Afternoon!';
}  else if(time < 24){
    message = "Good Evening!";
} else {
    message = "That hour does not exist!";
}

let any = prompt("Do you eat fresh?");
console.log('Keep it up,' + username);

// let yes = prompt("You are awesome, keep it up");
// let words;

// let yes = "Stay Fresh!";             
// let no = "'Fresh eats miss you too!'"; 

// if(yes = {
    // words = "You are awesome, keep it up!");
// if(no = {
    // words = "You are awesome and fresh veggies miss you.";

//  yes = prompt ('You are awesome keep it up');
// document.write('You are awesome. Keep it up.' + username );





// look for the "<h2><script src="app.js"></script></h2>" on line 20 in the HTML, this is where the message will write too!
// document.write('Hello ' + username + '! ' + message);