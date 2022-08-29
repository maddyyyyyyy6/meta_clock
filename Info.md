TODO List for Clock App

*1.  Window Frame
*2.  Splash Screen
*3.  Clock
*4.  Digital Clock
*5.  Analog  Clock
*6.  Hamburger Menu
*7.  Hamburger Menu Functioning
*8.  Tabs in Hamburger Menu
*9.  Added Alarm Tab
*10. Added Alarm Add Button
*11. Added Alarm Add Menu
*12. Timer Tab
*13. Timer Controls
*14. Stopwatch Controls UI and Design
*15. Added Hamburger Funtioning
16. Alarm add feature
17. Stopwatch counting
18. Light Dark Mode
19. some theme twickes
20. Title Bar button hover effects

implement for alarm




[{
    id:1,
    label:"Good Morning",
    time:"07:00",
    repeat:[""],
    tune:"Morning vibes",
    snooze:5
}]

function iterate(time) {
    alarms.foreach(alarm => {
        check(time,alarm.time)
    })
}

check(time,alarm.time) {
    if(time)
}


