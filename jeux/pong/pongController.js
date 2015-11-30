angular.module('myApp')
    .controller('PongController', function(){
        var self = this;

        //l'origine du canvas est dans le coin superieur gauche
        var canvas = document.getElementById('mon_canvas');//On récupère l'objet canvas dans la variable canvas, on vérifie ensuite que tout s'est bien passé
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

        function animate(){ ////C'est ici que toutes les manipulations sur le canvas se feront.
            context.clearRect(0, 0, canvas.width, canvas.height);//Cette fonction permet de réinitialiser notre canvas. Plus rien n'y est affiché.
        }
    });