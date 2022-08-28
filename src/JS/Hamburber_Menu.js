const MenuButton = document.getElementById('hamburger-menu');
const SideMenu = document.getElementById('side-menu');

MenuButton.addEventListener('click',() => {
    SideMenu.classList.toggle('show');
})

const Clock_switch = document.getElementById('Clock-side-menu');
const Alarm_switch = document.getElementById('Alarm-side-menu');
const Timer_switch = document.getElementById('Timer-side-menu');
const Stopwatch_switch = document.getElementById('Stopwatch-side-menu');
const Settings_switch = document.getElementById('Settings-menu');


const  Clock_View  = document.getElementById('Clock');
const  Alarm_View  = document.getElementById('Alarm');
const  Timer_View  = document.getElementById('Timer');
const  Stopwatch_View  = document.getElementById('Stopwatch');


const Settings_View = document.getElementById('Settings')

Clock_switch.addEventListener('click',() => {
    hideOtherTabs();
    Clock_View.classList.remove('hidden');
    MenuButton.click();
    console.log('Clock_switch');
    
})

Alarm_switch.addEventListener('click',() => {
    hideOtherTabs();
    Alarm_View.classList.remove('hidden');
    MenuButton.click();
    console.log('Alarm_switch');
    
})

Timer_switch.addEventListener('click',() => {
    hideOtherTabs();
    Timer_View.classList.remove('hidden');
    MenuButton.click();
    console.log('Timer_switch');
    
})

Stopwatch_switch.addEventListener('click',() => {
    hideOtherTabs();
    Stopwatch_View.classList.remove('hidden');
    MenuButton.click();
    console.log('Stopwatch_switch');
    
})

Settings_switch.addEventListener('click',() => {
    hideOtherTabs();
    Settings_View.classList.remove('hidden');
    MenuButton.click();
    console.log('Settings_switch');
    
})





function hideOtherTabs(){
    Clock_View.classList.add('hidden');
    Alarm_View.classList.add('hidden');
    Timer_View.classList.add('hidden');
    Stopwatch_View.classList.add('hidden');
    Settings_View.classList.add('hidden');
    

}
