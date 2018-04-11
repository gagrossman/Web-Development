var button = document.getElementById('b1');
button.addEventListener("click", buttonPress);

function buttonPress() {
	var val1  = document.getElementById("input1").value;
	var val2 = document.getElementById("input2").value;
	var sum = (val1*1+val2*1);
	document.getElementById("result").innerHTML = sum;
}