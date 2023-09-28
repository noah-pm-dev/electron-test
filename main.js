const path = require('path')
const { app, BrowserWindow } = require('electron')

const isDev = process.env.NODE_ENV !== 'production'

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Test App'
    })

    mainWindow.setFullScreen(true)
    //mainWindow.removeMenu()

    if(isDev) {
        mainWindow.webContents.openDevTools()
    }


    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'))
}

app.whenReady().then(() => {
    createMainWindow()
});