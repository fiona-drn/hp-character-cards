fetch('https://hp-api.onrender.com/api/characters')
    .then(r=> r.json())
    .then(data => { afficherPerso(data);
})
    .catch(error => console.error("Erreur :", error));

function afficherPerso(personnages) {
    const container = document.getElementById("conteneur_cartes");
    personnages.forEach(perso => {

    const creerCarte = document.createElement("div");
    creerCarte.classList.add("carte");

    creerCarte.innerHTML = `
    <img src = "${perso.image}" alt="${perso.name}">
    <h2>${perso.name}</h2>
    <p> Maison: ${perso.house || "Aucune"} </p>
    <p> Acteur: ${perso.actor} </p>
    `;

    container.appendChild(creerCarte);
    });

}

