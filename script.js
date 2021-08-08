getCalc = (choise) => {
   let n1 = parseFloat(document.getElementById('firstNum').value);
   let n2 = parseFloat(document.getElementById('secondNum').value);
   let r;
   let c = choise;
   if (isNaN(n1) || isNaN(n2)) {
      document.getElementById('result').innerHTML = 'Please Enter Value';
   }
   else {
      switch (c) {
         case '1':
            r = n1 + n2;
            break;
         case '2':
            r = n1 - n2;
            break;
         case '3':
            r = n1 * n2;
            break;
         case '4':
            r = n1 / n2;
            break;
         default:
            break;
      }
      document.getElementById('result').innerHTML = r;
   }

}

// disable developer mode
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

