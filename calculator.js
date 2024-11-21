let display = document.getElementById("display");

function appendNumber(number) {
    if (display.value === "0" && number !== ".") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    if (display.value && "+-*/".includes(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function appendParenthesis(paren) {
    const openCount = (display.value.match(/\(/g) || []).length;
    const closeCount = (display.value.match(/\)/g) || []).length;

    if (paren === "(") {
        display.value += paren;
    } else if (paren === ")" && closeCount < openCount) {
        display.value += paren;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
    try {
        const result = math.evaluate(display.value);
        display.value = result % 1 === 0 ? result : result.toFixed(2);
    } catch {
        display.value = "Error";
    }
}
