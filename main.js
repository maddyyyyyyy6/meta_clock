const {BrowserWindow, app,IpcMain, ipcMain} = require('electron')

let mainWindow

const runWindow = () => {
    mainWindow = new BrowserWindow({
        width:500,
        height:600,
        minWidth:500,
        minHeight:600,
        frame:false,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    })

    mainWindow.loadFile('src/main.html')
    mainWindow.show()

    
}


app.on('ready',() => {
    runWindow()
    
})

ipcMain.on('minimize-screen',() => {
    console.log('Minimize');
    mainWindow.minimize();

})

ipcMain.on('maximize-screen',() => {
    if(mainWindow.isMaximized()){
        mainWindow.restore();
    }else{
        mainWindow.maximize();
    }
    console.log('Maximize');

})