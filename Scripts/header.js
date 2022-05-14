"use strict"

function header() {
	document.getElementById("header").innerHTML = 'j';
	let obj = new XMLHttpRequest();
	obj.open('GET', './header.html', true);
	obj.onreadystatechange = function()
	{
		if (obj.readyState === 4 && obj.status === 200) {
			let str = obj.responseText;
			let qdt = str.match(/<div class="header"><\/div>/g);
			document.getElementById("header").style.display = '';
			for (let i = 0; i < qdt.length; i++) {
				alert(qdt[i]);
				documentgetElementById("header").innerHTML += qdt[i];
			}
		}
		alert('out');
	};
	obj.send(null);
	alert("Out");
}		

header();