// Java coment
// Variables
let q='fork';
q='knife';
q='SPOOOOOOOOON';
console.log(q);
var life=42;
life=25;
life='pain'
var life='panic';
console.log(life);
const cd='code';
console.log(cd);

//How to do Math
let a=8;
let b=25;
let x=a+b
console.log(x);
console.log(a+b);
let y=b-a;
console.log(b-a);
let ko=a*b;
console.log(ko);
let r=a/b
console.log(r);
//modulus
let l=3;
let g=2;
let p=l%g;
console.log(p);
let v=g%l;
console.log(v);

//shortcuts
let was=a+=1;
was=a++;
let what=a-=17;
what=a--;

//conditional statments
let pet="cat";
if(pet=='Mr Floofers'){
    console.log("I have a cool friend :)");
}
else if(pet=="cat"){
    console.log('I have a floofy fun demon in my house');
}
else{
    console.log('I dont have a cool friend :(');
}

let example=pet+a;
console.log(example);
let age=17;
let condition=age>=5 && age<=19
if(age>=17){
    console.log("You can do drugs :P")
}
else if(condition){
    console.log("You could be in prison")
}
else{
    console.log("Nothing special is happening")
}
let house=true;
if(house){
    console.log("Congrats! You are not a hobo!")
}
if(house==true){
    console.log("Congrats! You are not a hobo!")
}
else if(house!=true){
    console.log("Sadge. You hobo.")
}
else if(house || condition){
    console.log("You are either a child or a five year-old koala with a house.")
}

//assignment starts here
//3 Penguins are being sent to mars to prove penguins can fly
let fuel = 4200000
let fuelWeight = 2000
let penguin = 13
let rocket = 5000
let power = fuel*91
let fuelLoss = fuel/91
let weight = (penguin*3)+rocket+fuelWeight
let distanceKm = (power+(fuel-fuelLoss))-weight
let doDoBird = false

if(weight>=10000){
    console.log("You are too heavy.")
}
else if(distanceKm<=0){
    console.log("Penguin Crash")
}
else if(distanceKm>0){
    console.log("Penguin Fly!")
    if(distanceKm>=225000000){
        console.log("Penguin Made It to Mars and beat the communist dodo birds!!!")
    }
}

if(doDoBird==true){
    console.log("Dodo Beat you. You lost to the communists :(")
}



















/*
Failed code :)

Did not work because I was trying to do variables that would be activly changing like in a game.

let startPuReactor = 427000000000000
let fuelEffecienty = startPuReactor/91
let distanceKm = 225000000
let speedKmPh = 20000
let time = distanceKm/speedKmPh
let DistanceKmTravled = time*speedKmPh
let puReactor = startPuReactor-(fuelEffecienty*DistanceKmTravled)

let distanceKmleft = distanceKm - DistanceKmTravled

if(puReactor>0 && time>0){
    console.log("Flight in progress")
}
else if(puReactor<=0){
    console.log("Out of fuel!")
}
else if(time<=0){
    console.log("Mission Complete!!!")
}

*/