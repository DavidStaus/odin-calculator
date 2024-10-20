function add(num1, num2) {
    let result = num1 + num2
    console.log(result)
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    display.textContent(result)
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2
    console.log(result)
    return result;
}

function divide(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        alert(`Don't you fucking dare, motherfucker!`);
        return;
    }
    let result = num1 / num2
    console.log(result)
    return result;
}

function type(e) {
    if (display.textContent === '0') {
        display.textContent = ''
    }
    display.textContent += e.target.textContent;
}

function clear() {
    display.textContent = '';
    operation = ''
}

function saveNum() {
    previousNumber = parseInt(display.textContent);
    display.textContent = '';
}

function saveOperation(e) {
    operation = e.target.textContent
}

function operate(e) {
    if (operation) {
        calculate()
    }
    saveNum();
    saveOperation(e);
}

function calculate() {
    currentNumber = parseInt(display.textContent);
    // console.log(`${previousNumber} and ${currentNumber}`)
    if (operation === '+') {
        display.textContent = add(previousNumber, currentNumber);
    }
    if (operation === '-') {
        display.textContent = subtract(previousNumber, currentNumber)
    }
    if (operation === 'x') {
        display.textContent = multiply(previousNumber, currentNumber)
    }
    if (operation === '/') {
        display.textContent = divide(previousNumber, currentNumber)
    }
    operation = ''
}

let previousNumber;
let currentNumber;
let operation;

const display = document.querySelector('#displayNumbers');
const numbers = document.querySelectorAll('.number');
numbers.forEach((element) => element.addEventListener('click', type));

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear)

const operators = document.querySelectorAll('.operator')
operators.forEach((button) => button.addEventListener('click', operate)); 

const equal = document.querySelector('#equal');
equal.addEventListener('click', calculate);

