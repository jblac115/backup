//1. select what you are tying to change
let sign=document.getElementById('sign');
console.log(sign);
//2. modify it
console.log(sign.textContent)
//modify
sign.textContenet='Groundhog Day is the best!!'//...
console.log(sign.textContent);
sign.innerHTML=sign.innerHTML+'<p style="color'//...
//change style
sign.style.color = 'green'