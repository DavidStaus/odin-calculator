function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        alert(`Don't you fucking dare, motherfucker!`);
        return;
    }
    return num1 / num2;
}

function type(e) {
    console.log(e.target.textContent)
    display.textContent += e.target.textContent;
}

const display = document.querySelector('#displayNumbers');
const numbers = document.querySelectorAll('.number');
numbers.forEach((element) => element.addEventListener('click', type));