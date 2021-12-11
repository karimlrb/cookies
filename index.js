document.cookie = "prenom=karim";

// Afficher un cookie
// alert(document.cookie);

// Modifier un cookie
document.cookie = "prenom=Larbi";

// Supprimer un cookie
document.cookie = "prenom=";

// Options
let date = new Date(Date.now() + 30);
date = date.toUTCString();
document.cookie = "prenom=karim; path=/";
document.cookie =
  "prenom=karim; path=/; domain=http://127.0.0.1:5500/; secure ; expires=" +
  date;
//   avec maxe-age on peut mettre nos millisecondes sans les convertires
