'use strict'

const clsAppController = (function (pobjModel, pobjView) {
  // Forward messages from the Model to the View.
  function modelTest (pstrMessage) {
    objView.test(pstrMessage)
  }

  // Forward messages from the View to the Model.
  function viewTest (pstrMessage) {
    objModel.test(pstrMessage)
  }

  // Publish the Controller's public interface to the Model.
  var objModel = pobjModel(
    {
      test: modelTest
    }
  )
  // Publish the Controller's public interface to the View.
  var objView = pobjView(
    {
      test: viewTest
    }
  )
})(clsDataModel, clsViewManager)
