const Switch = document.getElementsByClassName('nob');
const RepeatDays = document.getElementsByClassName('btnday')
const Alarm_page = document.getElementById('Alarm');
const Save_Alarm = document.getElementById('save-alarm');
// Add alarm menu
const Add_Alarm_Btn = document.getElementById('add-alarm');
const Add_Alarm_Menu = document.getElementById('add-alarm-form');

// this for empty message

const Empty_message = document.getElementById('empty-message')

let isEmpty = true;
let alarms = [];


function checkEmpty() {
    if(isEmpty) {
        // console.log('empty')
        Empty_message.classList.remove('hidden');

        
    }else{
        Empty_message.classList.add('hidden');
        // console.log('ALarm saved')
    }
}

checkEmpty();




let AlarmList = [];
let Listofdays = [];



for (let i = 0; i < RepeatDays.length; i++) {
    RepeatDays[i].addEventListener('click', () => {
        RepeatDays[i].classList.toggle('deselect');
        if (Listofdays.indexOf(i) === -1) {
            Listofdays.push(i);
        }
        else if (Listofdays.indexOf(i) !== -1) {
            console.log(Listofdays.splice(Listofdays.indexOf(i)))
        }
    })
}



for (let i = 0; i < Switch.length; i++) {
    Switch[i].addEventListener('click', () => {
        Switch[i].classList.toggle('on');
    })
}
Add_Alarm_Btn.addEventListener('click', () => {
    console.log('menu');
    Add_Alarm_Menu.classList.toggle('hide-menu');
    // while(!Add_Alarm_Menu.classList.contains('hide')) {
    //     Add_Alarm_Btn.ariaDisabled = 'true';
    // }
})


// code for taking alarm repetation

var weekofdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDays() {
    var selecteddays = []
    for (let i = 0; i < Listofdays.length; i++) {
        selecteddays.push(weekofdays[Listofdays[i]]);
    }
    return selecteddays;
}



class Alarm {
    constructor(id, label, time, days) {
        this.id = id
        this.label = label
        this.time = time
        this.days = days


    }
}



const Label_Alarm = document.getElementById('label-alarm');
const Tune = document.getElementById('tune');
const Snooze = document.getElementById('snooze');


// Add to AlarmList







Save_Alarm.addEventListener('click', () => {
    addtoList();
    addbox();
    addlistenertodelbtn(index);
    index++;
})



var count = 0;
const addtoList = () => {

    var input = Label_Alarm.value;
    AlarmList.push({
        id: count,
        label: input,
        // time: Display_Hour.innerText + ":" + Display_Minute.innerHTML + Display_AMPM.innerText,
        time:{
            hour:Display_Hour.innerText,
            min:Display_Minute.innerText
        },
        repeat: getDays(),
        tune: select_tune_btn.innerText,
        snooze: select_snooze_btn.innerText

    })
    count++;
    console.log(AlarmList)
}

// 














// Add time codes


//  increment time (hour)

const Increment_Hour = document.getElementById('hour-up');
const Decrement_Hour = document.getElementById('hour-down');
const Display_Hour = document.getElementById('hour');


Increment_Hour.addEventListener('click', () => {
    var num = parseInt(Display_Hour.innerHTML);
    if (num === 12) {
        num = 0;
    }
    var incremented = num + 1;
    Display_Hour.innerHTML = incremented < 10 ? "0" + incremented : incremented;
    Display_Hour.classList.add('text-animate-down')
    setTimeout(() => {
        Display_Hour.classList.remove('text-animate-down')
    }, 200);
    console.log(getAlarmtime())
})

Decrement_Hour.addEventListener('click', () => {
    Decrement_Hour.classList.add('clicked');
    var num = parseInt(Display_Hour.innerHTML);
    if (num === 0) {
        decremented = 12;
    } else {
        var decremented = num - 1;

    }
    Display_Hour.innerHTML = decremented < 10 ? "0" + decremented : decremented;
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


Increment_Minute.addEventListener('click', () => {
    var lastmin = parseInt(Display_Minute.innerHTML);
    var incrementmin = lastmin === 60 ? lastmin = 0 : lastmin + 1;
    Display_Minute.innerHTML = incrementmin < 10 ? "0" + incrementmin : incrementmin;
    Display_Minute.classList.add('text-animate-down')
    setTimeout(() => {
        Display_Minute.classList.remove('text-animate-down')
    }, 200);
})

Decrement_Minute.addEventListener('click', () => {
    var lastmin = parseInt(Display_Minute.innerHTML);
    var decrementmin = lastmin === 0 ? lastmin = 60 : lastmin - 1;
    Display_Minute.innerHTML = decrementmin < 10 ? "0" + decrementmin : decrementmin;
    Display_Minute.classList.add('text-animate-up')
    setTimeout(() => {
        Display_Minute.classList.remove('text-animate-up')
    }, 200);
})


// Change Alarm Time span AM/PM

const AM_PM_up = document.getElementById('ampm-up')
const AM_PM_down = document.getElementById('ampm-down')
const Display_AMPM = document.getElementById('ampm')

AM_PM_up.addEventListener('click', () => {
    var last = Display_AMPM.innerHTML;
    var span = last == "AM" ? "PM" : "AM";
    Display_AMPM.innerHTML = span;
    Display_AMPM.classList.add('text-animate-down')
    setTimeout(() => {
        Display_AMPM.classList.remove('text-animate-down')
    }, 200);
})



AM_PM_down.addEventListener('click', () => {
    var last = Display_AMPM.innerHTML;
    var span = last == "AM" ? "PM" : "AM";
    Display_AMPM.innerHTML = span;
    Display_AMPM.classList.add('text-animate-up')
    setTimeout(() => {
        Display_AMPM.classList.remove('text-animate-up')
    }, 200);
})







// recover last setted time

Display_Hour.innerText = localStorage.getItem('last-hour')
Display_Minute.innerText = localStorage.getItem('last-min')




















// Add Alarm Box Element

var index = 0;



function addbox() {
    var time = document.createElement('div');
    time.className = 'alarm-time';
    time.innerHTML = Display_Hour.innerText + ":" + Display_Minute.innerText;

    var input = Label_Alarm.value;
    console.log(input)

    var alarm_label = document.createElement('div');
    alarm_label.className = 'alarm-label';
    alarm_label.innerHTML = Label_Alarm.value;

    var nob = document.createElement('div');
    nob.id = 'nob';
    nob.classList.add('nob');





    var switchbtn = document.createElement('div');
    switchbtn.id = 'switch';
    switchbtn.className = 'switch';
    switchbtn.appendChild(nob)



    var alarmcontrols = document.createElement('div');
    alarmcontrols.className = 'alarm-controls';
    alarmcontrols.appendChild(alarm_label)
    alarmcontrols.appendChild(switchbtn)



    var sunspan = document.createElement('span');
    sunspan.classList.add('deselect');
    sunspan.innerText = "Sun"
    console.log(Listofdays.indexOf(0))
    
    if(Listofdays.indexOf(0) !== -1) {
        sunspan.classList.remove('deselect');

    }
    var monspan = document.createElement('span');
    // monspan.classList.add('btnday');
    monspan.classList.add('deselect');
    monspan.innerText = "M"
    if(Listofdays.indexOf(1) !== -1) {
        monspan.classList.remove('deselect');

    }
    var tuespan = document.createElement('span');
    // tuespan.classList.add('btnday');
    tuespan.classList.add('deselect');
    tuespan.innerText = "Tu"
    if(Listofdays.indexOf(2) !== -1) {
        tuespan.classList.remove('deselect');

    }
    var wedspan = document.createElement('span');
    // wedspan.classList.add('btnday');
    wedspan.classList.add('deselect');
    wedspan.innerText = "We"
    if(Listofdays.indexOf(3) !== -1) {
        wedspan.classList.remove('deselect');

    }
    var thuspan = document.createElement('span');
    // thuspan.classList.add('btnday');
    thuspan.classList.add('deselect');
    thuspan.innerText = "Th"
    if(Listofdays.indexOf(4) !== -1) {
        thuspan.classList.remove('deselect');

    }
    var frispan = document.createElement('span');
    // frispan.classList.add('btnday');
    frispan.classList.add('deselect');
    frispan.innerText = "Fri"
    if(Listofdays.indexOf(5) !== -1) {
        frispan.classList.remove('deselect');

    }
    var satspan = document.createElement('span');
    satspan.classList.add('deselect');
    satspan.innerText = "Sa"
    if(Listofdays.indexOf(6) !== -1) {
        satspan.classList.remove('deselect');

    }






    var repeatcontrols = document.createElement('div');
    repeatcontrols.className = 'repeatation';

    repeatcontrols.appendChild(sunspan);
    repeatcontrols.appendChild(monspan);
    repeatcontrols.appendChild(tuespan);
    repeatcontrols.appendChild(wedspan);
    repeatcontrols.appendChild(thuspan);
    repeatcontrols.appendChild(frispan);
    repeatcontrols.appendChild(satspan);

    // for the delete button

    

    var trashicon = document.createElement('i')
    trashicon.classList.add('fas')
    trashicon.classList.add('fa-trash')

    var delbtn = document.createElement('button')
    delbtn.id = index;
    delbtn.className = 'delete-alarm'
    delbtn.classList.add('hide-btn')

    // function for deleting

    delbtn.appendChild(trashicon)
    // delbtn.addEventListener('click',() => {
    //     deleteAlarm(index);
    // }) 


    var delete_controls = document.createElement('div')
    delete_controls.classList = 'delete-controls'

    delete_controls.appendChild(delbtn)





    var box = document.createElement('div')
    box.className = 'alarm-box';
    box.appendChild(time);
    box.appendChild(alarmcontrols);
    box.appendChild(repeatcontrols);
    box.appendChild(delete_controls)

    // // remove empty text
    // isEmpty = false;
    // checkEmpty()

    Empty_message.classList.add('hide-message');






    Alarm_page.appendChild(box)

    Add_Alarm_Menu.classList.toggle('hide-menu');
    localStorage.setItem('last-hour',Display_Hour.innerText)
    localStorage.setItem('last-min',Display_Minute.innerText)

    for (let i = 0; i < Switch.length; i++) {
        Switch[i].addEventListener('click', () => {
            Switch[i].classList.toggle('on');
        })
    }
    resetDaySelector();
    Label_Alarm.value = ''

    //  for adding listener



}




function addlistenertodelbtn(index) {
    var indexedbtn = document.getElementById(index);
    indexedbtn.addEventListener('click', () => {
        console.log('indexed' + index);
        var alarms_boxs = document.getElementsByClassName('alarm-box');
        console.log(alarms_boxs.length)

        console.log(alarms_boxs[index])
        console.log(alarms_boxs[index].style.display = 'none')
        
        
    });
}

function resetDaySelector() {
    Listofdays = [];
    for(let i = 0;i<RepeatDays.length;i++) {
        RepeatDays[i].classList.add('deselect');
    }
}

function contains(list,item) {
    return list.indexOf(item) === -1? false:true; 
}






// code for edit alarms btn
/*
*    this is for the hide trash btn or show btn
*
*/

const pen_btn = document.getElementById('edit-alarm')


pen_btn.addEventListener('click',showdelbutton)

function showdelbutton() {
    var trashbtns = document.getElementsByClassName('delete-alarm')

    for(let i = 0;i< trashbtns.length;i++) {

        trashbtns[i].classList.toggle('hide-btn')
    }
}


// CODE for deleting alarm box functino



// console.log('mect')
// const delbtn = document.getElementById('delalarm')

// delbtn.addEventListener('click',() => {
//     deleteAlarm(0);
// })

function deleteAlarm(id) {

    // var alarmbox = document.getElementById('alarm-box')
    console.log(id)
    var alarms_boxs = document.getElementsByClassName('alarm-box');
    if(alarms_boxs.length === 0) {
        console.log(alarms_boxs.length + "if")
        isEmpty = true;
        checkEmpty();
    }else{
        console.log(alarms_boxs.length + "else")

        alarms_boxs[id].remove()
        // console.log('process')
        console.log(alarms_boxs.length)
        console.log(alarms_boxs)
    }
    

    // for(let i = 0;i<alarms_boxs.length;i++) {
    //     if(alarms_boxs[i] === id) {
    //         alarms_boxs[i].remove();
    //     }
    // }
}




// 













// code for implementing alarm functionality

// for this first get the input of the user
// 7:00
// match with the alarm control
// go for it
var c = document.querySelector('audio')


// setInterval(() => {
//     var gettime = new Date();
//     var time = gettime.getHours();
//     var min = gettime.getMinutes();
    
//     var inputhour = parseInt(Display_Hour.innerText);
//     var inputmin = parseInt(Display_Minute.innerText);

//     if(inputhour === time-12 && inputmin === min) {
//         console.log('time for alert')
//         c.play()
//     }
// },1000);







// function for selecting the tune for alarm


const select_tune_btn = document.getElementById('select-tune-btn');
const tunes_list = document.getElementById('tunes');

const tunes = document.querySelectorAll('.tune');

select_tune_btn.addEventListener('click', () => tunes_list.classList.toggle('active') )


tunes.forEach(tune => {
    tune.addEventListener('click',() => {
        var selectedtune = tune.innerText;
        select_tune_btn.innerText = selectedtune;
        tunes_list.classList.toggle('active')
        console.log(select_tune_btn.innerText)
    })
} )



// for snooze time selection



const select_snooze_btn = document.getElementById('select-snooze-btn');
const snooze_list = document.getElementById('snoozes');

const times = document.querySelectorAll('.snooze-time');

select_snooze_btn.addEventListener('click', () => snooze_list.classList.toggle('active') )


times.forEach(time => {
    time.addEventListener('click',() => {
        select_snooze_btn.innerText = time.innerText
        snooze_list.classList.toggle('active')
    })
} )








// code for checking the alarm list for hour and time

function checkAlarm(index,time) {
    if(index === 1) {
        AlarmList.forEach(alarm => {
            if(time == alarm.time.hour) {
                return true;
            }else{
                return false;
            }
        })
    }else{
        AlarmList.forEach(alarm => {
            if(time == alarm.time.min) {
                return true;
            }else{
                return false;
            }
        })
    }

}