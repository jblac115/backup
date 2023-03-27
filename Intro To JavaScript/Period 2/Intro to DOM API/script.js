// 1. select
let sign=document.getElementById('sign');
console.log(sign);
//2. modify
console.log(sign.textContent);
//modifying Text
sign.textContent='Welcome, Travelers';
//modifying the actual HTML code (not recommended)
//sign.innerHTML='<p>Hello!</p>';
sign.innerHTML=sign.innerHTML+'<p>Hello!</p>';
//change Style
sign.style.color='blue';