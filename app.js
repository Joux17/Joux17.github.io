angular.module('myApp', ['ui.bootstrap','ngRoute']);

angular.module('myApp')
.config(function ($routeProvider){          
    $routeProvider
    .when("/421", {
        templateUrl: "jeux/421/template/App421.html",
        controller: "App421Controller",
        controllerAs: "app421Ctrl"
    })
    .when("/morpion", {
        templateUrl: "jeux/morpion/template/morpion.html",
        controller: "MorpionController",
        controllerAs: "morpionCtrl"
    })
    .when("/pendu", {
      templateUrl: "jeux/pendu/template/pendu.html",
        controller: "PenduController",
        controllerAs: "penduCtrl"
    })
    .otherwise("/421");
});