//this is a code comment
//Variables
let q='fork';
q='knife';
q='spoon';
console.log(q);
var life=25;
life=42;
life='pain';
var life ='panic';
console.log(life);
const cd = 'code';
console.log(cd);

//How to do Math
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
console.log(r);
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
let pet="cat"
if(pet=='bearded dragon'){
    console.log("I have a cool pet");
    a=117;
    console.log(a)
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
let condition=age>=5 && age<=19
if(age>=16){
    console.log("you can drive")
} 
else if(condition){
    console.log("you could be in school")
}
else{
    console.log("nothing special is happening")
}
let house=true;
if(house){
    console.log("you live in a house")
}
else if(house!=true){
    console.log("you most likely don't live in a house")   
}
else if(house || condition){
    console.log("you are either a child or ......")
}

//assignment starts here
//Chechinkg to makesure my astronauts can gert to the moon
let fuel=1000000100;
let food =4564654
let passengers=1000
let asteroid=false;
//condition to make it
if(food/passengers>=1000 && fuel>=100000000){
    food=food/passengers
    console.log("You made it to mars")
    console.log("you didn't eat anyone on the way")
}
else if(food/passengers<1000 && fuel>100000000){
    passengers=passengers-(food/passengers);
    console.log("you made it to mars but it wasn't a pretty trip")
    console.log("you ate "+food/passengers+" passengers");
}
else if(asteroid){
    console.log("oh no you hit an asteroid and died")
}
else{
    console.log("You didn't make it to Mars, Did you get lost?")
    console.log("the colony has a memorial service for you")    
}