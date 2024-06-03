// Sélectionnez les boutons pour les années
const annee1Button = document.getElementById("annee1");
const annee2Button = document.getElementById("annee2");

// Sélectionnez la div où la barre de progression sera affichée
const progressionLangagesDiv = document.getElementById("progressionLangages");

// Données des pourcentages par langage pour chaque année
const pourcentagesAnnee1 = {
  HTML: 80,
  CSS: 70,
  JS: 60,
  PYTHON: 50,
  SQL: 40
};

const pourcentagesAnnee2 = {
  HTML: 90,
  CSS: 80,
  JS: 70,
  PYTHON: 60,
  SQL: 50
};

// Fonction pour créer et afficher une barre de progression
function afficherBarreProgression(langage, pourcentage) {
  const barreProgression = document.createElement("div");
  barreProgression.classList.add("barre-progress");
  barreProgression.innerHTML = `
    <div class="langage">${langage}</div>
    <div class="progress">
      <div class="progress-bar" style="width: ${pourcentage}%;">${pourcentage}%</div>
    </div>
  `;
  return barreProgression;
}

// Fonction pour mettre à jour les barres de progression selon l'année sélectionnée
function mettreAJourBarresProgression(pourcentages) {
  // Efface les barres de progression existantes
  progressionLangagesDiv.innerHTML = "";

  // Pour chaque langage, crée et affiche la barre de progression correspondante
  for (const [langage, pourcentage] of Object.entries(pourcentages)) {
    progressionLangagesDiv.appendChild(afficherBarreProgression(langage, pourcentage));
  }
}

// Ajouter des écouteurs d'événements pour les boutons d'année
annee1Button.addEventListener("click", () => {
  mettreAJourBarresProgression(pourcentagesAnnee1);
});

annee2Button.addEventListener("click", () => {
  mettreAJourBarresProgression(pourcentagesAnnee2);
});

// // Par défaut, afficher les pourcentages de la première année
// mettreAJourBarresProgression(pourcentagesAnnee1);
