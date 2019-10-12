// start of the game with new random target number.

$(document).ready(function () {

    // to generate a random target number
    var target = Math.floor((Math.random() * 80) + 20);
    console.log(target);
    // assign the target number to be shown on html page.
    $('#computerRandom').text(target);


    // creating randomo number to be attached to each crystal.
    var green = Math.floor((Math.random() * 10) + 1);
    //console.log(green);
    var blue = Math.floor((Math.random() * 10) + 1);
    //console.log(blue);
    var orange = Math.floor((Math.random() * 10) + 1);
    //console.log(orange);
    var pink = Math.floor((Math.random() * 10) + 1);
    //console.log(pink);

    // beggining value for wins, losses and total clicks counts then append it to be shown on the web.

    var wins = 0;
    $('#wins').text(wins);

    var losses = 0;
    $('#losses').text(losses);

    var totalClicks = 0;
    $('#score').text(totalClicks);

    // function to reset the game

    function reset() {
        target = Math.floor((Math.random() * 80) + 20);

        $('#computerRandom').text(target);

        green = Math.floor((Math.random() * 10) + 1);

        blue = Math.floor((Math.random() * 10) + 1);

        orange = Math.floor((Math.random() * 10) + 1);

        pink = Math.floor((Math.random() * 10) + 1);

        totalClicks = 0;
    }

    //  function to increment wins and reset the game for new random values

    function winner() {
        wins++;
        $('#wins').text(wins);
        reset();
    }

    //  function to increment losses and reset the game for new random values

    function looser() {
        losses++;
        $('#losses').text(losses);
        reset();
    }


    // onclick function for green crystal

    $('#green').on('click', function () {
        totalClicks = totalClicks + green;
        $('#score').text(totalClicks);


        // if/else function to compare the two values of totalClicks and the target number

        if (target == totalClicks) {
            winner();
        } else if (target < totalClicks) {
            looser();
        }
    })

    // onclick function for green crystal

    $('#blue').on('click', function () {
        totalClicks = totalClicks + blue;
        $('#score').text(totalClicks);


        // if/else function to compare the two values of totalClicks and the target number

        if (target == totalClicks) {
            winner();
        } else if (target < totalClicks) {
            looser();
        }
    })

    // onclick function for green crystal

    $('#orange').on('click', function () {
        totalClicks = totalClicks + orange;
        $('#score').text(totalClicks);


        // if/else function to compare the two values of totalClicks and the target number

        if (target == totalClicks) {
            winner();
        } else if (target < totalClicks) {
            looser();
        }
    })

    // onclick function for green crystal

    $('#pink').on('click', function () {
        totalClicks = totalClicks + pink;
        $('#score').text(totalClicks);


        // if/else function to compare the two values of totalClicks and the target number

        if (target == totalClicks) {
            winner();
        } else if (target < totalClicks) {
            looser();
        }
    });
});


