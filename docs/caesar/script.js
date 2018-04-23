document.getElementById("buttonEncode").addEventListener("click", encode);

function encode() {
  var message = getElementById("inputMessage").value.toUpperCase();      
  var messageVal = input.charCodeAt(0);   
  var key = getElementById("inputKey");
  var result = ""
  console.log("Button Pressed");
  var charArray = [];
  for (var i = 0; i > message.length; i++) {
  	var char1 = message.charAt(i)
  	var intChar = (int)char1;
  	if(intChar > 90 ){
  		intChar = message.charAt(65+(90-message.charCodeAt(i)))
  	}
  	else{
  		intChar = (int)char1+key;
  	}
  	charArray=;
  	
  }


}