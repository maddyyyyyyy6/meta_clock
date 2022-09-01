// All Declarations
const Add_Alarm_Btn = document.getElementById('add-alarm');
const Add_Alarm_Menu = document.getElementById('add-alarm-form');



const RepeatDays = document.getElementsByClassName('btnday')
const Save_Alarm = document.getElementById('save-alarm');
const Cancel_Alarm = document.getElementById('cancel-alarm');
let alarms = [];
let AlarmList = [];
let Listofdays = [];
let index = (localStorage.getItem('alarms-count') == "") ? 0 : parseInt(localStorage.getItem('alarms-count'));
const Label_Alarm = document.getElementById('label-alarm');
const Tune = document.getElementById('tune');
const Snooze = document.getElementById('snooze');

const alarm_list = document.querySelector('#alarm-list')




// Main Alarm Page
const Alarm_page = document.getElementById('Alarm');

// Empty message
const Empty_message = document.getElementById('empty-message')
function checkEmpty() {
    let isEmpty = localStorage.getItem('isEmpty');

    if (isEmpty == true) {
        Empty_message.classList.add('hide-message');


    } else {
        Empty_message.classList.add('hide-message');
    }
}

//* Code On load




//* Code for Refresh List

function getFromLocalStorage() {
    let saved_alarm_list = localStorage.getItem('saved-alarms')
    if (saved_alarm_list.length !== 0) {
        localStorage.setItem('isEmpty', 'false')
        let saved_alarm_json = JSON.parse(saved_alarm_list);

        saved_alarm_json.forEach(alarm => {
            AlarmList.push(alarm);
        })
        checkEmpty();

    }


}
getFromLocalStorage()





function refreshAlarmList() {
    // AlarmList.forEach(alarm => {
    //     checkEmpty();
    //     updatelist0fAlarms(alarm.time.hour, alarm.time.min, alarm.label, alarm)
    // })
    insertAlarm()
}

refreshAlarmList()


//* Code for Add Alarm Form


//* code for setting the default alarm name
Label_Alarm.value = `Alarm(${index})`


Add_Alarm_Btn.addEventListener('click', () => {
    console.log('menu');
    closealarmform();

})

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


//* code for taking alarm repetation

var weekofdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function closealarmform() {
    Add_Alarm_Menu.classList.toggle('hide-menu');
}

function getDays() {
    var selecteddays = []
    for (let i = 0; i < Listofdays.length; i++) {
        selecteddays.push(weekofdays[Listofdays[i]]);
    }
    return selecteddays;
}

$("#save-alarm").click(() => {
    console.log('query')

})





Save_Alarm.addEventListener('click', () => {
    // addtoList();
    // addbox();
    // addlistenertodelbtn(index);
    // lasttimesetted();
    // incrementIndex();
    insertAlarm();

})

// add to list using template literals

function insertAlarm() {

    AlarmList.forEach(alarm => {
        alarm_list.innerHTML += `<div  id="${alarm.index}" class="alarm-box">
                                <div class="alarm-time">${alarm.time.hour} ${alarm.time.min}</div>

                                <div class="alarm-controls">
                                    <div class="alarm-label">${alarm.label}</div>
                                    <div id="switch" class="switch">
                                        <div id="nob" class="nob ${alarm.state}"></div>
                                    </div>
                                </div>
                                <div class="repeatation">
                                    <span class="card-days deselect">Sun</span>
                                    <span class="card-days deselect">M</span>
                                    <span class="card-days deselect">Tu</span>
                                    <span class="card-days deselect">We</span>
                                    <span class="card-days deselect">Th</span>
                                    <span class="card-days deselect">Fri</span>
                                    <span class="card-days deselect">Sa</span>
                                </div>
                                <div class="delete-controls">
                                    <button class="delete-alarm hide-btn" onclick="deleteAlarm(${alarm.id})">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>`

    })

}



Cancel_Alarm.addEventListener('click', () => {
    closealarmform();

})

const addtoList = () => {
    var input = Label_Alarm.value;
    addtoAlarmList(input, index);
    updateLocalStoragelist();
}

function updateLocalStoragelist() {
    let listdumb = JSON.stringify(AlarmList);
    save_alarm_to_localstorage(listdumb);
}

// add to alarmlist


function addtoAlarmList(input, index) {
    AlarmList.push({
        id: index,
        label: input,
        time: {
            hour: Display_Hour.innerText,
            min: Display_Minute.innerText
        },
        repeat: getDays(),
        tune: select_tune_btn.innerText,
        snooze: select_snooze_btn.innerText
    });
}

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



Display_Hour.innerText = localStorage.getItem('last-hour')
Display_Minute.innerText = localStorage.getItem('last-min')




// Add Alarm Box Element


function save_alarm_to_localstorage(listdumb) {
    localStorage.setItem('saved-alarms', listdumb);
}




function addbox() {
    var time = document.createElement('div');
    time.className = 'alarm-time';
    time.innerHTML = Display_Hour.innerText + ":" + Display_Minute.innerText;
    let input = Label_Alarm.value;
    let alarm_label = document.createElement('div');
    alarm_label.className = 'alarm-label';
    alarm_label.innerHTML = input;
    let nob = document.createElement('div');

    nob.id = 'nob';
    nob.classList.add('nob');

    let switchbtn = document.createElement('div');
    switchbtn.id = 'switch';
    switchbtn.className = 'switch';
    switchbtn.appendChild(nob)
    onclickforswitch(switchbtn, nob)

    let alarmcontrols = document.createElement('div');
    alarmcontrols.className = 'alarm-controls';
    alarmcontrols.appendChild(alarm_label)
    alarmcontrols.appendChild(switchbtn)

    let sunspan = document.createElement('span'); sunspan.classList.add('deselect');
    sunspan.innerText = "Sun";
    isthisdayselected(sunspan, 0);

    let monspan = document.createElement('span'); monspan.classList.add('deselect');
    monspan.innerText = "M"
    isthisdayselected(monspan, 1);

    let tuespan = document.createElement('span'); tuespan.classList.add('deselect');
    tuespan.innerText = "Tu"
    isthisdayselected(tuespan, 2);

    let wedspan = document.createElement('span'); wedspan.classList.add('deselect');
    wedspan.innerText = "We"
    isthisdayselected(wedspan, 3);

    let thuspan = document.createElement('span'); thuspan.classList.add('deselect');
    thuspan.innerText = "Th"
    isthisdayselected(thuspan, 4);

    let frispan = document.createElement('span'); frispan.classList.add('deselect');
    frispan.innerText = "Fri"
    isthisdayselected(frispan, 5);

    let satspan = document.createElement('span'); satspan.classList.add('deselect');
    satspan.innerText = "Sa"
    isthisdayselected(satspan, 6);

    let days = [sunspan, monspan, tuespan, wedspan, thuspan, frispan, satspan]

    let repeatcontrols = document.createElement('div');
    repeatcontrols.className = 'repeatation';

    days.forEach(day => {
        repeatcontrols.appendChild(day)
    })


    // for the delete butto
    let trashicon = document.createElement('i')
    trashicon.classList.add('fas')
    trashicon.classList.add('fa-trash')
    let delbtn = document.createElement('button')
    delbtn.id = index;
    delbtn.className = 'delete-alarm'
    delbtn.classList.add('hide-btn')
    delbtn.onclick = deleteAlarm(this);

    // function for deleting
    delbtn.appendChild(trashicon)
    let delete_controls = document.createElement('div')
    delete_controls.classList = 'delete-controls'
    delete_controls.appendChild(delbtn)

    let components = [time, alarmcontrols, repeatcontrols, delete_controls];

    let box = document.createElement('div')
    box.className = 'alarm-box';

    components.forEach(element => {
        box.appendChild(element)
    })

    Empty_message.classList.add('hide-message');

    Alarm_page.appendChild(box)

    Add_Alarm_Menu.classList.toggle('hide-menu');
}





function incrementIndex() {
    index++;
    localStorage.setItem('alarms-count', index);
}

function lasttimesetted() {
    localStorage.setItem('last-hour', Display_Hour.innerText);
    localStorage.setItem('last-min', Display_Minute.innerText);
}

function isthisdayselected(day, index) {
    if (Listofdays.indexOf(index) !== -1) {
        day.classList.remove('deselect');

    }
}

function updatelist0fAlarms(hour, min, label, index) {
    let time = document.createElement('div');
    time.className = 'alarm-time';
    time.innerHTML = hour + ":" + min;
    let alarm_label = document.createElement('div');
    alarm_label.className = 'alarm-label';
    alarm_label.innerHTML = label;
    let nob = document.createElement('div');
    nob.id = 'nob';
    nob.classList.add('nob');
    let switchbtn = document.createElement('div');
    switchbtn.id = 'switch';
    switchbtn.className = 'switch';
    switchbtn.appendChild(nob)
    onclickforswitch(switchbtn, nob);

    let alarmcontrols = document.createElement('div');
    alarmcontrols.className = 'alarm-controls';
    alarmcontrols.appendChild(alarm_label)
    alarmcontrols.appendChild(switchbtn)

    let sunspan = document.createElement('span');
    sunspan.classList.add('deselect');
    sunspan.innerText = "Sun"

    if (Listofdays.indexOf(0) !== -1) {
        sunspan.classList.remove('deselect');

    }
    let monspan = document.createElement('span');
    // monspan.classList.add('btnday');
    monspan.classList.add('deselect');
    monspan.innerText = "M"
    if (Listofdays.indexOf(1) !== -1) {
        monspan.classList.remove('deselect');

    }
    let tuespan = document.createElement('span');
    // tuespan.classList.add('btnday');
    tuespan.classList.add('deselect');
    tuespan.innerText = "Tu"
    if (Listofdays.indexOf(2) !== -1) {
        tuespan.classList.remove('deselect');

    }
    let wedspan = document.createElement('span');
    // wedspan.classList.add('btnday');
    wedspan.classList.add('deselect');
    wedspan.innerText = "We"
    if (Listofdays.indexOf(3) !== -1) {
        wedspan.classList.remove('deselect');

    }
    let thuspan = document.createElement('span');
    // thuspan.classList.add('btnday');
    thuspan.classList.add('deselect');
    thuspan.innerText = "Th"
    if (Listofdays.indexOf(4) !== -1) {
        thuspan.classList.remove('deselect');

    }
    let frispan = document.createElement('span');
    // frispan.classList.add('btnday');
    frispan.classList.add('deselect');
    frispan.innerText = "Fri"
    if (Listofdays.indexOf(5) !== -1) {
        frispan.classList.remove('deselect');

    }
    let satspan = document.createElement('span');
    satspan.classList.add('deselect');
    satspan.innerText = "Sa"
    if (Listofdays.indexOf(6) !== -1) {
        satspan.classList.remove('deselect');

    }

    let repeatcontrols = document.createElement('div');
    repeatcontrols.className = 'repeatation';

    repeatcontrols.appendChild(sunspan);
    repeatcontrols.appendChild(monspan);
    repeatcontrols.appendChild(tuespan);
    repeatcontrols.appendChild(wedspan);
    repeatcontrols.appendChild(thuspan);
    repeatcontrols.appendChild(frispan);
    repeatcontrols.appendChild(satspan);

    // for the delete button

    let trashicon = document.createElement('i')
    trashicon.classList.add('fas')
    trashicon.classList.add('fa-trash')

    let delbtn = document.createElement('button')
    delbtn.id = index;
    delbtn.className = 'delete-alarm'
    delbtn.classList.add('hide-btn')
    delbtn.onclick = () => {
        console.log(index)
        console.log(delbtn.parentElement)
    }

    // function for deleting

    delbtn.appendChild(trashicon)
    // delbtn.addEventListener('click',() => {
    //     deleteAlarm(index);
    // }) 


    let delete_controls = document.createElement('div')
    delete_controls.classList = 'delete-controls'

    delete_controls.appendChild(delbtn)

    let box = document.createElement('div')
    box.className = 'alarm-box';
    box.appendChild(time);
    box.appendChild(alarmcontrols);
    box.appendChild(repeatcontrols);
    box.appendChild(delete_controls)


    alarm_list.appendChild(box)

}




function onclickforswitch(switchbtn, nob) {
    switchbtn.onclick = () => {
        nob.classList.toggle('on');
    };
}

function addlistenertodelbtn(index) {
    let indexedbtn = document.getElementById(index);
    indexedbtn.addEventListener('click', () => {
        console.log('indexed' + index);
        let alarms_boxs = document.getElementsByClassName('alarm-box');
        console.log(alarms_boxs.length)

        console.log(alarms_boxs[index])
        console.log(alarms_boxs[index].style.display = 'none')


    });
}

function resetDaySelector() {
    Listofdays = [];
    for (let i = 0; i < RepeatDays.length; i++) {
        RepeatDays[i].classList.add('deselect');
    }
}

function contains(list, item) {
    return list.indexOf(item) === -1 ? false : true;
}






// code for edit alarms btn
/*
*    this is for the hide trash btn or show btn
*
*/

const pen_btn = document.getElementById('edit-alarm')


pen_btn.addEventListener('click', showdelbutton)
let editClicked = false;
function showdelbutton() {
    if (!editClicked) {
        $(".delete-alarm").addClass("hide-btn")
        editClicked = true;
    } else {
        $(".delete-alarm").removeClass("hide-btn")

        editClicked = false
    }

    // let trashbtns = document.getElementsByClassName('delete-alarm')
    // if (edit) {
    //     for (let i = 0; i < trashbtns.length; i++) {
    //         trashbtns[i].classList.remove('hide-btn')
    //     }

    // } else {
    //     for (let i = 0; i < trashbtns.length; i++) {
    //         trashbtns[i].classList.add('hide-btn')
    //     }
    //     edit = true;
    // }


}


// CODE for deleting alarm box functino



// console.log('mect')
// const delbtn = document.getElementById('delalarm')

// delbtn.addEventListener('click',() => {
//     deleteAlarm(0);
// })

function deleteAlarm(index) {
    console.log(AlarmList)
    AlarmList.splice(index)



}




// 













// code for implementing alarm functionality

// for this first get the input of the user
// 7:00
// match with the alarm control
// go for it
let c = document.querySelector('audio')


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

select_tune_btn.addEventListener('click', () => tunes_list.classList.toggle('active'))


tunes.forEach(tune => {
    tune.addEventListener('click', () => {
        var selectedtune = tune.innerText;
        select_tune_btn.innerText = selectedtune;
        tunes_list.classList.toggle('active')
        console.log(select_tune_btn.innerText)
    })
})



// for snooze time selection



const select_snooze_btn = document.getElementById('select-snooze-btn');
const snooze_list = document.getElementById('snoozes');

const times = document.querySelectorAll('.snooze-time');

select_snooze_btn.addEventListener('click', () => snooze_list.classList.toggle('active'))


times.forEach(time => {
    time.addEventListener('click', () => {
        select_snooze_btn.innerText = time.innerText
        snooze_list.classList.toggle('active')
    })
})








// code for checking the alarm list for hour and time

// function checkAlarm(index, time) {
//     if (index === 1) {
//         AlarmList.forEach(alarm => {
//             if (time == alarm.time.hour) {
//                 return true;
//             } else {
//                 return false;
//             }
//         })
//     } else {
//         AlarmList.forEach(alarm => {
//             if (time == alarm.time.min) {
//                 return true;
//             } else {
//                 return false;
//             }
//         })
//     }

// }