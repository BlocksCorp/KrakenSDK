const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');
fetch('manifest.webapp')
.then(response => response.json())
.then(data => {
  console.log(data);

var Name = console.log(data.name);
var maxWidth = console.log(data.maxwidth)
var minWidth = console.log(data.minwidth)
var maxHeight = console.log(data.maxheight)
var minHeight = console.log(data.minheight)


process.env.NODE_ENV = 'production';

const isMac = process.platform === 'darwin';

//Creates the main window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: Name,
        icon: `/icons/icon256.png`,
        width: maxWidth,
        height: maxHeight,
        'minWidth': minWidth,
        'minHeight': minHeight,
    });

    mainWindow.loadFile(path.join(__dirname, './data/main.html'));

}

//Loads backend when ready
app.whenReady().then(() => {
    createMainWindow();

    //MenuMenu
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu)

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    })
});

//Menu fix
const menu = [];

app.on('window-all-closed', () => {
    if(!isMac) {
        app.quit()
    }
})
})