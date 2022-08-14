const Switch = document.getElementsByClassName('nob');
const RepeatDays = document.getElementsByClassName('btnday')

    for(let i = 0;i<RepeatDays.length;i++) {
        RepeatDays[i].addEventListener('click',() => {
            RepeatDays[i].classList.toggle('deselect');
        })
    }



for(let i = 0;i<Switch.length;i++) {
    Switch[i].addEventListener('click',() => {
        Switch[i].classList.toggle('on');
    })
}

// Add alarm menu

const Add_Alarm_Btn = document.getElementById('add-alarm');
const Add_Alarm_Menu = document.getElementById('add-alarm-menu');


Add_Alarm_Btn.addEventListener('click',() => {
    Add_Alarm_Menu.classList.toggle('hide');
    // while(!Add_Alarm_Menu.classList.contains('hide')) {
    //     Add_Alarm_Btn.ariaDisabled = 'true';
    // }
})