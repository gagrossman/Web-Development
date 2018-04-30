document.getElementById("addElement").addEventListener("click", addElement);

function addElement() {
  console.log("Button Pressed");
  var x = document.createElement('li');
  var t = document.createTextNode(document.getElementById("inputElement").value);
  x.appendChild(t);
  document.getElementById("output").appendChild(x);
}