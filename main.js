const electron = require('electron')
const { app, BrowserWindow, ipcMain } = electron
const PDFWindow = require('electron-pdf-window')

app.on('ready', () => {
    let win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(`file://${__dirname}/index.html`)
    win.setMenu(null)
})

ipcMain.on('open-new-window', (event, filename) => {
    let win = new PDFWindow({
        width:1280,
        height:720,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(`file://${__dirname}/` + filename + `.pdf`)
    win.setMenu(null)
})

/*
exports.openWindow = (filename) => {
    let win = new PDFWindow({
        width:600,
        height:400,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(`file://${__dirname}` + filename + `.pdf`)
}
*/