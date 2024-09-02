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
let decimal = document.querySelector("#dot");
let input = "A";
let decimalTyped = "False";

function numberKey(number) {
    if (display.textContent === "") {
        display.textContent = number;
        inputA = display.textContent;
    } else if (input === "A") {
        display.textContent = inputA + number;
        inputA = display.textContent;
    } else {
        display.textContent = inputB + number;
        inputB = display.textContent;
    };
}


decimal.addEventListener("click", function () {
    if (decimalTyped != "True") {
        display.textContent += ".";
        if (input === "A") {
            inputA = display.textContent;
        } else {inputB = display.textContent};
        decimalTyped = "True";
    } else if (input === "A" && inputA === "" || input === "B" && inputB === ""){}
});

operators.forEach(button => button.addEventListener("click", function () {
    if (operator === undefined) {
        operator = button.textContent;
        input = "B";
        decimalTyped = "False";
    } else {
        operator = button.textContent;
        display.textContent = operate (inputA, operator, inputB);
        inputA = display.textContent;
        operator = button.textContent;
        input = "B";
        inputB = "";
        decimalTyped = "False";
    }

}));

execute.addEventListener("click", function () {
    if (operator != undefined && inputB != "") {
    display.textContent = operate (inputA, operator, inputB);
    inputA = display.textContent;
    inputB ="";
    decimalTyped = "False";
    }
})

clear.addEventListener("click", function() {
    inputA = "";
    inputB = "";
    operator = undefined;
    display.textContent = "";
    input = "A";
    decimalTyped = "False";
})

remove.addEventListener("click", function () {
    if (display.textContent === "")
    {} else {
        if (input === "B") {
            inputB = inputB.slice(0,-1);
            display.textContent = inputB;
            if (inputB.includes(".")) {}
            else {decimalTyped = "False"}
        } else  {
            inputA = inputA.slice(0,-1);
            display.textContent = inputA;
            if (inputA.includes(".")) {}
            else {decimalTyped = "False"}
        }
    }
});
numbers.forEach(button => button.addEventListener("click", event => numberKey(button.textContent)));

/*keyboard support*/

document.body.addEventListener("keydown", function(event) {
    if (!isNaN(event.key)) {numberKey(event.key)}
    else if (event.key === "+") {alert("plus")}});

