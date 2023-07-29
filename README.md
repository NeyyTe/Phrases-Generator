# **Projet Les Excuses de Dev**

Ce projet est une application web construit avec ReactJS et plus précisément avec [Create React App](https://github.com/facebook/create-react-app) qui génère aléatoirement des excuses de développeurs.

## **Instructions pour lancer le projet**

Suivez ces 3 étapes pour lancer le projet sur votre pc :
1. ### **Prérequis**

Node.js ( version 12 ou supérieure )  
npm ( généralement installé avec Node.js )  
***
2. ### **Étapes d'installation**

* #### `Clonez le dépôt GitHub sur votre machine avec GitBash` :  
 ```git clone git@github.com:NeyyTe/Phrases-Generator.git```  
 positionnez-vous dessus avec `cd Phrases-Generator` et ouvrez le avec vsCode avec la commande `code.`

* #### `Accédez au répertoire du projet` :

Ouvrir 2 terminaux GitBash dans vsCode :

```cd Phrases-Generator``` sur lequel vous serez deja positionné (pour le front);  
```cd Phrases-Generator/backend``` (pour le back)

* #### `Installez les dépendances du projet` :

```npm install``` sur le front et sur le back ( pour les node_modules )
***
3. ### **Lancer l'application**

Lancez l'application front-end une fois positionné: `npm start`  
Le naviguateur s'ouvrira automatiquement à l'URL suivante : `http://localhost:3000`

Lancer le serveur back-end une fois positionné : `nodemon server`  
`http://localhost:5000/excuses` pour arriver vers la liste des excuses en format json

Vous voila désormais prêt à utiliser l'application !
