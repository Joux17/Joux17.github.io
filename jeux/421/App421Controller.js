angular.module('myApp')
.controller('App421Controller', function($interval){

	var self=this;
	var imgSrc = "http://lessac.escdijon.eu/uploads/images/";

	self.des = [{value:6, img:imgSrc + "6.jpg",locked:false},{value:6, img:imgSrc + "6.jpg",locked:false},{value:6, img:imgSrc + "6.jpg",locked:false}];
	self.nbLance = 0;
	self.nbAnim=0;

	self.effetLancer = function()
	{
		if(self.nbAnim<12){
			var newValue=0;
			for(var i=0; i<3; i++){
				if(!self.des[i].locked){
					newValue=self.randomValue();
					self.des[i].value = newValue;
					self.des[i].img = imgSrc+newValue+".jpg";
				}
			}
			self.nbAnim++;
		}
		else{
			$interval.cancel(self.boucle);
			self.boucle = undefined;
			self.nbAnim=0;

		}
	}

	self.lancer = function(){//fonction pour lancer les dés
		if(!self.des[0].locked || !self.des[1].locked || !self.des[2].locked){
			self.boucle = $interval(self.effetLancer, 100);
		}

		if(self.des[0].locked && self.des[1].locked && self.des[2].locked){
			console.log(421);
		}
		else{
			self.nbLance++;
		}

	};

	self.randomValue = function(){ //tirer des dés aleatoirement
		return Math.floor((Math.random()*6)+1);
	};

	self.lock = function(idDe){
		self.des[idDe].locked = !self.des[idDe].locked;
	};


	self.reset = function(){
		self.des = [{value:'6', img:imgSrc + "6.jpg",locked:false},{value:'6', img:imgSrc + "6.jpg",locked:false},{value:'6', img:imgSrc + "6.jpg",locked:false}];
		self.nbLance = 0;
		self.nbAnim=0;
	};


	
});