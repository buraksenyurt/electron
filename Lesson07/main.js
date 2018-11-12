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
    //win.webContents.openDevTools()
}

ipcMain.on('getSomeWallpaper', (event, path) => {
    const { dialog } = require('electron')
    const fs = require('fs')

    dialog.showOpenDialog({
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
        ]
    },
        function (fileNames) {

            if (fileNames === undefined) {
                console.log("There is no file selected")
            } else {
                var data = {
                    'Title': 'Get title from somewhere',
                    'Summary': 'Summary for image file. You can get this information from a json file.',
                    'Filename': fileNames[0]
                }
                event.sender.send('itsForYou', data)
            }
        })
})

app.on('ready', createWindow)