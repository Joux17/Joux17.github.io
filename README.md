# Joux17.github.io

## Prérequis
* Installer NodeJS et NPM
* Installer grunt-cli
```
npm install grunt-cli
```
* Installer bower
```
npm install -g bower
```

## Installation de l'environnement de développement
* Récupérer les dépendances nécessaires
```
npm install
bower install
./node_modules/grunt-protractor-runner/node_modules/.bin/webdriver-manager update
```
* Lancer l'application
```
grunt serve
```
* Lancer les tests d'IHM (Chrome uniquement)
```
grunt test-e2e
```
