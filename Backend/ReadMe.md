# Backend API - Sophie Bluel

Ce repo contient le code backend de l'architecte Sophie Bluel. 

## Lancement du backend

Après avoir récupéré le REPO executez la commande `npm install` pour installer les dépendances du projet

Une fois les dépendances installées lancez le projet avec la commande `npm start`

Compte de test pour Sophie Bluel

```
email: sophie.bluel@test.tld

password: S0phie 
```
Lien pour voir la
[documentation Swagger](http://localhost:5678/api-docs/)

### Réalisation du travail

<li>Mise en place de mon environnement de travail</li>

Utilisation de VsCode, téléchargement et mise en place des fichiers. Téléchargement de NPM pour les dépendances du projet.
Téléchargement du Guide des bonnes étapes, visualisation de la maquette Figma, aperçu des cours et ressources Openclassrooms.
Clonage du repo sur Git Hub :
            https://github.com/wariwulf/Projet-3-Developpeur-Web-Openclassrooms
Test des routes via Swagger.
Prise en compte du Kanban

<li>Récupération des travaux via l'API</li>

Suppresion du code HTML des la partie works et création d'un fichier works.js. Appel à une fonction et utilisation de fetch pour récupérer les works sur l'API Swagger et incorporation dans le fichier HTML via un script.
La fonction créra autant de div qu'il y aura de works en base de données avec une requête GET.
Création de filtres dynamique qui trient les travaux en fonction de leur catégorie (donc de la Data.).

<li>Création de la page de connexion</li>

Création de login.html à partir deu design de la maquette Figma. 
Authentification de l'utilisateur implémenter grâce à une requête fetch POST qui permet une redirection de l'utilisateur sur la page principale. 
Une fois connecté, le Token de connexion est stocké en Local Storage ( possibilité de changer de stockage par sécurité).
Appel de la fonction aut.js qui, si elle détecte un token valide de connexion, modifie la page pour permettre l'apparition de lien visant à la modification de la page.

<li>Ajout de la modale</li>

Création de deux modale:
1. Modale de Connexion
2. Modale d'ajout.

1. La modale de connexion est implémenter de manière à apparaître un fois cliqué sur le lien "modifier" qui apparaît une fois une l'utilisateur authentifier. Elle permet d'avoir un rendu des travaux grâce à une requête GET et la possibilité de supprimer un works avec une requête DELETE.
Un bouton est implémenter en bas de la modale pour accéder à la modale d'ajout.

2. La modale d'ajout est un formulaire dans le quel ont à deux input et un select.
            1.  Pour l'image
            2.  Pour le Titre
            3.  Pour la catégorie
La categorie est récupérer via une requête Get sur l'API.
Une fois rempli, le formulaire envoie la réponse sur l'API via une requête POST sécurisé avec le token en header.
Si les données sont conformes, elles sont ajouté à la base de donnés. Le works s'affiche alors dans le site.        