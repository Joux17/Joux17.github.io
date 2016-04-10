angular.module('myApp')
    .controller('MorpionController', function(){
        var self = this;
        self.plateau = [['','',''],['', '', ''],['', '', '']];
        self.mark = 'X';

        self.action = function(row, col) {
            if (self.plateau[row][col]=== '') {
                if (self.mark === 'X') {
                    self.mark = 'O';
                }
                else{
					self.mark='X';
				}
                self.plateau[row][col]=self.mark;
            }
            isVictoire();
        };

        self.reset = function() {
			self.plateau = [['', '', ''],['', '', ''],['', '', '']]; //plateau de jeu du morpion (3x3)
            self.mark = 'X';
        };

        var isVictoire = function(){
            //TODO codé conition victoire morpion
        };  
    });
