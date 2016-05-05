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
        var posY1 = 150;
        var posX2 = canvas.width - 20;
        var posY2 = 150;
        var longueurJoueur = 70;
        var largeurJoueur = 10;

        var vitesseBalleX = 10;
        var vitesseBalleY = 10;

        var centreBalleX = 40;
        var centreBalleY = 40;
        var rayon = 10;

        self.pointJoueur1 = 0;
        self.pointJoueur2 = 0;

        self.disableButton = true;

        // initialisation des elements de la partie
        function init(){
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.fillRect(posX1,posY1,largeurJoueur,longueurJoueur);// tracé de la raquette du joueur1 (x haut gauche , y haut gauche,largeur, hauteur)
            context.fillRect(posX2,posY2,largeurJoueur,longueurJoueur);// tracé de la raquette du joueur2

        }

        init();

        function animate(){
            context.clearRect(0, 0, canvas.width, canvas.height);//Cette fonction permet de réinitialiser notre canvas. Plus rien n'y est affiché.
            context.beginPath();
            context.fillRect(posX1,posY1,largeurJoueur,longueurJoueur);

            context.beginPath();
            context.fillRect(posX2,posY2,largeurJoueur,longueurJoueur);

            context.beginPath();
            context.arc(centreBalleX, centreBalleY, rayon, 0, 2 * Math.PI);
            context.fill();
            
            centreBalleX = centreBalleX + vitesseBalleX;
            centreBalleY = centreBalleY + vitesseBalleY;

            conditionRebondBord();
            conditionRebondSurJoueur();
            // if(centreBalleX - rayon < posX1 + 5){
            //     resetPos();
            //     self.pointJoueur1++;
            //     console.log(self.pointJoueur1);
            // }

            // if(centreBalleX + rayon > posX2){
            //     self.pointJoueur2++;
            //     console.log(self.pointJoueur2);
            //     resetPos();
            // }
        }


        // L'objet 'event' en Javascript est un objet qui regroupe les principales informations du clavier et de la souris
        document.onkeypress = function(_event_) {
            var winObj = checkEventObj(_event_);
            var intKeyCode = winObj.keyCode;
            if (intKeyCode === 13) {
                myInterval = setInterval(animate, 1000);
            }

        };

        document.onkeydown = function (_event_) {
            var winObj = checkEventObj(_event_);
            var intKeyCode = winObj.keyCode;

            if(intKeyCode === 69 && posY1 > 0) { // E (monte le joueur 1)
                posY1 -= 15;
            } else if (intKeyCode === 68 && posY1+longueurJoueur < canvas.height){
                posY1 += 15;
            }
            
            if(intKeyCode === 38 && posY2 > 0) { //KEY UP
                posY2 -= 15;
            } else if (intKeyCode === 40 && posY2 < canvas.height - longueurJoueur){
                posY2 += 15;
            }
            
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
            canvas.setAttribute('tabindex', '0');
            canvas.focus();
        };

        self.arreterPartie = function(){
            clearInterval(myInterval);
            self.disableButton = !self.disableButton;
        };

        self.recommencerPartie = function(){
            
            resetPos();

            var vitesseBalleX = 10;
            var vitesseBalleY = 10;

            self.disableButton = true;
            init();
        };

        var resetPos = function() {
            
            clearInterval(myInterval);
            posX1 = 10;
            posY1 = canvas.height*0.3;
            posX2 = canvas.width - 20;
            posY2 = canvas.height*0.3;
            longueurJoueur = 70;

            centreBalleX = 40;
            centreBalleY = 40;
            rayon = 10;

        };

        var conditionRebondBord = function (){

            if(centreBalleY + rayon >= canvas.height || centreBalleY - rayon <= 0) {
                vitesseBalleY = -vitesseBalleY;
            }
        };

        var conditionRebondSurJoueur = function(){

            //Joueur 1
            if((centreBalleX - rayon <= posX1+largeurJoueur) && (centreBalleY - rayon >= posY1) && (centreBalleY + rayon <= posY1 + longueurJoueur)) {
                vitesseBalleX = -1.05*vitesseBalleX;
                console.log("ping");
            }

            //Joueur2
            if((centreBalleX + rayon >= posX2) && (centreBalleY - rayon >= posY2) && (centreBalleY + rayon <= posY2 + longueurJoueur)) {
                vitesseBalleX = -1.05*vitesseBalleX;
                console.log("pong");
            }
        };

    });