"use strict";

var clsDataModel = function( infController) {
	var objDays = {
		'monday': 'lundi',
		'tuesday': 'mardi',
		'wednesday': 'mercredi',
		'thursday': 'jeudi',
		'friday': 'vendredi',
		'saturday': 'samedi',
		'sunday': 'dimanche'
	};
	var strLastEntry = "";

	function modelTest( strMessage) {
		if (objDays[strMessage]) {
			strLastEntry = objDays[strMessage]
		}
		infController.test(strLastEntry);
	}

	// Publish the Model's public interface to the Controller.
	return {
		test: modelTest									// Process test messages from the Controller.
	};
};
