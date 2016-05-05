angular.module('myApp')
    .controller('PenduController', function(){
        var self = this;

        self.message='';
        self.lettre='';

        self.imgSrc="http://www.pour-enfants.fr/jeux-vacances/dessins-jeu-pendu/dessin-jeu-pendu-0.gif";
        self.imgSrcPerdu="http://www.pour-enfants.fr/jeux-vacances/dessins-jeu-pendu/dessin-jeu-pendu-perdu-.gif";
        self.mot='';
        self.check=false;
        self.tabMot = [];
        self.lettre ='';
        self.afficher = false;
        self.trouve = null;
        self.nbErr=0;
        self.tabLettreErreur = [];
        self.isDisabled=false;

        self.soummetreMot = function(mot){
            if(mot === null || mot === undefined || mot===''){
                self.message = "Veuillez renseigner un mot.";
            } else {
                self.mot=mot;
                self.check=true;
                for(var i=0; i < mot.length; i++){
                    self.tabMot.push({letter : mot.charAt(i), visible : false});
                }
                self.message = '';
            }
            
        };

        self.essai = function(lettre){
            if(self.nbErr<6){
                self.trouve=false;
                for(var i=0; i<self.tabMot.length;i++){
                    if(lettre===self.tabMot[i].letter){
                        self.tabMot[i].visible = true;
                        self.trouve=true;
                    }
                }
                if(self.trouve===true){
                }
                else{
                    self.nbErr += 1;
                    self.tabLettreErreur.push(lettre);
                }
                self.imgSrc="http://www.pour-enfants.fr/jeux-vacances/dessins-jeu-pendu/dessin-jeu-pendu-"+self.nbErr+".gif";
                self.lettre='';
            }
            else{
                self.isDisabled=true;
                self.imgSrcPerdu="http://www.pour-enfants.fr/jeux-vacances/dessins-jeu-pendu/dessin-jeu-pendu-perdu-.gif";
            }
        };

        //TODO
        //filtre uppercase
        //condition victoire => message win
        //tableau des essais tentés à ameliorer
    });