angular.module('myApp')
    .controller('PenduController', function(){
        var self = this;
        self.imgSrc="http://www.pour-enfants.fr/jeux-vacances/dessins-jeu-pendu/dessin-jeu-pendu-0.gif";
        self.mot="";
        self.check=false;

        self.soummetreMot = function(mot){
            self.mot=mot;
            self.check=true;
            console.log(self.check);
        };

        //TODO
        //decouper le mot en lettre
        //quand le joueur tente une lettre si elle est bonne elle doit apparaitre sur les _
    });