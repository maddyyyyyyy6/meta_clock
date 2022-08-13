const {IpcRenderer, ipcRenderer} = require('electron');

const Minimize_Button = document.getElementById('minimize-button');
const Maximize_Button = document.getElementById('maximize-button');
const Close_Button = document.getElementById('close-button');

Minimize_Button.addEventListener('click',() => {
    ipcRenderer.send('minimize-screen');
})

Maximize_Button.addEventListener('click',() => {
    ipcRenderer.send('maximize-screen');
})

Close_Button.addEventListener('click',() => {
    ipcRenderer.send('close-screen');
})