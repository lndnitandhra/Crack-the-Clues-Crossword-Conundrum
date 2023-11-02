
document.getElementById("dayZero").addEventListener("click", function() {
    event.preventDefault();
    var dayZero = new Date("Nov 3, 2023 00:00:00").getTime();
    var xZero = setInterval(function(){
    var now = new Date().getTime();
    var distance = dayZero - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance >0) {
            clearInterval(xZero);
            alert("The crossword unlocks in " + days + " days " + hours + " hours " + minutes + " minutes " + seconds+" seconds");
        } else {
            window.location.href = "tech.html";
    }
    });
},1000);


document.getElementById("dayOne").addEventListener("click", function() {
    event.preventDefault();
    var dayOne = new Date("Nov 4, 2023 00:00:00").getTime();
    var xOne = setInterval(function(){
    var now = new Date().getTime();
    var distance = dayOne - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance >0) {
            clearInterval(xOne);
            alert("The crossword unlocks in " + days + " days " + hours + " hours " + minutes + " minutes " + seconds+" seconds");
        } else {
            window.location.href = "money.html";
    }
    });
},1000);

document.getElementById("dayTwo").addEventListener("click", function() {
    event.preventDefault();
    var dayTwo = new Date("Nov 5, 2023 00:00:00").getTime();
    var xTwo = setInterval(function(){
    var now = new Date().getTime();
    var distance = dayTwo - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance >0) {
            clearInterval(xTwo);
            alert("The crossword unlocks in " + days + " days " + hours + " hours " + minutes + " minutes " + seconds+" seconds");
        } else {
            window.location.href = "gods.html";
    }
    });
},1000);