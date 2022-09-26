function yourName() {
    let name = prompt('What is your name?');

    return document.write(name);
}

function yourSign() {
    let sign = prompt('What is zodiac sign?');

    return document.write(sign);
}


function howOften() {
    let amount = prompt('Ina day how many frsh veggies or fruits do you eat in a day? (0-23)');
    let message = '';

    if (amount <= 3) {
        message = 'Okay my friend cool, cool, cool and just for fun facts.Picking the seasonal stuff will allow for the most nutrients';
    } else if (amount <= 3) {
        message = 'Wowzers my friend, you are doing a good job. Stay fresh you beautiful bean.';
    } else {
        message = 'Make sure your life feeds your soiul and keep it fresh, baby!!';
    }

    return message;
}

