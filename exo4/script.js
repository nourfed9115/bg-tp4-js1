
// 1. Représenter un produit
const produitUnique = {
    nom: "Clavier",
    prix: 45,
    quantite: 12
};

const valeurStockUnique = produitUnique.prix * produitUnique.quantite;

console.log(`1. Valeur totale du stock pour ${produitUnique.nom} : ${valeurStockUnique}€`);


// 2. Constituer un catalogue de 5 produits
const catalogue = [
    { nom: "Clavier", prix: 45, quantite: 12 },
    { nom: "Souris", prix: 25, quantite: 30 },
    { nom: "Écran", prix: 150, quantite: 8 },
    { nom: "Casque", prix: 60, quantite: 15 },
    { nom: "Tapis", prix: 10, quantite: 50 }
];

let sommePrix = 0;

for (let i = 0; i < catalogue.length; i++) {
    sommePrix += catalogue[i].prix;
}

const prixMoyen = sommePrix / catalogue.length;

const produitsChers = catalogue.filter(
    produit => produit.prix > prixMoyen
);

console.log(`2. Prix moyen : ${prixMoyen}€`);
console.log("Produits au-dessus du prix moyen :", produitsChers);


// 3. Nombre total d'articles et valeur globale du stock
const totalArticles = catalogue.reduce(
    (accumulateur, produit) => accumulateur + produit.quantite, 0
);

const valeurGlobaleStock = catalogue.reduce(
    (accumulateur, produit) =>
        accumulateur + (produit.prix * produit.quantite), 0
);

console.log(`3. Nombre total d'articles : ${totalArticles}`);
console.log(`3. Valeur globale du stock : ${valeurGlobaleStock}€`);


// 4. Calculer la valeur du stock avec une fonction
function calculerValeurStockProduit(produit) {
    return produit.prix * produit.quantite;
}

console.log(`4. Valeur du stock de Souris : ${calculerValeurStockProduit(catalogue[1])}€`);

console.log(`4. Valeur du stock de Écran : ${calculerValeurStockProduit(catalogue[2])}€`);


// 5. Appliquer différents traitements avec des callbacks
function appliquerTraitementCatalogue(catalogue, callback) {
    catalogue.forEach(produit => callback(produit));
}

console.log("5. Noms des produits du catalogue :");

appliquerTraitementCatalogue(catalogue, produit =>
    console.log(`- ${produit.nom}`)
);

console.log("5. Prix des produits du catalogue :");

appliquerTraitementCatalogue(catalogue, produit =>
    console.log(`- ${produit.prix}€`)
);
