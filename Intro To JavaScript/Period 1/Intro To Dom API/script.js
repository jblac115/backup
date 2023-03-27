//1. select 
let sign=document.getElementById('sign');
console.log(sign);

//2. Modify
//modifying text
console.log(sign.textContent);
sign.textContent='Welcome Travelers';
//change the actual HTML code (not recommended)
sign.innerHTML=sign.innerHTML+ '<p>Hello!</p>';

//3. change the style
sign.style.color='blue';


