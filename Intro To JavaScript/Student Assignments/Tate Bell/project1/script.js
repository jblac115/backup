var food = 100 //3 food is needed for one person
var fuel = 30000 //100 fuel is needed for each person + 10 for each food
var passengers = 3 //amount of people on spaceship

var portions = "undefined"
var weight = "undefined"
var operators = "undefined"

var x = food/passengers
var yA = 100*passengers
var yB = 10*food
var y = yA + yB

if(x >= 3){ //conditional statement to check for enough food
    console.log("Spaceship has enough food")
    var portions = true
}
else{
    console.log("Spaceship does not have enough food")
    var portions = false
}

if(y <= fuel){  //conditional statement to check for enough fuel
    console.log("spaceship has enough fuel")
    var weight = true
}
else{
    console.log("spaceship does not have enough fuel")
    var weight = false
}

if(passengers >= 3){  //conditional statement to check for enough crew members
    console.log("spaceship has enough crew members")
    var operators = true
}
else{
    console.log("spaceship does not have enough crew members")
    var operators = false
}

if(weight == true && portions == true && operators == true){  //conditional statement to check for enough resources
    console.log("spaceship has enough resources to take off!")
}
else{
    console.log("spaceship does not have enough resources to take off")
}
