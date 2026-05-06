let justCalculated = false;

function calculate() {
    let expression = display.textContent;

    expression = expression.replaceAll("×", "*");
    expression = expression.replaceAll("÷", "/");

    display.textContent = eval(expression);
    justCalculated = true;
}

function deleteNumbers() {
    display.textContent = display.textContent.slice(0, 0);
}

let display = document.getElementById("display");

let numButtons = document.getElementsByClassName("number-btn");

for(let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", addOutput);
}

let operatorButtons = document.getElementsByClassName("operate-btn");

for(let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", addOutput);
}

let dotButton = document.getElementsByClassName("dot-btn");

for(let i = 0; i < dotButton.length; i++) {
    dotButton[i].addEventListener("click", addOutput);
}

function isOperator(value) {
    return value === "+" || value === "-" || value === "×" || value === "÷" || value === "%"; 
}

function addOutput(event) {
    let value = event.target.textContent;
    let lastChar = display.textContent.slice(-1);

    if(justCalculated && !isOperator(value)) {
        display.textContent = "";
        justCalculated = false;
    }

    if(isOperator(value)) {
        justCalculated = false;

        if(display.textContent === "") {
            return;
        }

        if(isOperator(lastChar)) {
            return;
        }
    }

    display.append(value);
}