const Splash_Screen = document.getElementById('splash-screen');

function showSplash() {
    Splash_Screen.classList.add('hidden');
    Change_Clock_Btn.classList.remove('hidebtn');

    
}

setTimeout(showSplash,2000)