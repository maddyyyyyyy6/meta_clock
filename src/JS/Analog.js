
// change clock button
const Digital_Clock = document.getElementById('digital-view');
const Analog_Clock = document.getElementById('analog-view');
const Digital_Button = document.getElementById('Digital');
const Analog_Button = document.getElementById('Analog');
const Clock_Circle = document.getElementById('clock-circle')
const Clock_Circle_Class = document.getElementsByClassName('clock-circle')
const AnalogTodayView = document.getElementById('Analog-Today-view');
const AnalogDayNight = document.getElementById('analog-DayNight');
const AnalogDateDisplay = document.getElementById('analog-date');
const AnalogDayDisplay = document.getElementById('analog-day');
const Change_Clock_Btn = document.getElementById('Change-clock-btn');






function getToday() {
    return new Date();
}

Digital_Button.addEventListener('click', () => {
    Digital_Button.classList.add('invisible');
    Digital_Clock.style.display = 'none';
    Analog_Button.classList.remove('invisible');
    Analog_Clock.style.height = '100vh'
    AnalogTodayView.classList.remove('hide')
    AnalogDayNight.classList.remove('hide');

    Analog_Clock.classList.remove('hidden');
    Clock_Circle.classList.remove('hide');




})


Analog_Button.addEventListener('click', () => {
    Analog_Button.classList.add('invisible');
    Digital_Button.classList.remove('invisible');
    Digital_Clock.style.display = 'flex';
    AnalogDayNight.classList.add('hide')
    Clock_Circle.classList.add('hide');
    Analog_Clock.style.height = '0'



})




// Analog Clock


const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000)













var today = new Date();
var day = today.getDay();
AnalogDayDisplay.innerHTML = Days[day];



// date

var date = today.getDate();
var month = Months[today.getMonth()];
var year = today.getFullYear();

AnalogDateDisplay.innerHTML = date + " " + month + " " + year;
