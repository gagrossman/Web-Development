var button1 = document.getElementById('b1');
button1.addEventListener("click", buttonPress1);

var button2 = document.getElementById('b2');
button2.addEventListener("click", buttonPress2);

var button3 = document.getElementById('b3');
button3.addEventListener("click", buttonPress3);

var button4 = document.getElementById('b4');
button4.addEventListener("click", buttonPress4);

function buttonPress1() {
	console.log("buttonPress1");
	var val1  = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	var result = (val1*1+val2*1);
	document.getElementById("result").innerHTML = result;
}

function buttonPress2() {
	console.log("buttonPress2");
	var val1  = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	var result = (val1*1-val2*1);
	document.getElementById("result").innerHTML = result;
}

function buttonPress3() {
	console.log("buttonPress3");
	var val1  = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	var result = (val1*1*val2*1);
	document.getElementById("result").innerHTML = result;
}

function buttonPress4() {
	console.log("buttonPress4");
	var val1  = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	var result = ((val1*1)/(val2*1));
	document.getElementById("result").innerHTML = result;
}