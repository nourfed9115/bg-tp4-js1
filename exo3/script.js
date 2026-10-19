"use strict";

const Students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", moyenne: 14, absences: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", moyenne: 7, absences: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", moyenne: 13, absences: 3 }
];

function A() {
    for (const s of Students) {
        if (B(s.moyenne)) {
            console.log(s.id + ": ADMIS");
        } else {
            console.log(s.id + ": AJOURNÉ");
        }
    }
}

function B(moyenne) {
    return moyenne >= 10;
}
