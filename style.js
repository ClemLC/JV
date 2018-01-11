/* warm up : changer l'acceuil de google en plaçant un bouton devant les éléments centraux*/

let monBouton = document.querySelector('#bienvenu').onclick = function() {
  if(window.getComputedStyle(document.querySelector('#centre')).display=='none'){
    document.querySelector('#centre').style.display="block";
    document.querySelector('#bienvenu').style.display="none";
  }
}

/* barre de recherche*/

var myButton = document.querySelector('#monlien');

myButton.onclick = function() {
  var mySearch = document.querySelector('#leinput').value;
if(mySearch !== "") {
  document.querySelector('#monlien').href = "https://www.google.fr/#q=" +mySearch
     	}
     }
