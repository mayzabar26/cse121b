/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    //const sum = number1 + number2
    //return sum
    return number1 + number2;
}

function addNumbers () {
    const number1 = parseInt(document.getElementById("add1").value);
    const number2 = parseInt(document.querySelector("#add2").value);
    const sum = add(number1, number2);
    document.getElementById("sum").value = sum;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);



/* Function Expression - Subtract Numbers */
const subtract =  function (subtract1, subtract2) {
    return `${subtract1 - subtract2}`;
}

function subtractNumbers () {
    const subtract1 = parseInt(document.getElementById("subtract1").value);
    const subtract2 = parseInt(document.querySelector("#subtract2").value);
    const difference = subtract(subtract1, subtract2);
    document.getElementById("difference").value = difference;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => `${factor1 * factor2}`;

function multiplyNumbers () {
    const factor1 = parseInt(document.getElementById("factor1").value);
    const factor2 = parseInt(document.querySelector("#factor2").value);
    const product = multiply(factor1, factor2);
    document.getElementById("product").value = product;
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => `${dividend / divisor}`;

function divideNumbers () {
    const dividend = parseFloat(document.getElementById("dividend").value);
    const divisor = parseFloat(document.querySelector("#divisor").value);
    const quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", getTotal);

function getTotal() {
    let subtotal = parseFloat(document.querySelector("#subtotal").value);
    let checkBox = document.getElementById("member").checked;
    let total;

    if (checkBox) {
        total = subtotal - (subtotal * 0.2);
    
    } else {
        total = subtotal
    }

    total = total.toFixed(2);
    document.getElementById("total").innerHTML = `$ ${total}`;
}


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbers;

/* Output Odds Only Array */
let oddNumber = numbers.filter(number => number % 2 !== 0);
document.querySelector("#odds").innerHTML = oddNumber;

/* Output Evens Only Array */
let evenNumber = numbers.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = evenNumber;

/* Output Sum of Org. Array */
let sumNumbers = numbers.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").innerHTML = sumNumbers;

/* Output Multiplied by 2 Array */
let multiplyTwo = numbers.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multiplyTwo;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbers.reduce((multiplyTwo, sumNumbers) => multiplyTwo + (sumNumbers *2), 0);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;
