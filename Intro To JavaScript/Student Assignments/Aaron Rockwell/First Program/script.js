//How to make a variable
//ctrl+/ comment or uncommet whole blocks
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
let b=20;
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
let condition2=money !=true || age<10;
let condition1=age>=17 && money==true;
let condition3=age<17 && money==true;
if (condition1){
    console.log("you can watch R rated on your own");
}
else if(condition3){
    console.log("need a parent");
}
else if(condition2){
    console.log("you should not go see the movie");
}
 else{
    console.log("you can't see the movie");
 }
 let time=42;
 if(time){
    console.log("I have the answer");
 }
//------------------assignment start------------------
//Trip to mars and back
//variables
let fuel=50;
let food=100;
let crew=8;
//Checking if the trip will work
let condition11=fuel>=50 && crew>=8 && food>=100;
let condition12=fuel<50 && crew>=8 && food<100;
let condition13=food<=100 && crew<=6 && fuel>=50;
let condition14=food<100 && crew>=8 && fuel>=50;
let condition15=food>=100 && crew>=8 && fuel <50;
//else and if statements
if (condition11){
    console.log("The trip will be successful");
}
else if(condition12){
    console.log("The ship will need more fuel and food");
}
else if(condition13){
    console.log("The mission will fail without enough crew");
}
else if(condition14){
    console.log("Not enough food for the crew causing the mission to fail");
}
else if (condition15){
    console.log("The ship would need to refuel or else it will fail");
}
//Arithmetic operators
let lbs_food=1;
let each_crew_food_needs=2;
let miles_travled=50;
let F=lbs_food*each_crew_food_needs;
console.log(F);
let C=F*crew;
conditionfood=16;
if (conditionfood){
    console.log("The amount of lbs of food needed for the trip is 16");
}
console.log(C);
let H=miles_travled*fuel;
console.log(H);
let J=H/50;
let conditionJ=J=50;
console.log(J);
if (conditionJ){
    console.log("50 fuel is the amount needed for to make it");
}
