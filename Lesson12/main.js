const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')
const { ipcMain } = require('electron')

let win

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.webContents.openDevTools()

}

ipcMain.on('translate-message', (event, arg) => {
    console.log('Incoming from client ->'+arg)
    event.sender.send('translate-response', 'What did you say?')
})

app.on('ready', createWindow)