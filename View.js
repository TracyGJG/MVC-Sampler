"use strict";

var clsViewManager = function() {
	var objController;							// Reference to the Controller.
	var objInput;								// Mapping to input DOM object.
	var objOutput;								// Mapping to output DOM object.

	var setController = function( pobjController) {
		objController = pobjController;
		objInput = document.getElementById("txtInput");
		objOutput = document.getElementById("divOutput");

		// Map event handler to forward data to the Controller.
		objInput.addEventListener("keyup", function() {
			objController.test( this.value);
		});
		objInput.focus();
	};

	// Display data received from the Controller.
	var viewTest = function( pstrMessage) {
		objOutput.innerText = pstrMessage;
	};

	// Publish the View's public interface to the Controller.
	return {
		setController: setController,					// Map to the Controller.
		test: viewTest									// Process test messages from the Controller.
	};
};
