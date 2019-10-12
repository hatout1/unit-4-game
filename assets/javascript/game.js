// start of the game with new random target number.

$(document).ready(function () {

    // to generate a random target number
    var target = Math.floor((Math.random() * 80) + 20);
    console.log(target);
    // assign the target number to be shown on html page.
    $('#computerRandom').text(target);


    // creating randomo number to be attached to each crystal.
    var green = Math.floor((Math.random() * 10) + 1);
    console.log(green);
    var blue = Math.floor((Math.random() * 10) + 1);
    console.log(blue);
    var orange = Math.floor((Math.random() * 10) + 1);
    console.log(orange);
    var pink = Math.floor((Math.random() * 10) + 1);
    console.log(pink);

    // beggining value for wins, losses and total clicks counts then append it to be shown on the web.

    var wins = 0;
    $('#wins').text(wins);

    var losses = 0;
    $('#losses').text(losses);

    var totalClicks = 0;
    $('#score').text(totalClicks);


});

// function that generats a random number between 20 to 100
// Random number Generator










// functios that assigns random numbers to the crystals







//function that calculats the total number of clicked crystal's value



