//your JS code here. If required.
 function incrementCounter() {
   
        const counterElement = document.getElementById('counter');
        const currentValue = parseInt(counterElement.innerText);

        alert(currentValue);

        counterElement.innerText = currentValue + 1;
    }