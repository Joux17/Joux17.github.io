//fichier contenant les methodes utiles au js
//utiliser Lodash

var isStringEmpty = function(mot){
	var empty = false;
	if(mot ===null || mot === undefined || mot===''){
		empty = true;
	}
	return empty;
};
