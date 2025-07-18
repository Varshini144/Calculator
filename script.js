function calculate(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;
  
    if (isNaN(num1) || isNaN(num2)) {
      result = "Enter valid numbers!";
    } else {
      switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
      }
    }
  
    document.getElementById("result").textContent = "Result: " + result;
  }
  