//your JS code here. If required.
let f= document.getElementById("timer")
f.innerText= `${getdate()}`

function getdate(){
const d = new Date();
d.toISOString()
return `${d.substring(8,10)}/${d.substring(5,7)}/${d.substring(0,4)}`	
}