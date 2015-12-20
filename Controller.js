"use strict";

var clsAppController = (function( pobjModel, pobjView) {
	var objModel = pobjModel;
	var objView = pobjView;

	// Forward messages from the Model to the View.
	var modelTest = function( pstrMessage) {
		objView.test(pstrMessage);
	};

	// Forward messages from the View to the Model.
	var viewTest = function( pstrMessage) {
		objModel.test(pstrMessage);
	};

	// Publish the Controller's public interface to the Model.
	objModel.setController(
		{
			test: modelTest
		}
	);

	// Publish the Controller's public interface to the View.
	objView.setController(
		{
			test: viewTest
		}
	);

})( clsDataModel(), clsViewManager());
