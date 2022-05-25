## Test technique ASREC

Objectif : Création d’une app React en intégrant l’API REST COUNTRIES afin de récupérer et d’afficher les données des pays.

L’utilisateur doit pouvoir :

Voir l’ensemble des pays.
Rechercher un pays sans avoir à écrire le nom complet depuis un champ de saisie.
Filtrer les pays par monnaie par le biais de plusieurs icônes.
Filtrer les pays par région.
Les données à afficher pour un pays sur la page d’accueil sont :
Drapeau
Nom en français et dans sa propre langue
Capitale
Région
Langue
Nom et symbole de la monnaie
Noms de la population

Couleurs à utiliser :

Couleur primaire : #383089
Couleur secondaire : #70c9e7
Texte : choix libre

Allez plus loin :

Pouvoir basculer l’affichage des pays (table ou carte)
Champ de recherche :
Lancer la recherche si l’utilisateur ne saisit plus de valeurs
Lancer la recherche si la valeur saisie a au moins 3 caractères
Afficher sur l’UI en état de chargement des données
Lors d’un clic sur un pays, afficher des données complémentaires sur une nouvelle page

## Getting started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

This project was bootstrapped with ReactJs.

In addition, I have used Bootstrap CSS to build the project

## Coding process

- Project setup
- Analyzing the Rest Country API
- Create the fetching function
- Create the search filter function
- Create the select filter function
- Display the json data required
- Design the render
- Clean the codebase