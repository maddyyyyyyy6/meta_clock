const Switch = document.getElementsByClassName('nob');
const RepeatDays = document.getElementsByClassName('btnday')
const Alarm_page = document.getElementById('Alarm');
const Save_Alarm = document.getElementById('save-alarm');
// Add alarm menu
const Add_Alarm_Btn = document.getElementById('add-alarm');
const Add_Alarm_Menu = document.getElementById('add-alarm-form');




AlarmList = [];


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
console.log('Addmenu')
Add_Alarm_Btn.addEventListener('click', () => {
    console.log('menu');
    Add_Alarm_Menu.classList.toggle('hide-menu');
    // while(!Add_Alarm_Menu.classList.contains('hide')) {
    //     Add_Alarm_Btn.ariaDisabled = 'true';
    // }
})



const Label_Alarm = document.getElementById('label-alarm');


// Add to AlarmList

console.log(AlarmList)

AlarmList.push({
    id:"count",
    label:"Good Morning",
    time:"07:00",
    tune:"beep beep",
    snooze:"10"
})

console.log(AlarmList)

Save_Alarm.addEventListener('click',() => {
    addtoList();
})


var count = 0;
const addtoList = () => {
    var input = Label_Alarm.value;
    AlarmList.push({
        id:count,
        label:input
    })
    count++;
    console.log(AlarmList)
    Label_Alarm.value = ''
}



//  increment time (hour)

const Increment_Hour = document.getElementById('hour-up');
const Decrement_Hour = document.getElementById('hour-down');
const Display_Hour = document.getElementById('hour');


Increment_Hour.addEventListener('click',() => {
    var num = parseInt(Display_Hour.innerHTML);
    if(num === 12) {
        num = 0;
    }
    var incremented = num + 1;
    Display_Hour.innerHTML = incremented < 10 ? "0" + incremented:incremented;
    Display_Hour.classList.add('text-animate-down')
    setTimeout(() => {
        Display_Hour.classList.remove('text-animate-down')
    }, 200);
})

Decrement_Hour.addEventListener('click',() => {
    Decrement_Hour.classList.add('clicked');
    var num = parseInt(Display_Hour.innerHTML);
    if(num === 0) {
        decremented =12;
    }else{
        var decremented = num - 1;

    }
    Display_Hour.innerHTML = decremented < 10?"0" + decremented:decremented;
    Display_Hour.classList.add('text-animate-up')
    setTimeout(() => {
        Display_Hour.classList.remove('text-animate-up')
    }, 200);
    Decrement_Hour.classList.remove('clicked');

})

// increment minute

const Increment_Minute = document.getElementById('minute-up')
const Decrement_Minute = document.getElementById('minute-down')
const Display_Minute = document.getElementById('minute');


Increment_Minute.addEventListener('click' ,() => {
    var lastmin = parseInt(Display_Minute.innerHTML);
    var incrementmin = lastmin === 60?lastmin = 0:lastmin + 1;
    Display_Minute.innerHTML = incrementmin < 10?"0" + incrementmin:incrementmin;
    Display_Minute.classList.add('text-animate-down')
    setTimeout(() => {
        Display_Minute.classList.remove('text-animate-down')
    }, 200);
})

Decrement_Minute.addEventListener('click' ,() => {
    var lastmin = parseInt(Display_Minute.innerHTML);
    var decrementmin = lastmin === 0?lastmin = 60:lastmin - 1;
    Display_Minute.innerHTML = decrementmin < 10?"0" + decrementmin:decrementmin;
    Display_Minute.classList.add('text-animate-up')
    setTimeout(() => {
        Display_Minute.classList.remove('text-animate-up')
    }, 200);
})


// Change Alarm Time span AM/PM

const AM_PM_up = document.getElementById('ampm-up')
const AM_PM_down = document.getElementById('ampm-down')
const Display_AMPM = document.getElementById('ampm')

AM_PM_up.addEventListener('click',() => {
    var last = Display_AMPM.innerHTML;
    var span = last == "AM"?"PM":"AM";
    Display_AMPM.innerHTML = span;
    Display_AMPM.classList.add('text-animate-down')
    setTimeout(() => {
        Display_AMPM.classList.remove('text-animate-down')
    }, 200);
})



AM_PM_down.addEventListener('click',() => {
    var last = Display_AMPM.innerHTML;
    var span = last == "AM"?"PM":"AM";
    Display_AMPM.innerHTML = span;
    Display_AMPM.classList.add('text-animate-up')
    setTimeout(() => {
        Display_AMPM.classList.remove('text-animate-up')
    }, 200);
})


























// Add Alarm Box Element


function addbox(){
    let dummy = `
    <div id="alarm-box" class="alarm-box">
        <div class="alarm-time">07:00</div>
        <div class="alarm-controls">
            <div class="alarm-label">
                Good Morning
            </div>
            <div id="switch" class="switch">
                <div id="nob" class="nob"></div>
            </div>
        </div>
        <div class="repeatation">
            <span class="btnday deselect">Sun</span>
            <span class="btnday deselect">M</span>
            <span class="btnday deselect">Tu</span>
            <span class="btnday deselect">We</span>
            <span class="btnday deselect">Th</span>
            <span class="btnday deselect">Fri</span>
            <span class="btnday deselect">Sa</span>
        </div>

    </div>`;

    

    var time = document.createElement('div');
    time.className = 'alarm-time';
    time.innerHTML = '07:00';

    var alarm_label = document.createElement('div');
    alarm_label.className = 'alarm-label';
    alarm_label.innerHTML= 'Good Morning';
    
    var nob = document.createElement('div');
    nob.id = 'nob';
    nob.classList.add('nob')


    var switchbtn = document.createElement('div');
    switchbtn.id = 'switch';
    switchbtn.className = 'switch';
    switchbtn.appendChild(nob)

    var alarmcontrols = document.createElement('div');
    alarmcontrols.className ='alarm-controls';
    alarmcontrols.appendChild(alarm_label)
    alarmcontrols.appendChild(switchbtn)

    var repeatcontrols = document.createElement('div');
    repeatcontrols.className = 'repeatation';

    var box = document.createElement('div')
    box.className = 'alarm-box';
    box.appendChild(time);
    box.appendChild(alarmcontrols);
    box.appendChild(repeatcontrols);

    

    
    
    Alarm_page.appendChild(box)
    
    Add_Alarm_Menu.classList.toggle('hide-menu');
    console.log('added');
}



