//your JS code here. If required.
 const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

   let counterValue = 0;

    function handleIncrement() {
      // Show an alert with the current counter value
      alert(`Un-incremented value: ${counterValue}`);
      counterValue++;
      counterElement.textContent = counterValue;
    }
    incrementButton.addEventListener('click', handleIncrement);
   cy.visit(baseUrl);
cy.on('window:alert', (alertText) => {
  // Use regular expression to match the alert text
  expect(alertText).to.match(/^Un-incremented value: 0$/);
});
cy.get('#incrementBtn').click();
