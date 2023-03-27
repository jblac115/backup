let scrible=1000;
var pet='bearded dragon';
const cheese=true;
console.log(scrible);
console.log(pet);
console.log(cheese);
// addiotion subtraction
let a=52;
console.log(a);
let b=20;
console.log(b);
let c=a+b;
console.log(c);
let d= b-a;
console.log(d);
let e = pet+c;
console.log(e);
let Buzz_lightyear='action hero';
let bearded_dragon=72;
// multiplication and division
let z=a*b;
console.log(z);
let y=a/b;
console.log(y);

let t=2/3;
console.log(t);


// modulus
let odd=3%2;
console.log(odd);

let num='5';
if(num%2==0){
console.log("even number")
}
else{
    console.log("odd number")
}
if(pet=='bearded dragon'){
    console.log('you have a cool pet')
}
let age=17;
let money=true
if (age<17 && money==true){
    console.log("you can watch R rated on your own")
}
else if(age<17 && money){
    console.log("need a parent")
}
else if(!money!=true || age<10){
    console.log("you should not go see the movie")
}
else{
    console.log("you can't go see the movie");
}
let condition2=money!=true ||age<10
let condition1=age>=17 && money==true
let condition3=age<17 && money
if (condition2){
    console.log("you should not go see the movie")
}
else{
    console.log("you can't go see the movie")
}
let time=47
let spaghetti=time==42;
if(spaghetti){
    console.log("i have the answer")
}
else{
    console.log("i don't have the answer")
}
// assignment starts here

// you can change the amounts of food passengers and fuel to change the outcome.

let fuel=100
let food=100
let passengers=50
let water=100
if(food==passengers){
    console.log("we can go to mars")
}
else if(food!=fuel){
    console.log("we can't make it past the moon")
}
else if(passengers>50){
    console.log("we will make it to the sun")
}
else if (passengers<50){
    console.log("we won't make it to the sun")
}
if(food==100){
    console.log("we can make it to the moon and back")
}
else if (food<=100){
    console.log("we will starve on the way back from the moon")
}
if (passengers+fuel>=1000){
    console.log("too heavy")
}
if (food+passengers>=200){
    console.log("hungry")
}
if(food+passengers+fuel+water<=400){
    console.log("mission is good")
}
else if(food+water+passengers+fuel>=500){
    console.log("mission will fail do not proceed")
}
// open with google chrome :)