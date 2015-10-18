angular.module('myApp')
    .controller('PenduController', function(){
        var self = this;

        self.imgSrc="http://www.pour-enfants.fr/jeux-vacances/dessins-jeu-pendu/dessin-jeu-pendu-0.gif";
        self.mot='';
        self.check=false;
        self.tabMot = [];
        self.lettre ='';
        self.afficher = false;

        self.soummetreMot = function(mot){
            self.mot=mot;
            self.check=true;
            console.log(self.mot);
            for(var i=0; i < mot.length; i++){
                self.tabMot.push({letter : mot.charAt(i), visible : false});
            }
        };

        self.essai = function(lettre){
            console.log("essai");
            for(var i=0; i<self.tabMot.length;i++){
                if(lettre===self.tabMot[i].letter){
                    self.tabMot[i].visible = true;
                    console.log("lettre trouvée");
                }
            }
        };

        //TODO
        //decouper le mot en lettre
        //quand le joueur tente une lettre si elle est bonne elle doit apparaitre sur les _
    });