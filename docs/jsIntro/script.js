document.write('<h1>Good Afternoon</h1>');

console.log(document);
console.log(window);
//window.alert('doink')
//window.close('console')
var s = document.getElementById("scriptable");
console.log(s);
// s.style.backgroundColor = 'red';

var button = document.getElementById('b1');
button.addEventListener("click", buttonPress)

var counter = 0;

function buttonPress() {
	counter = counter+1;
    if (counter %2==0) {
		document.getElementById('scriptable').innerHTML = "Red";
		document.body.style.background = 'red';

	}
	else{
		document.getElementById('scriptable').innerHTML = "Blue";
		document.body.style.background = 'blue';
	}
}