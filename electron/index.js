const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const url = require('node:url')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,
  })

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../build/index.html'),
    protocol: 'file:',
    slashes: true
  })

  win.loadURL(startUrl)

  win.setMenu(null)
  //win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // На MacOS обычно пересоздают окно в приложении,
    // после того, как на иконку в доке нажали и других открытых окон нету.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Выйти когда все окна закрыты
app.on('window-all-closed', function () {
  // Для приложений и строки меню в macOS является обычным делом оставаться
  // активными до тех пор, пока пользователь не выйдет окончательно используя Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})