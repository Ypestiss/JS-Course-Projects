const {app, BrowserWindow} = require('electron');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
    width: 700,
    height: 400,
    resizable:false
    });


    mainWindow.loadFile('game01.html')
};


app.whenReady().then(() => {
    createWindow()
})