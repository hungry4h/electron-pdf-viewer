const {ipcRenderer} = require('electron');

const list = [
    { id : "sample", name : "sample", filename : "sample"},
    { id : "sample.1", name : "sample.1", filename : "sample.1"},
    { id : "sample.2", name : "sample.2", filename : "sample.2"}
] 

for(i=0; i<list.length; i++) {
    const login = document.getElementById(list[i].id);
    const filename = list[i].filename;
    
    login.addEventListener('click', () => {
        ipcRenderer.send('open-new-window', filename);
    }, false);
}
