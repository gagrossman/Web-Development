document.getElementById("addElement").addEventListener("click", addElement);

function addElement() {
  console.log("Button Pressed");
  var x = document.createElement('li');
  var t = document.createTextNode(document.getElementById("inputElement").value);

  if(document.getElementById("inputElement").value == ''){

  }
  else{
  	if(document.getElementById("inputElement").value.toLowerCase().charAt(0) == 'a' | document.getElementById("inputElement").value.toLowerCase().charAt(0) == 'e' | document.getElementById("inputElement").value.toLowerCase().charAt(0) == 'i' | document.getElementById("inputElement").value.toLowerCase().charAt(0) == 'o' | document.getElementById("inputElement").value.toLowerCase().charAt(0) == 'u' | document.getElementById("inputElement").value.toLowerCase().charAt(0) == 'y') {
 		x.setAttribute("class", "vowel");
 	 }
 
 	 x.appendChild(t);
 	 document.getElementById("output").appendChild(x);
}
}