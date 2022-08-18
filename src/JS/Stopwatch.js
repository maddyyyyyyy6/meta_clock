// const milli_second = document.getElementById('milli-secs');
// const Second = document.getElementById('seconds');
// const Minutes = document.getElementById('minutes');
// const Hours = document.getElementById('hours');
// const run_stop = document.getElementById('run');
// const reset_watch = document.getElementById('reset-watch');

// var running = false;


// reset_watch.addEventListener('click',() => {
//     milli_second.innerHTML = "00";
//     Second.innerHTML = "00";
//     Minutes.innerHTML = "00";
//     Hours.innerHTML = "00";
    
// })

// var secondlast = 0;
// var minutelast = 0;
// var secondlast = 0;

// run_stop.addEventListener('click',() => {
    

//         setInterval(() => {
//             // var last = parseInt(milli_second.innerHTML)
//             // console.log(last)
//             // if(last === 100) {
//                 // last = 0;
//                 // var secondlast = parseInt(Second.innerHTML);
//                 console.log(secondlast)
//                 if(secondlast === 60) {
//                     secondlast = 0
//                     // var minutelast = parseInt(Minutes.innerHTML);
//                     console.log("minute" + minutelast)
//                     if(minutelast === 60) {
//                         // minutelast = 60;
//                         var pasthour = parseInt(Hours.innerHTML);
//                         Hours.innerHTML = pasthour + 1;
//                     }
//                     Minutes.innerHTML = minutelast < 10?"0" + ++minutelast : ++minutelast;
//                 }
//                 Second.innerHTML = secondlast < 10?"0" + secondlast++ : ++secondlast;
//             // }
            
//             // milli_second.innerHTML = last < 10 ? last + 1:last+1;
//         }, 1000);
// })


var secondsdis = 0;
var tens = 00;
var appendtens = document.getElementById('milli-secs');
var watch = document.getElementById('runner');
var buttonStart = document.getElementById('run');
var buttonStop = document.getElementById('stop');
var buttonReset = document.getElementById('reset-watch');
var interval;


buttonStart.addEventListener('click',start)
buttonStop.addEventListener('click',stop)
buttonReset.addEventListener('click',reset)




function stopwatch() {
    secondsdis++;

    let hrs = Math.floor(secondsdis / 3600);
    let mins = Math.floor((secondsdis - (hrs * 3600)) / 60);
    let secs = secondsdis % 60;
    hrs = hrs < 10? "0" + hrs:hrs;
    secs = secs < 10? "0" + secs:secs;
    mins = mins < 10? "0" + mins:mins;

    watch.innerHTML = `${hrs}:${mins}:${secs}`;

    
}

stopwatch();


function start(){
    if(interval) {
        return;
    }

    interval = setInterval(stopwatch,1000)
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    secondsdis = 0;
    watch.innerHTML = "00:00:00"
}
































// function startTimer() {
//     tens++;

//     if(tens < 9) {
//         appendtens.innerHTML = "0" + tens;

//     }
//     if(tens > 9) {
//         appendtens.innerHTML =tens;

//     }
//     if (tens  > 99){
//         secondsdis++;
//         appendseconds.innerHTML = "0" + secondsdis;
//         tens = 0;
//         appendtens.innerHTML = "0" + 0;

//     }
//     if(secondsdis < 9) {
//         appendseconds.innerHTML = "0" + secondsdis;
//     }

//     if(secondsdis>9) {
//         appendseconds.innerHTML = secondsdis;
//     }
//     console.log(secondsdis)
// }


// buttonStart.onclick = () => {
//     interval = setInterval(startTimer);

// }
// buttonStop.onclick = () => {
//     clearInterval(interval);

// }

// buttonReset.onclick = () => {
//     clearInterval(interval);
//     tens = "00";
//     secondsdis = "00";
//     appendseconds.innerHTML =secondsdis;
//     appendtens.innerHTML = tens;    

// }






