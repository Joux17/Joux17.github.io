//fichier contenant les methodes utiles au js

var isStringEmpty = function(mot){
	var empty = false;
	if(mot ===null || mot === undefined || mot===''){
		empty = true;
	}
	return empty;
};