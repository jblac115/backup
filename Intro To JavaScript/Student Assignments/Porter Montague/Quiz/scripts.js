// 1. Select the element you want to modify

let sign=document.getElementById('sign');
console.log(sign);

// 2. Modify

// Modifying text

sign.textContent='Groundhog Day is the best!!';
sign.innerHTML=sign.innerHTML+'<p style=color:b>'

// Modifying color

sign.style.color='rgb(117,38,42)';