// Simple calculator function
function simpleCalculator() {
  // converts the string from the prompt to a number and assigns it to the variable
  let firstNumber = parseInt(prompt('Enter first number'));
  let secondNumber = parseInt(prompt('Enter second number'));
  // prompts the user to choose an operator and assigns it to the variable
  let operator = prompt('Enter operator: +, -, *, /');
  // variable to hold the result of the calculation
  let result;

  // if the operator is addition
  if (operator === '+') {
    result = firstNumber + secondNumber;
  }
  // if the operator is subtraction
  else if (operator === '-') {
    result = firstNumber - secondNumber;
  }
  // if the operator is multiplication
  else if (operator === '*') {
    result = firstNumber * secondNumber;
  }
  // if the operator is division
  else if (operator === '/') {
    result = firstNumber / secondNumber;
  }
  // if the operator is not one of the above
  else {
    alert('Invalid operator');
    return;
  }

  // alerts the result
  alert('The result is : ' + result);
}

simpleCalculator();
