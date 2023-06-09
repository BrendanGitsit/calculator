//Javascript file for OdinProject Calculator Project
//Brendan Nolan 03/27/2023

//function for add operator
function add(num1, num2){
    return Number(num1) + Number(num2);
};

//function for subtract operator
function subtract(num1,num2){
    return  Number(num1)-Number(num2);
};

//function for multiply operator
function multiply(num1,num2){
    return Number(num1)*Number(num2);
};

//function for divide operator
function divide(num1,num2){
    return Number(num1)/Number(num2);
};

//function for operate
function operate(num1, operator, num2){
    if (operator == 'add'){
        return add(num1,num2);
    } else if (operator == 'subtract'){
        return subtract(num1,num2);
    } else if (operator == 'multiply'){
        return multiply(num1,num2);
    } else if (operator == 'divide'){
        return divide(num1,num2);
    } else{
        return "error";
    };
};

//function to update display when clicking numbers
const display = document.getElementById("display");
function updateDisplay(val){
    if (!display.innerHTML){//if display is empty
        display.innerHTML = val;
    } else{ //if display holds a number
        cVal = display.innerHTML;
        display.innerHTML = cVal + val;
    };
    
};

//function to set up numbers w/ Event listeners
const numbers = document.getElementsByClassName("number");
for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click',function(e){
        updateDisplay(e.target.innerHTML);
    });
};

//function to set up operators w/ Event listeners
let storeVal = new Array;
let storeOp = new Array;
let j =0;
let k =0;
const operators = document.getElementsByClassName("operator");
for(let i=0; i<operators.length;i++){
    operators[i].addEventListener('click',function(e){
        storeVal[j] = display.innerHTML;
        storeOp[k] = e.target.id;
        display.innerHTML ="";
        j++;
        k++;
    });
};

//function to set up equal w/ Event Listener

const equal = document.getElementById("equal");
equal.addEventListener('click',function(e){
    storeVal[j] = display.innerHTML;
    if (storeOp[k-1] == "add"){
       display.innerHTML = add(storeVal[j-1],storeVal[j]);
    } else if (storeOp[k-1] == "subtract"){
        display.innerHTML = subtract(storeVal[j-1],storeVal[j]);
    } else if (storeOp[k-1] == "multiply"){
        display.innerHTML = multiply(storeVal[j-1],storeVal[j]);
    } else if (storeOp[k-1] == "divide"){
        if (storeVal[storeVal.length-1]==0){
            display.innerHTML = "INFINITY"
        } else{
            display.innerHTML = divide(storeVal[j-1],storeVal[j]);
        }
    } else{
        display.innerHTML = "Err";
    };
});

//function to set up 'clear' button
const clr = document.getElementById("clear");
clr.addEventListener('click',function(e){
    display.innerHTML = "";
    j=0;
    i=0;
    storeVal = [];
    storeOp = [];
})

/****REMAINS TO DO
 * Scrub inputs
 * Handle more than one number/ operator (see #7 Gotcha)
 * Extra Credit? 
 * --Dont do decimal
 * --Do Keyboard Support
 * **/




