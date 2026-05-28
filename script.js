function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator,a,b) {
    switch(operator) {
        case(operator === "+"):
        add(a,b);
        break; 

        case(operator === "-"): 
        subtract(a,b);
        break;

        case(operator === "*"):
        multiply(a,b);
        break;

        case(operator === "/"):
        divide(a,b);
        break;
    }
}

let num1;
let num2;
let operator;

