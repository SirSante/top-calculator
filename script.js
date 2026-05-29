function add(a,b) {
    let sum = Number(a) + Number(b);
    console.log(sum);
    
    updateDisplay(sum);
    return sum;
}

function subtract(a,b) {
    let sum = Number(a) - Number(b);
    console.log(sum);

    updateDisplay(sum)
    return sum;
}

function multiply(a,b) {
    let sum = Number(a) * Number(b);
    console.log(sum);

    updateDisplay(sum);
    return sum;
}

function divide(a,b) {
    let sum = Number(a) / Number(b);
    console.log(sum);

    updateDisplay(sum);
    return sum;
}

function operate(operator,a,b) {
    switch(operator) {
        case "+":
            add(a,b);
            break; 

        case "-": 
            subtract(a,b);
            break;

        case "x":
            multiply(a,b);
            break;

        case "/":
            divide(a,b);
            break;
    }
}

function recordNumber(selectedNum) {
    if (!operator) {
        num1 += selectedNum;
    } else {
        num2 += selectedNum;
    }
    
    updateDisplay();
}

function updateDisplay(sum) {
    calcDisplay.textContent = "";
    calcDisplay.textContent += `${num1} ${operator} ${num2}`;

    if (sum) {
        calcDisplay.textContent = sum;
        num1 = "";
        num2 = "";
        operator = "";
    }
}

let num1 = "";
let num2 = "";
let operator = "";

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