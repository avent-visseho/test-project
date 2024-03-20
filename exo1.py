
def somme_liste(liste_entiers):
    somme = 0
    for nombre in liste_entiers:
        somme += nombre
    return somme

# Exemple d'utilisation de la fonction
liste = [1, 2, 3, 4, 5]
resultat = somme_liste(liste)
print("La somme des entiers dans la liste est :", resultat)