let num1 = 5;
let op = "+";
let num2 = 2;
let displayValue = [];

const display = document.querySelector('#display');
for (let i = 0; i < 10; i++) {
  const num = document.getElementById(i);
  num.addEventListener('click', () => {
    display.textContent += i;
    displayValue.push(i);
    console.log(displayValue, 'Display Value')
  });
}

for (let i = 1; i < 5; i++) {
  const oper = document.getElementById('op' + i);
  oper.addEventListener('click', () => {
    let x = oper.textContent;
    display.textContent += ` ${x} `;
    displayValue.push(x);
  });
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  display.textContent = "";
});

const equals = document.querySelector('#op5');
  equals.addEventListener('click', () => {
    console.log(displayValue);
    // displayValue.split(' ');
    console.log(displayValue);
    num1 = displayValue[0];
    op = displayValue[1];
    num2 = displayValue[2];
    
    let ans = operate(op, num1, num2);
    console.log(ans);
  });



// Calculate functions
function addIt(a, b) {
  return a + b;
}

// function addIt(array) {
//   for (let i = 0; i <= array.length; i++){
//     let answer = 
//   }
//   return a + b;
// }

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