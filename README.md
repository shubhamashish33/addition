# Simple Calculator
This is simple JavaScipt project which I made. I have recently started learning js so, trying my hands on the project. All the Code is available to download. Also let me know you liked it or not? 

[Visit Now🚀](https://shubhamashish33.github.io/calculator/)

## Screenshot
![chrome_Hxk9no80KY](https://user-images.githubusercontent.com/78084828/128639674-14abd991-e4bd-4cc5-bcff-4f1e624ec70b.png)


## Code
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

## Follow
![PngItem_4409921](https://user-images.githubusercontent.com/78084828/134414120-1e999523-0559-4430-a677-05e0f3f1392c.png)

If you likes this repository don't forget to mark it as star 🌟. \
<br>
[![](https://img.shields.io/twitter/follow/imaashish_?style=social)](https://twitter.com/imaashish_)
