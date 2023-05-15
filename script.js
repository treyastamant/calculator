let num1 = 5;
let op = "+";
let num2 = 2;
let displayValue;

const display = document.querySelector('#display');
for (let i = 0; i < 10; i++) {
  const num = document.getElementById(i);
  num.addEventListener('click', () => {
    display.textContent += i;
  });

  const clear = document.querySelector('#clear');
  clear.addEventListener('click', () => {
    display.textContent = "";
  });
}

for (let i = 1; i < 5; i++) {
  const oper = document.getElementById('op' + i);
  oper.addEventListener('click', () => {
    let x = oper.textContent;
    display.textContent += " " + x + " ";
  });
}



const equals = document.querySelector('#op5');
  equals.addEventListener('click', () => {
    displayValue = display.textContent;
    console.log(displayValue);
    operate('+', 4, 4);
  });



// Calculate functions
function addIt(a, b) {
  return a + b;
}

function subtractIt(a, b) {
  return a - b;
}

function multiplyIt(a, b) {
  return a * b;
}

function divideIt(a, b) {
  return a / b;
}

function operate(op, a, b) {
  if (op === "+") return addIt(a, b);
  if (op === "-") return subtractIt(a, b);
  if (op === "*") return multiplyIt(a, b);
  if (op === "/") return divideIt(a, b);
}





// console.log(addIt(2, 2));
// console.log(subtractIt(2, 2));
// console.log(multiplyIt(2, 2));
// console.log(divideIt(2, 2));
// console.log(operate(op, num1, num2));