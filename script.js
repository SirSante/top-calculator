const state = {
    firstNumber: "",
    secondNumber: "",
    operator: "",
    currentState: "ENTERING_FIRST_NUMBER",
    justEvaluated: false,
}

const calcButtons = document.querySelector('.calc-buttons');
const calcDisplay = document.querySelector(".calc-display");

calcButtons.addEventListener("click",handleInput);

function handleInput(selectedButton) {
    const buttonValue = selectedButton.target.textContent;
    

    if (selectedButton.target.classList.contains("digit")) {
        return handleDigit(buttonValue);
    }

    if (selectedButton.target.classList.contains("operator")) {
        return handleOperator(buttonValue);
    }

    if (selectedButton.target.classList.contains("equal-button")) {
        return handleEquals();
    }

    if (selectedButton.target.classList.contains("clear-button")) {
        return reset();
    }
}

function handleDigit(digit) {
    if (state.justEvaluated) {
        state.secondNumber = digit;
        state.justEvaluated = false;
    }
    
    else if (state.currentState === "ENTERING_FIRST_NUMBER") {
        state.firstNumber += digit;
        // console.log(state.firstNumber);
    }

    else if (state.currentState === "ENTERING_SECOND_NUMBER") {
        state.secondNumber += digit;
    }

    updateDisplay();
}


// calc func: 1. Reset all vals except first. 2. Change currState to ENTERFIRST

function handleOperator(operator) {
    if (state.firstNumber && state.operator && state.secondNumber) {
        calculate();
        state.justEvaluated = false;
    }

    state.operator = operator;
    state.currentState = "ENTERING_SECOND_NUMBER";

    updateDisplay();
}

function handleEquals() {
    if (!state.firstNumber || !state.secondNumber || !state.operator) return;
    
    calculate();

    state.secondNumber = "";
    state.operator = "";
    state.justEvaluated = true;
    state.currentState = "ENTERING_FIRST_NUMBER";

    updateDisplay();
}

function calculate() {
    const a = Number(state.firstNumber);
    const b = Number(state.secondNumber);
    const op = state.operator
    let result; 
    
    switch(op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "x":
            result = a * b;
            break;
        case "/":
            (b === 0) ? 
            result = "Error" :
            result = a / b;
            break;
    }

    state.firstNumber = String(result);
    console.log("tung");
    
}

function updateDisplay() {
    const {firstNumber,secondNumber,operator} = state;

    calcDisplay.textContent = 
        secondNumber
            ? `${firstNumber} ${operator} ${secondNumber}`
            : operator
            ? `${firstNumber} ${operator}`
            : `${firstNumber}`

}