import { start } from "text-rts-wasm";

// prevent the context menu from popping up on a right click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// prevent the find function from popping up on f3
window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
        e.preventDefault();
    }
})

start();
