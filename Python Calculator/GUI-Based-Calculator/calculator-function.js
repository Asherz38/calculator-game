let justCalculated = false;

let display = document.getElementById("display");

let faqAnswers = [
    {
        question: "How do I clear the display?",
        keywords: ["clear", "delete", "reset", "ac"],
        answer: "Press AC to clear the calculator display."
    },
    {
        question: "How do I use decimals?",
        keywords: ["decimal", "point", "dot"],
        answer: "Press the . button to add a decimal point to your number."
    },
    {
        question: "What does the percent button do?",
        keywords: ["percent", "remainder", "mod", "%"],
        answer: "Use % to calculate the remainder after division, like 10 % 3 = 1."
    }
];

addMessage("Hi! Ask me about clearing, decimals, or the percent button.", "bot");

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

function isDot(value) {
    return value === ".";
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

    if(isDot(value) && isOperator(lastChar)) {
        return;
    }

    display.append(value);
}

function sendFaqOption(index) {
    let faq = faqAnswers[index];

    addMessage(faq.question, "user");
    addMessage(faq.answer, "bot");
}

function addMessage(text, sender) {
    let chatMessages = document.getElementById("chat-messages");

    let newMessage = document.createElement("div");
    newMessage.textContent = text;
    newMessage.className = sender;

    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
