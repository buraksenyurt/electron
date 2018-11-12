const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path')
const { ipcMain } = require('electron')

let win

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        splash: true
    }))
}

ipcMain.on('async-message-pipe', (event, arg) => {
    console.log(arg)
    event.sender.send('async-reply', 'Bana "' + arg + '" mesajını gönderdin')
})

app.on('ready', createWindow)