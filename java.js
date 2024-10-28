//function to display the input value.
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
//function to clear the display.
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
//function to calculate the final result and display it.
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
//funtion to clear the last input element.
function deleteLastCharacter() {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
}

