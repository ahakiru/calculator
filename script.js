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

/*doesnt work if decimal is result of execute!!!!*/
function round () {
    decimalPosition = display.textContent.indexOf(".");
    if (display.textContent.length > 9 && decimalTyped === "True") {
        let rounded = Math.round(display.textContent * (10**(8-decimalPosition)))/(10**(8-decimalPosition));
        if (input === "A") {
            inputA = rounded
            display.textContent = inputA;
        } else {
            inputB = rounded;
            display.textContent = inputB;
        };
    };
};

/*math operator variables*/
let inputA = "";
let operator = undefined;
let inputB = "";

/* operate function*/
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
let decimalPosition;

/* input functions*/
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
};
function decimalKey() {
    if (decimalTyped != "True") {
        display.textContent += ".";
        if (input === "A") {
            inputA = display.textContent;
        } else {inputB = display.textContent};
        decimalTyped = "True";
    } else if (input === "A" && inputA === "" || input === "B" && inputB === ""){};
};
function operatorKey(operatorChosen) {
    if (operator === undefined) {
        operator = operatorChosen;
        input = "B";
        decimalTyped = "False";
    } else {
        operator = operatorChosen;
        display.textContent = operate (inputA, operator, inputB);
        if (display.textContent.includes(".")) {decimalTyped = "True"};
        round();
        inputA = display.textContent;
        input = "B";
        inputB = "";
        decimalTyped = "False";
    }
};
function executeKey() {
    if (operator != undefined && inputB != "") {
    display.textContent = operate (inputA, operator, inputB);
    if (display.textContent.includes(".")) {decimalTyped = "True"};
    round();
    inputA = display.textContent;
    inputB ="";
    decimalTyped = "False";
    }
};
function clearKey() {
    inputA = "";
    inputB = "";
    operator = undefined;
    display.textContent = "";
    input = "A";
    decimalTyped = "False";
};
function removeKey() {
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
};

/*event listeners*/
numbers.forEach(button => button.addEventListener("click", event => numberKey(button.textContent)));
decimal.addEventListener("click", event => decimalKey());
operators.forEach(button => button.addEventListener("click", event => operatorKey(button.textContent)));
execute.addEventListener("click", event => executeKey());
clear.addEventListener("click", event => clearKey());
remove.addEventListener("click", event => removeKey());

document.body.addEventListener("keydown", function(event) {
    let key =  event.key
    if (!isNaN(key)) {numberKey(key)}
    else if (key === "+" || key === "-" || key === "*" || key ==="/") {operatorKey(key)}
    else if (key === "Enter") {executeKey()}
    else if (key === "." || key === ",") {decimalKey()}
    else if (key === "Backspace") {removeKey()}
});

