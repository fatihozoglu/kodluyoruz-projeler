//Selecting the elements with id="res" div element and id="btns" button container div element
let resultDisplay = document.querySelector("#res");
let btns = document.querySelector("#btns");

//The array we will keep our numbers,operator and result
let resultArr = [];

//This function defines the button actions and called whenever a button is clicked
function calc(e) {
    
    switch (e.target.id) {
        // Pushing number 0 to resultArr array if the button with id="btn0" is clicked
        case "btn0":
            resultArr.push(0);
            break;
        // Pushing number 1 to resultArr array if the button with id="btn1" is clicked
        case "btn1":
            resultArr.push(1);
            break;
        //Clearing the array if the button with id="btnClr" is clicked
        case "btnClr":
            resultArr = [];
            break;
        // Calling the calculate function if the button with id="btnEql" is clicked
        case "btnEql":
            calculate();
            break;
        // Pushing "+" string to resultArr if the button with id="btnSum" is clicked
        case "btnSum":
            resultArr.push("+");
            break;
        // Pushing "-" string to resultArr if the button with id="btnSub" is clicked
        case "btnSub":
            resultArr.push("-");
            break;
        // Pushing "*" string to resultArr if the button with id="btnMul" is clicked
        case "btnMul":
            resultArr.push("*");
            break;
        // Pushing "/" string to resultArr if the button with id="btnDiv" is clicked
        case "btnDiv":
            resultArr.push("/");    
    }
}

// This function will be called every time a button is clicked to change display
function display() {
    resultDisplay.innerHTML = resultArr.join("");
}

//Getting the binary numbers from resultArr and calculating the result 
function calculate() {
    
    //Determining the index of the operator string and getting numbers from resultArr and converting them to decimal numbers
    let operatorIndex = resultArr.findIndex( item => isNaN(item)); 
    let operator = resultArr[operatorIndex];
    let number1 = parseInt(resultArr.slice(0, operatorIndex).join(""), 2);
    let number2 = parseInt(resultArr.slice(operatorIndex+1).join(""), 2);
    let result;
    
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = Math.floor(number1 / number2);
    }
    resultArr = [];
    resultArr.push(result.toString(2));
}


btns.addEventListener("click", calc);
btns.addEventListener("click", display);