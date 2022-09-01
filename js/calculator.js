
let currNumber = "";
let prevNumber = "";
let operator = "";

const display = document.querySelector('.display');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.point');
const clear = document.querySelector('.clear', );
const backspace = document.querySelector('.backspace');
const plusminus = document.querySelector('.plusminus');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

equal.addEventListener('click',calculate);

clear.addEventListener('click', clearContent);

backspace.addEventListener('click', backContent);

decimal.addEventListener('click', () =>{
    addDecimal();
});

plusminus.addEventListener('click', () =>{
    addMinus();
});


numbers.forEach((div) => {
    div.addEventListener('click', (e) => {
      keepValue(e.target.textContent);
    });
});

function keepValue(num){
    if(currNumber.length <= 11){
        currNumber += num;
        display.textContent = currNumber;
    }
};

operators.forEach((div) => {
    div.addEventListener('click', (e) => {
      keepOperator(e.target.textContent);
    });
});

function keepOperator(op){
    operator = op;
    prevNumber = currNumber;
    display.textContent = prevNumber+ "" +operator;
    currNumber = "";
}

function calculate(){
    prevNumber = Number(prevNumber);
    currNumber = Number(currNumber);

    switch(operator){
        case "+":
            prevNumber = prevNumber + currNumber;
            break;
        case "-":
            prevNumber = prevNumber - currNumber;
            break;
        case "x":
            prevNumber = prevNumber * currNumber;
            break;
        case "/":
            if(currNumber <= 0){
                prevNumber = "Error";
                display.textContent = prevNumber;
                operator = "";
            }
            else{
                prevNumber = prevNumber / currNumber;
            }            
            break;
        case "%":
            prevNumber = prevNumber % currNumber;
            break;
        default:
            document.querySelector('.display').textContent = 0;
    }
    prevNumber = roundResult(prevNumber);
    prevNumber = prevNumber.toString();
    displayResult();

}

function displayResult(){
    display.textContent = prevNumber;
    operator = "";
    prevNumber = "";
    currNumber = "";
}

function roundResult(num){
    return Math.round(num * 100) / 100;
}

function clearContent(){
    display.textContent = 0;
    operator = "";
    prevNumber = "";
    currNumber = "";
}

function backContent(){
    const back = display.textContent.slice(0, -1);
    if(back > 0){
        currNumber = back;
        prevNumber = currNumber;
        display.textContent = back;        
    }
    else{
        display.textContent = 0;
        prevNumber = "";
        currNumber = "";
        operator = "";
    } 
}

function addDecimal(){
    if(!currNumber.includes("-")){
        currNumber += ".";
        display.textContent = currNumber;
    }
}

function addMinus(){
    if(!currNumber.includes("-")){
       currNumber = "-" +currNumber;
        display.textContent = currNumber;
    }
}