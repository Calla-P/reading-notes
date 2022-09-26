function yourName() {
    let name = prompt('What is your name?');

    return document.write("Hello Beautiful " + name );
}

function yourSign() {
    let sign = prompt('What is zodiac sign?');

    return document.write(" You are such an interesting " + sign);
}


function howOften() {
    let amount = prompt('In a day how many frsh veggies or fruits do you eat in a day? (0-10)')
    let amount2 = parseInt(amount) 

    if (amount2 < 3) {
        alert ( 'Okay my friend cool, cool, cool and just for fun facts.Picking the seasonal stuff will allow for the most nutrients');
    } else if (amount2 >= 3) {
        alert ( 'Wowzers my friend, you are doing a good job. Stay fresh, you beautiful bean.');
    } else {
        alert ( 'Make sure your life feeds your soul and keep it fresh, baby!!');
    }

}

 yourName()
 yourSign()
 howOften()