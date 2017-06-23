//create a countdown from 20 seconds
var countDown = 5;
var endOfWorld = setInterval(function () {
    document.getElementById("endSaying").innerHTML = countDown;
    countDown--
    if (countDown === 0) {
        //install a clear interval function to stop the countdown
        clearInterval(endOfWorld);
        document.getElementById("endMessage").innerHTML = "The world has been destroyed!";
    }
}, 1000);


//use a method to display the information to the DOM




