function inverserChaine(chaine) {
  var tableauCaracteres = chaine.split("");
  var tableauInverse = tableauCaracteres.reverse();
  var chaineInverse = tableauInverse.join("");

  return chaineInverse;
}

var chaineOriginale = "Bonjour le monde!";
var chaineInverse = inverserChaine(chaineOriginale);
console.log("Chaîne originale :", chaineOriginale);
console.log("Chaîne inversée :", chaineInverse);
