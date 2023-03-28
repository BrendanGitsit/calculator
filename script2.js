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
        return "Err";
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
let storeTemp = new Array;
let j =0;
let k =0;
let m =0;
const operators = document.getElementsByClassName("operator");
for(let i=0; i<operators.length;i++){
    operators[i].addEventListener('click',function(e){
        storeVal[j] = display.innerHTML;
        storeOp[k] = e.target.id;
        display.innerHTML ="";
        if(m==0){
            storeTemp[m]= storeVal[j];
        } else{
            storeTemp[m]= operate(storeTemp[m-1],storeOp[k-1],storeVal[j]);
        };
        console.log(storeTemp[m]);
        j++;
        k++;
        m++;
    });
};

//function to set up equal w/ Event Listener
const equal = document.getElementById("equal");
equal.addEventListener('click',function(e){
    storeVal[j] = display.innerHTML;
    display.innerHTML = operate(storeTemp[m-1],storeOp[k-1],storeVal[j]);
    j++;
});

//function to set up 'clear' button
const clr = document.getElementById("clear");
clr.addEventListener('click',function(e){
    display.innerHTML = "";
    i=0;
    j=0;
    k=0;
    m=0;
    storeVal = [];
    storeOp = [];
    storeTemp = [];
});

//function to add keyboard event listeners
/*
document.addEventListener('keydown', (event) => {
    var name = event.key;
});
*/

/****REMAINS TO DO
 * Scrub inputs
 * Extra Credit? 
 * --Dont do decimal
 * --Do Keyboard Support
 * **/




