let firstOperand;
let secondOperand;
let operator;
let display;

clear();

document.querySelectorAll('.digit')
    .forEach(button => button.addEventListener('click', digitClicked));

document.querySelectorAll('#clear')
    .forEach(button => button.addEventListener('click', clearClicked));

document.querySelectorAll('.functions button')
    .forEach(button => button.addEventListener('click', functionClicked));

function digitClicked(e) {
    if (isNaN(firstOperand)) {
        firstOperand = parseInt(e.target.id);
        populateDisplay(firstOperand);
    } else if (operator == null) {
        firstOperand = (firstOperand * 10) + parseInt(e.target.id);
        populateDisplay(firstOperand);
    } else {
        secondOperand = isNaN(secondOperand) 
            ? parseInt(e.target.id) 
            : (secondOperand * 10) + parseInt(e.target.id);
        populateDisplay(secondOperand);
    }
}

function clearClicked(e) {
    clear();
}

function functionClicked(e) {
    if (isNaN(firstOperand)) {
        clear();
    } else if (operator != null) {
        let val = Math.round(operate(operator, firstOperand, secondOperand) * 100) / 100;
        clear();
        populateDisplay(val);
        firstOperand = val; 
    } else {
        if (e.target.id == "=") {
            clear();
        } else {
            operator = e.target.id;
        }
    }
}

function clear() {
    firstOperand = NaN;
    secondOperand = NaN;
    operator = null;
    populateDisplay(0);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, firstOperand, secondOperand) {
    let func = (x, y) => 0;

    switch (operator) {
        case '+':
            func = add;
            break;

        case '-':
            func = subtract;
            break;

        case '*':
            func = multiply;
            break;

        case '/':
            func = divide;
            break;
    }

    return func(firstOperand, secondOperand);
}

function populateDisplay(val) {
    display = val;
    document.querySelector('.display > p').textContent = display;
}