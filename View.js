"use strict";

var clsViewManager = function( infController) {

	var objInput = document.getElementById("txtInput");
	var objOutput = document.getElementById("divOutput");

	// Map event handler to forward data to the Controller.
	objInput.addEventListener("keyup", function() {
		infController.test( this.value);
	});
	objInput.focus();

	// Display data received from the Controller.
	function viewTest( pstrMessage) {
		objOutput.innerText = pstrMessage;
	}

	// Publish the View's public interface to the Controller.
	return {
		test: viewTest									// Process test messages from the Controller.
	};
};
