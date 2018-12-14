// Modules to control application life and create native browser window
const {app, BrowserWindow , shell} = require('electron')
const path = require('path')
const fs = require('fs-extra')
const {realpathSync} = require('fs')
const createSymlink = require('create-symlink')
const windowStateKeeper = require('electron-window-state')
const isDev = require('electron-is-dev')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {

    const mainWindowState = windowStateKeeper({
        defaultWidth: 1240,
        defaultHeight: 700,
    })

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: mainWindowState.width,
        height: mainWindowState.height,
        minwidth: 1024,
        minheight: 700,
        x: mainWindowState.x,
        y: mainWindowState.y,
        backgroundColor: '#282c34',
    })

    mainWindowState.manage(mainWindow);

    // and load File or Url the index.html of the app.
    // mainWindow.loadFile('index.html')
    mainWindow.loadURL(isDev? 'http://localhost:3000': `file://${path.join(__dirname, '../build/index.html')}`)

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
    mainWindow.webContents.on('new-window', (e, url) => {
        e.preventDefault()
        shell.openExternal(url)
    })

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.