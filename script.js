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
