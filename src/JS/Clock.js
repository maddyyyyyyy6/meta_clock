
const Display_Time = document.getElementById('time-screen');
const DayNight = document.getElementById('DayNight');
const DateDisplay = document.getElementById('date');
const DayDisplay = document.getElementById('day');

// var date = new Date();
// var time = date.toLocaleTimeString();
// var hour = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();
// var day = date.getDay();
// console.log(day);

function getToday() {
    return new Date();
}




// Display_Time.innerHTML = hour + ":" + minutes  + ":" + seconds;

// console.log(time.substring(0,7));


function refreshClock() {
    var datetime = new Date();
    // var time = datetime.toLocaleTimeString();
    var hour = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    // var min = datetime.getMinutes();
    // AlarmList.forEach(alarm => {
    // console.log(checkAlarm(1,hour-12))
    // })
    // if (checkAlarm(1,hour-12) && checkAlarm(2,min)){
    //     console.log(AlarmList)
    //     console.log("time out")
    // }

    // check
    // let alarms = JSON.parse(localStorage.getItem('saved-alarms'))
    // let alarm_time_hour = (hour < 12) ? hour : hour - 12;
    // let alarm_time_min = min;
    // alarms.forEach(alarm => {

    //     if (alarm.time.hour == alarm_time_hour && alarm.time.min == alarm_time_min) {
    //         console.log(alarm.id)
    //         console.log(alarm.label)
    //         console.log(alarm.time.hour, " ", alarm.time.min)
    //         console.log(alarm.repeat)
    //         console.log(alarm.tune)
    //         console.log(alarm.snooze)
    //     }
    // });
    // let lastindex = (hour < 10) ? 7 : 8;

    hour = (hour < 10) ? (hour == 00) ? 12 : "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    // return (lastindex === 7) ? "0" + time.substring(0, lastindex) : time.substring(0, lastindex);
    return hour + ":" + min + ":" + sec
}


function updateTime() {
    Display_Time.innerHTML = refreshClock();


}
setInterval(updateTime, 1000);





// changing the dayNight


// DayNight.innerHTML = checkDayNight();
// checkDayNight();
// getSpan('AM');
getAMPM()



function getAMPM() {
    // var time = getToday().toLocaleTimeString();
    // console.log(typeof time);
    // console.log(time.substring(time.length ,time.length -2));
    // var timelen = time.length;
    // var ampm = time.substring(timelen, timelen - 2);

    let hour = getToday().getHours();
    ampm = (hour < 12) ? "am" : "pm";


    getSpan(ampm);
}

function getSpan(AMPM) {
    var sunmoon = document.createElement('i');
    sunmoon.classList.add('far');


    var logo = (AMPM == 'am') ? 'sun' : 'moon';
    sunmoon.classList.add('fa-' + logo);

    var span = (AMPM === 'am') ? 'Daytime' : 'Nightime';
    // console.log(span)

    DayNight.innerText = span;
    DayNight.appendChild(sunmoon);
}




// making the date and day

const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

var today = new Date();
var day = today.getDay();
DayDisplay.innerHTML = Days[day];



// date

var date = today.getDate();
var month = Months[today.getMonth()];
var year = today.getFullYear();

DateDisplay.innerHTML = date + " " + month + " " + year;






