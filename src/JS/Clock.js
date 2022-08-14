
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
    var datetime  = new Date();
    var time = datetime.toLocaleTimeString();
    // var hour = date.getHours();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();
    var hour = datetime.getHours();
    var lastindex = (hour < 10) ? 7:8;
    return (lastindex === 7)? "0"+time.substring(0,lastindex):time.substring(0,lastindex);
}


function updateTime() {
    Display_Time.innerHTML = refreshClock();

}
setInterval(updateTime,1000);





// changing the dayNight


// DayNight.innerHTML = checkDayNight();
// checkDayNight();
// getSpan('AM');
getAMPM()



function getAMPM() {
    var time = getToday().toLocaleTimeString();
    console.log(typeof time);
    console.log(time.substring(time.length ,time.length -2));
    var timelen = time.length;
    var ampm = time.substring(timelen ,timelen -2);
    
    getSpan('AM');
}

function getSpan(AMPM) {
    var sunmoon = document.createElement('i');
    sunmoon.classList.add('far');
    
    
    var logo = (AMPM == 'AM')? 'sun':'moon';
    sunmoon.classList.add('fa-' + logo);
    
    var span = (AMPM === 'AM')? 'Daytime':'Nightime';
    console.log(span)
    
    DayNight.innerText = span;
    DayNight.appendChild(sunmoon);
}




// making the date and day

const Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

var today  = new Date();
var day = today.getDay();
DayDisplay.innerHTML = Days[day];



// date

var date = today.getDate();
var month = Months[today.getMonth()];
var year = today.getFullYear();

DateDisplay.innerHTML = date + " " + month + " " + year;






