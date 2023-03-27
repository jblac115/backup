//this is a code comment
//Variables 
let q="fork";
q='knife';
q='spoon';
console.log(q);
var life=25;
life=42;
life='pain';
var life='panic';
console.log(life)
const cd = 'code'; 
console.log(cd);

//How to do Math arithmetic operators 
let a=8; 
let b = 25; 
let x = a+b; 
console.log(x); 
console.log(a+b);
let y = b-a; 
console.log(b-a);
let ko = a*b;
console.log(ko);
console.log(a*b);
let r= a/b; 
console.log(r) 
console.log(a/b); 
//modulus
let l=3; 
let g=2;
let p= l%g;
console.log(p)
let v=g%l
console.log(v); 

//shortcuts
let was = a+=34
was= a++ 
let what = a-=17;
what = a--

//conditional statements
let pet='cat'
if(pet=='bearded dragon'){
    console.log('I have a cool pet')
}
else if(pet=='cat'){
    console.log('I have a demon in my house');
    a=113;
    console.log(a);
}
else{
    console.log('I dont have a cool pet'); 
}

let example=pet+a; 
console.log(example);
let age = 17; 
let conditon= (age>=5 && age<=19)
if(age>=16){
    console.log('you can drive')
}
else if(conditon==true){
    console.log('you could be in school')
}
else{
    console.log('nothing special is happening')
}
let house=true 
if(house){
    console.log('you live in a house')
}
if(house!=true){
    console.log('you most likely dont live in a house')
}
else if(house || conditon){
    console.log("you are either a child or .......")
}


//assignment starts here 
//spacemen are seeing if they have everything they need to go to the moon 
//condition that need to be met 
//are we light enough 
let weight=40
let passengers=2

let shuttleWeight= weight*passengers
if(shuttleWeight<=90){
    console.log('weight=good')
} 
else if(shuttleWeight>90){
    console.log('weight=bad')
}
//do we have enough fuel 
let fuel=60
let fuelEf=2

let shuttleFuel =fuel*fuelEf
if(shuttleFuel>=100){
    console.log('fuel=good')
}
else if (shuttleFuel<100){
    console.log('fuel=bad')
}
//do we have enough food 
let bread=20
let orange=30
let food= bread+orange
if(food>=40){
    console.log('food=good')
}
else if(food<40){
    console.log('food=bad')
}
//are there objects in the way
let objects=0 
if(objects<1){
    console.log('sky=good')
}
else if(objects>=1){
    console.log('sky=bad')
}
