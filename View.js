'use strict'

const clsViewManager = function (infController) {
  const objInput = document.getElementById('txtInput')
  const objOutput = document.getElementById('divOutput')

  // Map event handler to forward data to the Controller.
  objInput.addEventListener('keyup', function () {
    infController.test(this.value)
  })
  objInput.focus()

  // Display data received from the Controller.
  function viewTest (pstrMessage) {
    objOutput.innerText = pstrMessage
  }

  // Publish the View's public interface to the Controller.
  // Process test messages from the Controller.
  return {
    test: viewTest
  }
}
