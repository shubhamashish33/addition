# Simple Calculator
This is simple JavaScipt project which I made. I have recently started learning js so, trying my hands on the project. All the Code is available to download. Also let me know you liked it or not? 

[Visit Now🚀](https://shubhamashish33.github.io/calculator/)

# Screenshot
![chrome_0sXd9OC4Dv](https://user-images.githubusercontent.com/78084828/141943058-8a78d32f-7bcc-48f3-9423-1ce1ffca29b2.png)


# Tech Used ⚙️
1. HTML
2. CSS
3. Javascript 
4. VS Code

# Code
**Basic HTML Code**
``` html
  <center>
	  <h1>Simple Calculator</h1>
	  <input type="number" name="" id="firstNum" required placeholder="Enter First Number" >
	  <br>
	  <input type="number" name="" id="secondNum" required placeholder="Enter Second Number">
	  <br>
	  <!-- button -->
	  <div class="btn">
	  <div class="btn1">
	  <button onclick="getCalc('1')">Addition</button>
	  <button onclick="getCalc('2')">Substraction</button>
	  </div>
	  <div class="btn2">
	  <button onclick="getCalc('3')">Multiplication</button>
	  <button onclick="getCalc('4')">Division</button>
	  </div>
	  </div>
	  <h2 id="result"></h2>
	  <br>
	  <a href="https://shubhamashish33.github.io/socialmedia/" target="_blank" class="Follow">Follow Me ✌</a>
  </center>
```
**JavaScript Code**
``` js
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
```

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shubhamashish33.github.io/aboutmev2/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shubham-ashish-81a6a01b2/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/imaashish_)

**If you likes this repository don't forget to mark it as star 🌟.**

