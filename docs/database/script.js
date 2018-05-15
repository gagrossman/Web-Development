var config = {
apiKey: "AIzaSyCItJk-gZJEKrc1_EeojSu34aYjjzj9u1k",
authDomain: "list-a71e9.firebaseapp.com",
databaseURL: "https://list-a71e9.firebaseio.com",
projectId: "list-a71e9",
storageBucket: "list-a71e9.appspot.com",
messagingSenderId: "535106653853"
};
firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();
//firebase.auth().signInWithRedirect(provider);

  


document.getElementById("addElement").addEventListener("click", addElement);

function addElement() {
	firebase.database().ref("Gabriel").push(":)");


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