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
// disable develope mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
