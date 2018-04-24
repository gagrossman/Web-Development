document.getElementById("buttonEncode").addEventListener("click", encode);

function encode() {
  var message = document.getElementById("inputMessage").value.toUpperCase();       
  var key = document.getElementById("inputKey");
  var result = ""
  console.log("Button Pressed");
  var charArray = [];
  for (var i = 0; i < message.length; i++) {
  	var char1 = message.charAt(i)
  	var intChar = message.charCodeAt(i);



  	if(intChar+key > 90 ){
  		//intChar = message.charAt(65+(90-message.charCodeAt(i)))
      intChar = String.fromCharCode(65+(90-intChar))
      console.log(intChar);
  	}
  	else{
  		intChar = String.fromCharCode(intChar+key);
  	}

  	charArray.push(intChar);
  	
  }

for (var i =0; i < charArray.length; i++) {
  result += charArray[i];
}

console.log(charArray);
console.log(result);

}

//Something in the if/else statement isn't working because if i console.log intChar before the statements i can see the numbers but after I only get spaces
