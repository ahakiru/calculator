/*math functions*/
function add (a, b) {
    return +a + +b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    if (inputB === "0") {
        alert("DANGER!");
    } else {return a / b}
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
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let execute = document.querySelector("#execute");
let remove = document.querySelector("#remove");
let clear = document.querySelector("#clear");

numbers.forEach(button => button.addEventListener("click", function () {
    if (display.textContent === "0" || display.textContent == inputA) {
        display.textContent = button.textContent;
    } else {display.textContent += button.textContent;}
    if (operator === undefined) {
        inputA = display.textContent;
    } else {
        inputB = display.textContent;
    };
    }
));

operators.forEach(button => button.addEventListener("click", function () {
    if (operator === undefined) {
        operator = button.textContent;
    } else {
        operator = button.textContent;
        display.textContent = operate (inputA, operator, inputB);
        inputA = display.textContent;
        operator = button.textContent;
    }

}));

execute.addEventListener("click", function () {
    display.textContent = operate (inputA, operator, inputB);
    inputA = display.textContent;
})

clear.addEventListener("click", function() {
    inputA = 0;
    inputB = 0;
    operator = undefined;
    display.textContent = "0";
})