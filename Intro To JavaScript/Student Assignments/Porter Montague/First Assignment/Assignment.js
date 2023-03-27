// This is the assignment labeled Project 1

// The astronauts are going to Mars

// Variables of the spaceship

let fuel = 150000;
let travelDistance = 500000;
let people = 25;
let amountOfFoodNeeded = 1000;
let timeNeeded = 10;
let timeAvailable = 15;

// Conditionals

// Will you have enough fuel for the journey

if (fuel >= 150000) {
console.log("You have enough fuel for the journey");    
}
else{
    console.log("You do not have enough fuel for the journey");
}

// Will you have enough food for everyone in the spaceship

if (people * 50 < amountOfFoodNeeded) {
    console.log("You will have enough food for the trip");
}
else{
    console.log("You will not have enough food for the trip");
}

// Do you have enough fuel for the distance that you are travelling

if (travelDistance - fuel < 0) {
    console.log("You will not make the journey");
}
else {
    console.log("You will make the journey");
}

// Will they all have enough time for the trip

if (timeAvailable - timeNeeded >= 0 ) {
    console.log("You are now ready for your mission");
}