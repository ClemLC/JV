/* warm up : changer l'acceuil de google en plaçant un bouton devant les éléments centraux*/

let monBouton = document.querySelector('#bienvenu').onclick = function() {
  if(window.getComputedStyle(document.querySelector('#centre')).display=='none'){
    document.querySelector('#centre').style.display="block";
    document.querySelector('#bienvenu').style.display="none";
  }
}
