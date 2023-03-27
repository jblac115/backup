//How to make a variable
//ctrl+/ comment or uncomment whole blocks
let scribble=1000;
var pet="bearded dragon";
const chesse=true;
console.log(scribble);
console.log(pet);
console.log(chesse);

scribble=150;
console.log(scribble);
//addition subtraction
let a=52;
let b=20
let c= a+b;
console.log(c);
let d= b-a;
console.log(d);
let e=pet+c;
console.log(e);
//multiplication
let z=a*b;
console.log(z);
let y=a/b;
console.log(y);

//modulus
let odd=3%2;
console.log(odd);
if(pet=="bearded dragon"){
    console.log("you have a cool pet");
}
else{
    console.log("your pet is boring");
}
let age=17;
let money=true;
let condition2=money!=true || age<10;
let condition1=age>=17 && money==true
let condition3=age=age<17 && money
if (condition1){
    console.log("you can watch R rated on your own");
}
else if(condition3){
    console.log("need a parent");
}
else if(condition2){
    console.log("you should not go see the movie")
}
else{
    console.log("you can't go see the movie")
}

//assignment starts here
//checking to make sure my astronauts can get to the moon
let fuel=100;
let food=100;
let crew=4;
let ship=true;
//condition to make it
if (fuel==100 && food==100 && ship){
    console.log("Successful Landing!!");
}
else if(fuel<90 || food<100 || crew<4 || ship==false){
    console.log("Spaceship Crashed!!");
}
else if(fuel+food+crew>=1000){
    console.log("Too Heavy To Lift Off")
}
else if (food/crew>=50){
    console.log("Enough Food For Adventure")
}
