function add(a,b) {
    let sum = a + b;
    updateDisplay(sum);
    return sum;
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

const calcDisplay = document.querySelector(".calc-display");
const buttonElements = document.querySelector(".calc-buttons");

buttonElements.addEventListener("click", (event) => {
    let calcButtonElem = event.target;

    if (calcButtonElem.classList.contains("digit")) {

        return recordNumber(calcButtonElem.textContent);    

    } else if (calcButtonElem.classList.contains('operator')) {
        operator = calcButtonElem.textContent;
        updateDisplay();
        return;

    } else if (calcButtonElem.classList.contains("equal-button")) {
        return operate(operator,num1,num2);
    }
})


function recordNumber(selectedNum) {
    if (!operator) {
        num1 += selectedNum;
    } else {
        num2 += selectedNum;
    }
    
    updateDisplay();
}

function updateDisplay() {
    calcDisplay.textContent = "";
    calcDisplay.textContent += `${num1} ${operator} ${num2}`;
}

let num1 = "";
let num2 = "";
let operator = "";

