/*math functions*/
function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

/*math operator variables*/
let inputA = 0;
let operator = undefined;
let inputB = 0;

/* operator function*/
function operate () {
    if (operator === '+') {
        return add(inputA, inputB)
    } else if (operator === '-') {
        return subtract (inputA, inputB)
    } else if (operator === '*') {
        return multiply (inputA, inputB)
    } else if (operator === '/') {
        return divide (inputA, inputB)
    };
};

/* get html-elements */
const display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");
buttons.forEach( button => button.addEventListener("click", function () {
    alert(button.textContent);
}));