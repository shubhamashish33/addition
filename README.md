# Addition of two Number
This is simple JavaScipt project which I made. I have recently started learning js so, trying my hands on the project. All the Code is available to download. Also let me know you liked it or not? \

[Visit Now🚀](https://shubhamashish33.github.io/addition/)
## Code
Basic HTML Code
``` html
  <center>
	  <h1>Addition of two Number</h1>
	  <input type="number" name="" id="firstNum" required placeholder="Enter First Number" >
	  <br>
	  <input type="number" name="" id="secondNum" required placeholder="Enter Second Number">
	  <br>
	  <button onclick="getSum()">Calculate Sum</button>
	  <h2 id="result"></h2>
	  <br>
	  <a href="https://shubhamashish33.github.io/socialmedia/" target="_blank" class="Follow">Follow Me ✌</a>
  </center>
```
JavaScript Code
``` js
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
```
## Screenshot
![chrome_gKITFX49ZG](https://user-images.githubusercontent.com/78084828/128614404-9cad33d9-6157-4bfb-b7a1-3c5ddd389198.png)
