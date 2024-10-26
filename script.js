function add(num1, num2) {
    let result = num1 + num2
    console.log(result)
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    console.log(result)
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2
    console.log(result)
    return result;
}

function divide(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        alert(`Don't you fucking dare, motherfucker!`);
        return 0;
    }
    let result = num1 / num2
    console.log(result)
    return result;
}

function type(e) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += e.target.textContent;
    updateDisplay();
}

function decimal() {
    if (displayValue.includes('.')) {
        return;
    }
    if (displayValue === '') {
        displayValue = '0';
    }
    displayValue += '.';
    updateDisplay();
}

function clear() {
    displayValue = '0';
    operation = ''
    updateDisplay();
}

function saveNum() {
    previousNumber = +displayValue;
    displayValue = '';
    updateDisplay();
}

function saveOperation(e) {
    operation = e.target.textContent
}

function operate(e) {
    if (operation) {
        if (!currentNumber) {
            saveOperation(e);
            displayValue = '';
            return;
        }
        calculate()
    }
    saveNum();
    saveOperation(e);
    displayValue = '';
    updateDisplay();
}

function calculate() {
    currentNumber = +displayValue;
    // console.log(`${previousNumber} and ${currentNumber}`)
    if (operation === '+') {
        displayValue = add(previousNumber, currentNumber);
    }
    if (operation === '-') {
        displayValue = subtract(previousNumber, currentNumber)
    }
    if (operation === 'x') {
        displayValue = multiply(previousNumber, currentNumber)
    }
    if (operation === '/') {
        displayValue = divide(previousNumber, currentNumber)
    }
    operation = ''
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('displayNumbers');
    if (displayValue == 'undefined') {
        displayValue = '0';
    }
    display.textContent = displayValue;
    if (displayValue.length > 25) {
        display.textContent = displayValue.substring(0, 25);
    }
}

let previousNumber = null;
let currentNumber = null;
let operation = null;
let displayValue = '0';
updateDisplay();

const numbers = document.querySelectorAll('.number');
numbers.forEach((element) => element.addEventListener('click', type));

const decimalDot = document.querySelector('#dot');
decimalDot.addEventListener('click', decimal);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);

const operators = document.querySelectorAll('.operator')
operators.forEach((button) => button.addEventListener('click', operate)); 

const equal = document.querySelector('#equal');
equal.addEventListener('click', calculate);

window.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    if (e.key >= 0 && e.key <= 9) {
        if (displayValue === '0' || displayValue === 0) {
            displayValue = '';
        }
        displayValue += e.key;
        updateDisplay();
    } else if (e.key === '/' 
        || e.key === '*' 
        || e.key === '+' 
        || e.key === '-' ) {
        e.preventDefault();
        document.getElementById(`${e.key}`).click();
    } else if (e.key === 'Enter') {
        equal.click();
    } else if (e.key === 'Delete' || e.key === 'Escape') {
        clearBtn.click();
    } else if (e.key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') {
            displayValue = '0'
        }
    } else if (e.key === '.' || e.key === ',') {
        decimalDot.click()
    }

    const key = document.querySelector(`button[data-key="${e.key}"]`)
    if (key) {
        key.classList.add('pressed');
    }

    console.log(key);
})

// styling
const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('pressed');
    });
    
    button.addEventListener('mouseup', () => {
        button.classList.remove('pressed');
    });
    
    // Handle case when mouse leaves button while pressed
    button.addEventListener('mouseleave', () => {
        button.classList.remove('pressed');
    });
});

window.addEventListener('keyup', (e) => {
    const key = document.querySelector(`button[data-key="${e.key}"]`);
    if (key) {
        key.classList.remove('pressed');
    }
});