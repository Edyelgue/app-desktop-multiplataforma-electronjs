const { app, BrowserWindow } = require('electron');

//JANELA PRINCIPAL
var mainWindow = null
async function createWindow(){
	mainWindow = new BrowserWindow({
		width: 800,
		height: 500,
		autoHideMenuBar: true,
		
	})

	await mainWindow.loadFile('src/pages/editor/index.html')
}

//ON READY
app.whenReady().then(createWindow);