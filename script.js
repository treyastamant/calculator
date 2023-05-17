let num1 = 5;
let op = "+";
let num2 = 2;

const display = document.querySelector('#display');
const calculator = document.querySelector('#calc');
const buttons = document.querySelector('#buttons');
const operators = document.querySelectorAll('.op');

  buttons.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
      const button = e.target;
      const action = button.dataset.type;
      const buttonContent = button.textContent;
      const displayContent = display.textContent;
      const previousButton = buttons.dataset.previousButton;

      operators.forEach((e) => {
        e.classList.remove('active');
      });

      if (!action) {
        buttons.dataset.previousButton = 'number';
        if (displayContent === '0' || previousButton === 'operator' || previousButton === 'calculate') {
          display.textContent = button.textContent;
        } else {
          display.textContent = displayContent + button.textContent;
        }
      }

      if (action === 'decimal') {
        if (!displayContent.includes('.')) {display.textContent = displayContent + '.';}
        else {display.textContent = displayContent;}
      }

      if (action === 'clear') display.textContent = "0";

      if (action === 'add' || 
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide') {
        button.className = 'active';
        buttons.dataset.previousButton = 'operator';
        calculator.dataset.valueOne = display.textContent;
        calculator.dataset.operator = action;
      }
      
      if (action === 'calculate') {
        buttons.dataset.previousButton = 'calculate';
        const valueOne = calculator.dataset.valueOne;
        const operator = calculator.dataset.operator;
        const valueTwo = display.textContent;
        console.log(valueOne, operator, valueTwo);
        display.textContent = calculate(valueOne, operator, valueTwo);
      }
    }
  });

function calculate(n1, op, n2) {
  if (op === 'add') return parseFloat(n1) + parseFloat(n2);
  if (op === 'subtract') return parseFloat(n1) - parseFloat(n2);
  if (op === 'multiply') return parseFloat(n1) * parseFloat(n2);
  if (op === 'divide') return parseFloat(n1) / parseFloat(n2);
}