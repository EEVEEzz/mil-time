function getHour() {

    let hours = document.getElementById('hours');

    let minutes = document.getElementById('minutes').value;

    let remainder = minutes % 60;

    let totalhours = Math.round(minutes / 60);

    if (remainder < 10) {
        remainder = '0' + remainder;
    }

    if (totalhours < 10) {
        totalhours = '0' + totalhours;
    }

    hours.innerHTML = totalhours + 'h' + remainder;

}


function std() {
    // Calculation Steps
    let line1 = document.getElementById('line1');
    let line2 = document.getElementById('line2');
    let line3 = document.getElementById('line3');
    let line4 = document.getElementById('line4');
    let line5 = document.getElementById('line5');
    let line6 = document.getElementById('line6');
    let title = document.getElementById('calc-title');

    // DTS variables
    let distance = document.getElementById('distance');
    let speed = document.getElementById('speed');
    let time = document.getElementById('time');

    // DTS Output
    let timeOut = document.getElementById('timeOut');
    let speedOut = document.getElementById('speedOut');
    let distanceOut = document.getElementById('distanceOut');

    // SPEED CALC
    if (speed.value === '') {
        line3.innerHTML = "";
        line4.innerHTML = "";
        line5.innerHTML = "";
        line6.innerHTML = "";
        speedOut.innerHTML = Math.round(distance.value / time.value) + " kmph";

        // STEPS TO ANSWER
        title.innerHTML = "Speed Calculation: ";
        line1.innerHTML = " => " + distance.value + " / " + time.value + " = " + Math.round(distance.value / time.value);
        line2.innerHTML = " => " + Math.round(distance.value / time.value) + " km/h";
    }

    // DISTANCE CALC
    if (distance.value === '') {
        line3.innerHTML = "";
        line4.innerHTML = "";
        line5.innerHTML = "";
        line6.innerHTML = "";

        distanceOut.innerHTML = Math.round(speed.value * time.value) + ' km';

        // STEPS TO ANSWER
        title.innerHTML = "Distance Calculation: ";
        line1.innerHTML = " => " + speed.value + " X " + time.value + " = " + Math.round(speed.value * time.value);
        line2.innerHTML = " => " + Math.round(speed.value * time.value) + " kilometers";
    }

    // TIME CALC
    if (time.value === '') {

        line3.innerHTML = "";
        line4.innerHTML = "";
        line5.innerHTML = "";
        line6.innerHTML = "";

        let timeVal = (distance.value / speed.value).toFixed(2);

        let mins = timeVal * 60;

        let remainder = Math.round(mins % 60);

        let hours = Math.round(mins / 60);

        if (remainder < 10) {
            remainder = '0' + remainder;
        }

        if (hours < 10) {
            hours = '0' + hours;
        }

        timeOut.innerHTML = hours + "h" + remainder;

        // STEPS TO ANSWER
        title.innerHTML = "Time Calculation: ";
        line1.innerHTML = " => " + distance.value + " / " + speed.value + " = " + timeVal + " hours";
        line2.innerHTML = " => " + timeVal + " X " + " 60 = " + mins.toFixed(2) + " mins";
        line3.innerHTML = " => " + Math.floor(mins) + " / 60 = " + hours + " hours";
        line4.innerHTML = " => " + remainder + " minutes left over";
        line5.innerHTML = "=> " + hours + "h" + remainder;
    }

}