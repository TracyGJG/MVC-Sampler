"use strict";

var clsDataModel = function() {
	var objController;									// Reference to the Controller.
	var setController = function( pobjController) {		// Register the Controller within the Model
		objController = pobjController;
	};

	//
	var modelTest = function( strMessage) {
		objController.test( "Response: "+ strMessage);
	};

	// Publish the Model's public interface to the Controller.
	return {
		setController: setController,					// Map to the Controller.
		test: modelTest									// Process test messages from the Controller.
	};
};
