//This is a comment
//Variables
let q = "fork's";
q = "spoon's"
var life = 25;
life = 42;
life = 'suffering';
var life = 'panic';
const cd = 'Hercules';
console.log(q);
console.log(life);
console.log(cd);

// how to calculate mathmatic equations

let a = 8;
let b = 25;
let x = a + b;
console.log(x);
let ko = a * b;
console.log(ko);
let qu = a/b;
console.log(qu);
let l = 3;
let g = 2;
let p = l%g;
console.log(p);
let v = g%l;
console.log(v)
//Conditional Statements
let pet = "cat"
if(pet=="bearded-dragon"){
    //This will run when the statement meets the requirements
    console.log("I have a cool pet.")
}
else if (pet == "cat") {
    console.log("I live with the Anti-Christ.")
} 
else {
    console.log("That is a pet")
}

let age = 17;
if (age>=16){
    console.log("You can drive!")
} else if(age >=5 && age<= 19) {
    console.log("You could be in school")

} else {
    console.log("um you good?")
}

let house = true;

if (house){
    console.log("congrats, you have something!")
}

// assignment starts here
// Shawn Pocock, it is the 26th of January of 2023
// Creating the variables for the project

let health = 100;
let attack = 7;
let crit = attack*3;
let miss = 1;
let dodge = 7;
let life = true
// seeing if you dodge... or get hit?
if (dodge >= miss){
    console.log("you dodged!.. a miss.")
}
else {
    console.log("how?")
    health -= 1;
}
console.log(health)
// seeing if you dodged or got hit
if (dodge > attack) {
    console.log("you dodged an attack!")
} else if (dodge == attack) {
    console.log("you barely dodged")
    health -= 3;
} else {
    console.log("you got hit!")
    health -= attack;
}
console.log(health);
// seeing if you were crit or dodged
if (dodge > crit){
    console.log("Whoa you dodged a crit")
} else if (dodge==crit){
    console.log("you were hit but took minimal damage.")
    health -= attack;
} else {
    console.log("Ouch you got hit from a crit!")
    health -= crit;
}
console.log(health);
// we are checking if you are wounded
if (health <= 100 || health >= 80) {
    console.log("you are a little damaged")
} else if (health = 79 || health >= 50){
    console.log("you are wounded.")
} else if (health = 49 || health >= 20) {
    console.log("you are servely injuried!!!")
} else {
    console.log("You're either dead, or yeetus")
    life = false;
}







