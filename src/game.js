import { start } from "text-rts-wasm";

// prevent the context menu from popping up on a right click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

start();
