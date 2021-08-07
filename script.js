getSum = () => {
  let num1 = parseFloat(document.getElementById('firstNum').value);
  let num2 = parseFloat(document.getElementById('secondNum').value);
  if(isNaN(num1) || isNaN(num2))
  {
    document.getElementById('result').innerHTML = 'Please Enter Value';
  }
  else{
  document.getElementById('result').innerHTML = num1 + num2;
  }
}
