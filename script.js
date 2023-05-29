let firstOperand;
let secondOperand;
let operator;

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
    
    switch(operator) {
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

    return func(x, y);
}