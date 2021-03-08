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
    let distance = document.getElementById('distance');

    let speed = document.getElementById('speed');

    let time = document.getElementById('time');

    let timeOut = document.getElementById('timeOut');

    let speedOut = document.getElementById('speedOut');

    let distanceOut = document.getElementById('distanceOut');

    if (speed.value === '') {
        speedOut.innerHTML = Math.round(distance.value / time.value) + " kmph";
    }

    if (time.value === '') {

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

        console.log(mins, remainder, hours);

        timeOut.innerHTML = hours + "h" + remainder;


    }

    if (distance.value === '') {
        distanceOut.innerHTML = Math.round(speed.value * time.value) + ' km';
    }


}