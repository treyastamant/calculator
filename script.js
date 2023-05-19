const display = document.querySelector('#display');
const calculator = document.querySelector('#calc');
const buttons = document.querySelector('#buttons');
const operators = document.querySelectorAll('.op');

  buttons.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
      const button = e.target;
      const action = button.dataset.type;
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
        buttons.dataset.previousButton = 'decimal';
        if (!displayContent.includes('.')) {display.textContent = displayContent + '.';}
        else if (previousButton === 'operator') {display.textContent = "0."}
        else {display.textContent = displayContent;}
      }

      if (action === 'clear') {
        display.textContent = "0";
        calculator.dataset.valueOne = '';
        calculator.dataset.operator = '';
      }

      if (action === 'add' || 
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide') {
     
        const valueOne = calculator.dataset.valueOne;
        const operator = calculator.dataset.operator;
        const valueTwo = display.textContent;

        if (valueOne && operator && previousButton != 'operator' && previousButton != 'calculate') {
          display.textContent = calculate(valueOne, operator, valueTwo);
        }

        button.classList = 'active';
        buttons.dataset.previousButton = 'operator';
        calculator.dataset.valueOne = display.textContent;
        calculator.dataset.operator = action;
      }
      
      if (action === 'calculate' && previousButton != 'calculate') {
        buttons.dataset.previousButton = 'calculate';
        const valueOne = calculator.dataset.valueOne;
        const operator = calculator.dataset.operator;
        const valueTwo = display.textContent;
        display.textContent = calculate(valueOne, operator, valueTwo);
      }
    }
  });

let ans;

function calculate(n1, op, n2) {
  if (op === 'add') {
    ans = parseFloat(n1) + parseFloat(n2);
    return parseFloat(ans.toFixed(2));
  }
  if (op === 'subtract') {
    ans = parseFloat(n1) - parseFloat(n2);
    return parseFloat(ans.toFixed(2));
  }

  if (op === 'multiply') {
    ans = parseFloat(n1) * parseFloat(n2);
    return parseFloat(ans.toFixed(2));
  }
  
  if (op === 'divide') {
    ans = parseFloat(n1) / parseFloat(n2);
    return parseFloat(ans.toFixed(2));
  }
}