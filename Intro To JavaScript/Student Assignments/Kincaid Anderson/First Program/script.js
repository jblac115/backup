//How to make a variable
let scribble=1000;
var pet='bearded dragon';
const cheese=true;
console.log(scribble);
console.log(pet);
console.log(cheese);

let a=52;
let b=20
let c= a+b;
console.log(c);
let d= b-a;
console.log(d);
let e= pet+c;
console.log(e);
let z=a*b
console.log(z);
let y=a/b
console.log(y);

let t=2/3
console.log(t);

//modulus
let odd=3%2;
console.log(odd);

let num=5;
if(num%2==0){
    console.log("even number")
}
else{console.log("odd number")}

let age=16;
let money=false;
let condition2=money!=true || age<10
let condition1=age>17 && money==true
let condition3=age<17 && money
if (condition1){
    console.log("you can watch R rated movie on your own")
}
else if(condition3){
    console.log("need a parent");
}
else if(condition2){
    console.log('you should not go see the movie')
}
else{
    console.log("you can't go see the movie");
}
let time=42;
if(time){
    console.log("I have the answer");
}

//assignment starts here
//Supplies for the journey to the moon
let fuel=100000;
let food=50000
let people=12
let weight=50000000
let oxygen=10000
let imposter=1
let space=100000
//conditions to make sure the journey is succsesful
let condition4=fuel>74000
let condition5=food>24000
let condition6=people>4
let condition7=weight<100000000
//if conditions are met then the journey will be succsessful
if(condition4){
    console.log("You have enough fuel to make it too the moon")
}
else{
    console.log("You do not have enough fuel to make it to the moon")
}
if(condition5){
    console.log("You have enough food to feed your astronauts")
}
else{
    console.log("your astronauts will starve")
}
if(condition6){
    console.log("You have enough astronaughts to get your spaceship to the moon")
}
else{
    console.log("you do not have enough astronauts to get your spaceship to the moon")
}
if(condition7){
    console.log("You can get your spaceship into space")
}
else{
    console.log("Your spaceship ate too many computer chips and is too fat to get off the ground")
}
if(people*1000>=oxygen){
    console.log("your people can breathe")
}
else{
    console.log("your people will suffocate")
}
if(imposter*5>=people){
    console.log("Your people will DIE")
}
else{
    console.log("You ejected the imposter before it killed anyone")
}
if(people*1000+food<space){
    console.log("you had enough space")
}
else{
    console.log("someone got crushed")
}