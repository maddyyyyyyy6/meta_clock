const { BrowserWindow, app, IpcMain, ipcMain, ipcRenderer } = require('electron')
var path = require("path");



let mainWindow

const runWindow = () => {


    var path = require("path");
    var fs = require("fs");
    var initPath = path.join(__dirname, "init.json");
    var data;
    try {
        data = JSON.parse(fs.readFileSync(initPath, 'utf8'));
    }
    catch (e) {
    }
    // Create the browser window.
    // mainWindow = new BrowserWindow((data && data.bounds) ? data.bounds : { width: 800, height: 600 });

    
    mainWindow = new BrowserWindow({
        width: 500,
        height: 600,
        minWidth: 500,
        minHeight: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    mainWindow.setBounds((data && data.bounds)?data.bounds:{ width: 500, height: 600 })

    mainWindow.loadFile('src/main.html')
    mainWindow.show();

    mainWindow.on("close", function () {
        var data = {
            bounds: mainWindow.getBounds()
        };
        fs.writeFileSync(initPath, JSON.stringify(data));
    })

}


app.on('ready', () => {
    runWindow()


})

// app.on('ready', function() {
//     var path = require("path");
//     var fs = require("fs");
//     var initPath = path.join(__dirname, "init.json");
//     var data;
//     try {
//       data = JSON.parse(fs.readFileSync(initPath, 'utf8'));
//     }
//     catch(e) {
//     }
//     // Create the browser window.
//     mainWindow = new BrowserWindow((data && data.bounds) ? data.bounds : {width: 800, height: 600});
//     mainWindow.loadFile('src/main.html')

//     mainWindow.on("close", function() {
//       var data = {
//         bounds: mainWindow.getBounds()
//       };
//       fs.writeFileSync(initPath, JSON.stringify(data));
//     })

// })



ipcMain.on('minimize-screen', () => {
    console.log('Minimize');
    mainWindow.minimize();

})

ipcMain.on('maximize-screen', () => {
    if (mainWindow.isMaximized()) {
        mainWindow.restore();
    } else {
        mainWindow.maximize();
    }
    console.log('Maximize');

})

ipcMain.on('close-screen', () => {
    console.log('Quit')
    app.quit();


})








