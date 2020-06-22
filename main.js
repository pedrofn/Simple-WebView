const { app, BowserWindow, BrowserWindow } = require('electron')

function createWindow() {
    // Criar janela do browser 
const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true 
    }
})

// Carregar o index.html do app 
win.loadfile('index.html')

//Abrir o DevTools
win.webContents.openDevTools()

}

// Este metodod sera chamado quando o electron tiver finalizado
// Inicializado eh pronto para criar as janelas do browser
// Algumas APIs so podem ser usadas antes deste evento ocorrer 
app.whenReady().then(createWindow)

// Sair quando todas as janelas tiver sido fechadas 
app.on('window-all-closed', () => {
    if (process.plataform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})


