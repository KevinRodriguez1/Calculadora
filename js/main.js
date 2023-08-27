document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const cells = document.querySelectorAll('.cell');
    const clearButton = document.querySelector('.clear');
    const equalButton = document.querySelector('.equal');

    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            if (this.textContent === '=') {
                calculate();
            } else if (this.textContent === 'C') {
                clearInput();
            } else {
                appendInput(this.textContent);
            }
        });
    });

    function appendInput(value) {
        display.value += value;
    }

    function calculate() {
        try {
            const result = eval(display.value).toString();
            display.value = result;
        } catch (error) {
            clearInput();
            display.value = 'Error';
        }
    }

    function clearInput() {
        display.value = '';
    }
});