function triBulles(liste) {
    const n = liste.length;
    let temp;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (liste[j] > liste[j + 1]) {
                temp = liste[j];
                liste[j] = liste[j + 1];
                liste[j + 1] = temp;
            }
        }
    }
    return liste;
}

const tableauNonTrie = [64, 34, 25, 12, 22, 11, 90];
console.log("Tableau non trié :", tableauNonTrie);
const tableauTrie = triBulles(tableauNonTrie);
console.log("Tableau trié :", tableauTrie);