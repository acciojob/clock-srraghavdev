//your JS code here. If required.
let f= document.getElementById("timer")
f.innerText= `${getdate()}, ${getime()}`

function getdate(){
let d = new Date();
d=String(d.toISOString())
return `${d.substring(8,10)}/${d.substring(5,7)}/${d.substring(0,4)}`	
}

function getime(){
	let today = new Date()
	var hour = today.getHours();
	let cd="AM"
	if(hour<10)hour = "0"+hour;
	if(hour>=12){ hour= hour-12
				cd="PM"}
	var minute = today.getMinutes();
	if(minute<10)minute = "0"+minute;
	var second = today.getSeconds();
	if(second<10)second = "0"+second;
	return `${hour}:${minute}:${second} ${cd}`
}
