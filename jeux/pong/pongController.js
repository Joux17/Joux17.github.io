angular.module('myApp')
    .controller('PongController', function(){
        var self = this;


        //l'origine du canvas est dans le coin superieur gauche
        var canvas = document.getElementById('canvas-pong');//On récupère l'objet canvas dans la variable canvas, on vérifie ensuite que tout s'est bien passé
        // if(!canvas){
        //     alert("Impossible de récupérer le canvas");
        //     return;
        // }

        var context = canvas.getContext('2d');
        // if(!context)
        // {
        //     alert("Impossible de récupérer le context du canvas");
        //     return;
        // }


        var myInterval; 
        var posX1 = 10;
        var posY1 = canvas.height*0.3;
        var posX2 = canvas.width - 20;
        var posY2 = canvas.height*0.3;

        var vitesseJoueur1 = 0;
        var vitesseJoueur2 = 0;

        var vitesseBalleX = 10;
        var vitesseBalleY = 10;

        var centreBalleX = 20;
        var centreBalleY = 20;
        var rayon = 10;

        self.largeurPong = 1000;
        self.hauteurPong = 500;

        self.disableButton = true;

        // initialisation des elements de la partie
        function init(){
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.fillRect(posX1,posY1,10,70);// tracé de la raquette du joueur1 (x haut gauche , y haut gauche,largeur, hauteur)
            context.fillRect(posX2,posY2,10,70);// tracé de la raquette du joueur2

        }

        init();

        function animate(){
            context.clearRect(0, 0, canvas.width, canvas.height);//Cette fonction permet de réinitialiser notre canvas. Plus rien n'y est affiché.
            context.beginPath();
            context.fillRect(posX1,posY1,10,70);

            context.beginPath();
            context.fillRect(posX2,posY2,10,70);

            context.beginPath();
            context.arc(centreBalleX, centreBalleY, rayon, 0, 2 * Math.PI);
            context.fill();
            
            centreBalleX = centreBalleX + vitesseBalleX;
            centreBalleY = centreBalleY + vitesseBalleY;

            if(centreBalleX + rayon >= canvas.width || centreBalleX - rayon <= 0){
                vitesseBalleX = - vitesseBalleX;
            }

            if(centreBalleY + rayon >= canvas.height || centreBalleY - rayon <= 0) {
                vitesseBalleY = -vitesseBalleY;
            }

            posY1 = posY1 + vitesseJoueur1;
            posY2 = posY2 + vitesseJoueur2;

        }


        // L'objet 'event' en Javascript est un objet qui regroupe les principales informations du clavier et de la souris
        document.onkeypress = function(_event_) {
            var winObj = checkEventObj(_event_);
            var intKeyCode = winObj.keyCode;
            if (intKeyCode === 13) {
                myInterval = setInterval(animate, 100);
            }

        };

        document.onkeydown = function (_event_) {
            var winObj = checkEventObj(_event_);
            var intKeyCode = winObj.keyCode;

            if(intKeyCode === 69) { // E
                vitesseJoueur1 = -15;
            } else if (intKeyCode === 68){
                vitesseJoueur1 = +15;
            }
            
            if(intKeyCode === 38) { //KEY UP
                vitesseJoueur2 = -15;
            } else if (intKeyCode === 40){
                vitesseJoueur2 = +15;
            }
        };

        document.onkeyup = function(){
          vitesseJoueur1 = 0;
          vitesseJoueur2 = 0;
        };


        //Cette fonction, selon le type de navigateur, retourne l'objet 'event' approprié.
        function checkEventObj ( _event_ ){
            // --- IE explorer
            if ( window.event ){
                return window.event;
            }
            // --- Netscape and other explorers
            else {
                return _event_;
            }
        }

        self.demarrerPartie = function() {
            myInterval = setInterval(animate, 50);
            self.disableButton = !self.disableButton;
        };

        self.arreterPartie = function(){
            clearInterval(myInterval);
            self.disableButton = !self.disableButton;

        };

    });