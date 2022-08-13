
// change clock button
const Digital_Clock = document.getElementById('digital-view');
const Analog_Clock = document.getElementById('analog-view');
const Digital_Button = document.getElementById('Digital');
const Analog_Button = document.getElementById('Analog');


Digital_Button.addEventListener('click',() => {
    Digital_Button.classList.add('invisible');
    Analog_Button.classList.remove('invisible');
    // Analog_Clock.classList.remove('hidden');
    // Digital_Clock.classList.add('hidden');


})


Analog_Button.addEventListener('click',() => {
    Analog_Button.classList.add('invisible');
    Digital_Button.classList.remove('invisible');
    // Digital_Clock.classList.remove('hidden');
    // Analog_Clock.classList.add('hidden');



})




// Analog Clock