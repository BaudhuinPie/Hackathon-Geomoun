import React from "react";
import logo1 from "./../Logos/sdg-01-picto-fr.png";
import logo2 from "./../Logos/sdg-02-picto-fr.jpg";
import logo3 from "./../Logos/sdg-03-picto-fr.jpg";
import logo4 from "./../Logos/sdg-04-picto-fr.jpg";


const objectifs = [
  "init",
  [<img src={logo1} alt="Faim zéro" width="150px" height="Pas de pauvreté"/>],
  [<img src={logo2} alt="Faim zéro" width="150px" height="auto"/>],
  [<img src={logo3} alt="Faim zéro" width="150px" height="Bonne santé & Bien-Être"/>],
  [<img src={logo4} alt="Faim zéro" width="150px" height="Education de qualité"/>],
  "Egalité des sexes",
  "Eau propre & Assainissement",
  "Energie propre & abordable",
  "Travail décent & Croissance",
  "Industrie, Innovation & Infrastructure",
  "Inégalités Réduites",
  "Villes & Communautés durables",
  "Production et Consommation Responsable",
  "Percevoir les efforts contre les changements climatiques",
  "Vie aquatique",
  "Vie terrestre",
  "Paix, Justice & Institutions efficaces"
];
export default objectifs;
export function getObjectif(index) {
  return objectifs[index];
}
