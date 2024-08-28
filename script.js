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
let inputA = "";
let operator = undefined;
let inputB = "";

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
let input = "A";

numbers.forEach(button => button.addEventListener("click", function () {
    if (display.textContent === "") {
        display.textContent = button.textContent;
        inputA = display.textContent;
    } else if (input === "A") {
        display.textContent = inputA + button.textContent;
        inputA = display.textContent;
    } else {
        display.textContent = inputB + button.textContent;
        inputB = display.textContent;
    };
    }
));

operators.forEach(button => button.addEventListener("click", function () {
    if (operator === undefined) {
        operator = button.textContent;
        input = "B";
    } else {
        operator = button.textContent;
        display.textContent = operate (inputA, operator, inputB);
        inputA = display.textContent;
        operator = button.textContent;
        input = "B";
        inputB = "";
    }

}));

execute.addEventListener("click", function () {
    display.textContent = operate (inputA, operator, inputB);
    inputA = display.textContent;
    inputB ="";
})

clear.addEventListener("click", function() {
    inputA = "";
    inputB = "";
    operator = undefined;
    display.textContent = "";
    input = "A";
})

remove.addEventListener("click", function () {
    if (display.textContent === "")
    {} else {
        if (input = "B") {
            inputB = inputB.slice(0,-1);
            display.textContent = inputB;
        } else  {
            inputA = inputA.slice(0,-1);
            display.textContent = inputA;
        }
    }
});

