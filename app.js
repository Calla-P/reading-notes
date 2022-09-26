
function askName(){
    let username = prompt('What is your name?');
    console.log('Hello, ' + username);  
}

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



let userChoice = prompt('Veggies or Fruit');

if (userChoice.toLowerCase() == 'veggies') {
    document.write('<<< You chose Veggies, Yum!')
} else if (userChoice.
toLowerCase() == 'fruit') {
    document.write ('<<< You chose Fruit, my favorite too!');
} else {
    document.write( 'What do you eat?');
}
