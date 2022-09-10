'use strict'

const Button_o = document.getElementById("open");
const Button_c = document.getElementById("close");
const Dialog = document.getElementById("dialog");
const Full = document.getElementById('fullScreen')
Button_o.addEventListener('click',() => {
	Full.requestFullscreen();
});

Button_c.addEventListener('click', () => {
	Dialog.close();
});