
// Selecting elements
let input = document.querySelector('.container .input-box input');
let result = document.querySelector('.container .input-box .result');
let buttons = document.querySelectorAll('.container .btn');

// Function to handle button click and append value to input
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent.trim();
        if (value === '=') {
            calculate(); // Call the calculate function directly
        } else {
            input.value += value;
        }
    });
});

// Function to remove the last character from input
function backSpace() {
    input.value = input.value.substr(0, input.value.length - 1);
}

// Function to clear input
function clearInput() {
    input.value = '';
    result.textContent = '0';
}

// Function to append operator to input
function appendOperator(operator) {
    input.value += operator;
}

// Function to perform calculation
function calculate() {
    try {
        let expression = input.value;
        let output;
        if (expression.includes('%')) {
            // Handling percentage calculation
            let parts = expression.split('%');
            let percentage = parseFloat(parts[0]) / 100;
            let number = parseFloat(parts[1]);
            output = percentage * number;
        } else {
            output = eval(expression);
        }
        result.textContent = output;
    } catch (error) {
        result.textContent = 'Error';
    }
}
