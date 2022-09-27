
// define the variable named "name" and set the value to the user input of the prompt
function guessANumber() {
    let answer;

    while (answer != 5) {
        answer = prompt('Guess a number between 1-10');
        if (answer !=5) {
            alert('Give it another go!');
        } else {
            alert('You are fantastico!');
        }
    }
}


function displayRating() {

    let output = '';
    let times = prompt('from 1-5, how many times do you go to the grocery in a week?');
    for(let i = 0; i < times; i++){
        output += "<img class='grocery-store' src='grocerystore.jpeg'/>";
    }

    return document.write(output);
}

// guessANumber();

// displayRating();