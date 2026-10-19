"use strict";

const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};

const listeEtudiants = [
    { id: 1, nom: "nom1", prenom: "prenom1", age: 21 },
    { id: 2, nom: "nom2", prenom: "prenom2", age: 22 },
    { id: 3, nom: "nom3", prenom: "prenom3", age: 23 }
];

function f1() {
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

function f2() {
    console.log(etudiant);
}

function f3() {
    for (const e of listeEtudiants) {
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}
