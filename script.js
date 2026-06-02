const state = {
    currInput: "",
    expression: [],
    justEvaluated: false,
}

const EVENTS = {
    DIGIT: "DIGIT",
    OPERATOR: "OPERATOR",
    EQUALS: "EQUALS",
    CLEAR: "CLEAR"
}

const OPERATION_RULES = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "/": (a, b) => a / b,
}

const calcDisplay = document.querySelector(".calc-display");
const calcButtons = document.querySelector(".calc-buttons");

calcButtons.addEventListener("click", (e) => {
    const type = e.target.dataset.type;
    const value = e.target.textContent;

    if (EVENTS[type]) {
        if (EVENTS[type] === EVENTS.DIGIT || EVENTS[type] === EVENTS.OPERATOR) {
            dispatch({type: type, value: value})
        }
        else {
            dispatch({type: type})
        }
    }

});

function dispatch(obj) {
    switch (obj.type) {
        case EVENTS.DIGIT:
            handleDigit(obj.value);
            break;

        case EVENTS.OPERATOR:
            handleOperator(obj.value);
            break;

        case EVENTS.EQUALS:
            handleEquals();
            break;

        case EVENTS.CLEAR:
            reset();
            break;
    }

    renderDisplay();
}

function handleDigit(value) {
    if (state.justEvaluated) {
        state.currInput = value;
        state.justEvaluated = false;
        return;
    }

    // state.currInput === "" ?
    !state.currInput ?
        state.currInput = value : state.currInput += value;
}

function handleOperator(value) {
    if (!state.currInput) return;

    state.expression.push(state.currInput);
    state.expression.push(value);

    state.currInput = "";

    /*
    if (!state.justEvaluated) {
        state.currInput = "";
    }
    */
}

function handleEquals() {
    if (!state.currInput && state.currInput !== 0) return;
    if (!state.expression?.length) return;

    state.expression.push(state.currInput);
    
    state.currInput = calculate();
    state.expression = [];
    state.justEvaluated = true;
}

function calculate() {
    let result = Number(state.expression[0]);

    for (let i = 2; i<=state.expression.length; i += 2) {
        let expressionNextNum = Number(state.expression[i]);
        let expressionOperator = state.expression[i-1];

        result = OPERATION_RULES[expressionOperator] (result, expressionNextNum);
    }

    return String(result);
}

function reset() {
    state.currInput = "";
    state.expression = [];
    state.justEvaluated = false;
}

function renderDisplay() {
    const cleanedExpression = state.expression.join(" ");

    calcDisplay.textContent = `${cleanedExpression} ${state.currInput}`;
}