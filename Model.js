'use strict'

const clsDataModel = function (infController) {
  const objDays = {
    'monday': 'lundi',
    'tuesday': 'mardi',
    'wednesday': 'mercredi',
    'thursday': 'jeudi',
    'friday': 'vendredi',
    'saturday': 'samedi',
    'sunday': 'dimanche'
  }
  let strLastEntry = ''

  function modelTest (strMessage) {
    if (objDays[strMessage]) {
      strLastEntry = objDays[strMessage]
    }
    infController.test(strLastEntry)
  }

  // Publish the Model's public interface to the Controller.
  // Process test messages from the Controller.
  return {
    test: modelTest
  }
}
