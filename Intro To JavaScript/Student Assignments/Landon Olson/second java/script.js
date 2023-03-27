//global variables at top
let results=10
//functions
let score=17; //global variable
function hourToMin(hours){
    let result = hours*60; //local only used by function
    console.log(result);
    return result;
}
let a = hourToMin(18);
let result=16;
function daysToHours(days){
    return days*24;
}
let day = daysToHours(16);
console.log(day);
day=daysToHours(1645);
console.log(day);
//checking an item
let balance=100
let stock=50
let price=5
//calling a function
sellItem(10);
//function decleration
function sellItem(quantity){
    if(stock>=quantity){
    stock-=quantity
    //stock = stock - quantity ----- this could also work
    balance+=price*quantity
    //balance = balance + pqwertyuiorice * quantity
    console.log("purchase completed $" + balance + stock + " items left")
    }
    else(
        console.log('no sale, try again')
    )
}
// objects - allow you to do more with variables - a storage of information
let player={
    age: 37, 
    hp: 1,
    energy: '10',
    size: 'extra-large',
    outfit:{
        color: "black",
        fabric: 'leather',
        type: 'armour',
    }
};
console.log(player);
//access parts of an object
console.log(player.age); //console.log(player.age,player.size);
console.log(player['age'])
//modify pieces of our object
player.age=27
console.log(player.age);
player.outfit.color='orange';
console.log(player);
//add stuff to our object
player.name='john cena';
console.log(player);
//delete parts of out object
delete player.outfit;
console.log(player);
//methods - functions that operate inside of objects
let players ={
    health:100,
    fun:0,
    play: function(food){
        if(food=='apple'){
            this.health+=10 //goes up to find health
    }
    else if(food=='candy'){
        this.health+=5;
        this.fun+=5;
    }
    }
}
    players.play('apple'); 
    console.log(players);
    players.play('candy');
    console.log(players);
    //hippo object
    let hippo={
        hippoMurder:true,
        hippoAttack:function(players){
            if(this.hippoMurder==true){
                delete players
                console.log("player is dead")
                console.log("better luck next time")
            }
        }
    }
hippo.hippoAttack(players);
//while loops
function sendHelp(){ //adfsl;jkasjkl;fasdjkl;adfsjlk;dafsjkl;adfsjkl;adfsj;klafdsjkl;
    console.log('send help')
}
let i = 10;
while(i>0){
    sendHelp();
    i--;
}
for(let a = 10;a>0;a--){
    sendHelp();
}
//object creating assignment
let playerz={
    hp: 100,
    play: function(drink){
        if(drink==false){
            this.hp+=10
        }
        else if(drink==true){
            this.hp-=10
            console.log('it was poisened')
        }

    }
}
let monster={
    monsterForce:true,
    monsterForce:function(playerz){
        if(this.monsterForce==true){
            hp-=10
            console.log('the monster forced you to drink the poisen')
        }
    }
}
//arrays (lists)
let list=['immortal groundhog',138,'gobblers knob','he is right 42%']
console.log(list);
//change the information
list[3]='he is right 50%';
console.log(list);
//access informatio
let groundhog=list[1]
console.log(groundhog);
//access the last piece of list
let log=list[list.length-1];
let last = list.length;
console.log(log);
console.log(last);
//add items
list.push('lives i nthe library')
console.log(list);
//delete the last item
list.pop();
console.log(list);
//iterating over arrays
let highScores=[78,97,105];
//increase all scores by 1
let j=0;
while(j<highScores.length){
    highScores[j]++;
    j++;
}
console.log(highScores);
let bestDay=[
    {
        title:"Groundhog Day",
        worth:"nothing",
        person:"Mr. Black"
    },
    {
        title:"Christmas",
        worth:"Everything",
        person:"Landon"
    },
    {
        title:"Feb. 18th",
        worth:"depends",
        person:"Kaden"
    }
]
bestDay.forEach(function(entry){
    if(entry.title=="Groundhog Day"){
        entry.title=='GroundHog Day'
    }
    else if(entry.title!="Groundhog Day"){
        entry.title="GroundHog Day";
    }
})
console.log(bestDay);
//multidemsional arrays
let array=[[1,2,3],[1,2,3],[1,2,3]];
console.log(array);
console.log(array[0][0]);
let terrain=[
    ['desert','desert','forest','beach'],
    ['desert','forest','beach','island'],
    ['mine','forest','burned out forest','lake']
]
console.log(terrain);
terrain[0][3]='forest';
terrain[1][2]='forest';
console.log(terrain);

//start of project 2
let hero={
    name: 'hero',
    health: 100,
    damage: 100,
}
console.log(hero);
let badGuy={
    name: 'bad guy',
    health: 100,
    damage: 10,
}
console.log(badGuy);
function didDamage(){
    console.log("you did 10 damage")
}
function tookDamage(){
    console.log("you took 10 damage")
}
let p = 10;
while(p > 0){
    tookDamage();
    p--;
}
function youDied(){
    console.log("you died")
}
let death = true;
if(death = true){
    youDied();
}
//you died in the game but you want revenge on the bad guy
let list2=['respawn','new game','close game']
console.log(list2);
let respawn = true;
if(respawn = true){
    console.log("you respawned");
    console.log("Which weapon will you take?");
    let list3 = ['knife','spoon','RPG'];
    console.log(list3);
}
let RPG = true;
if(RPG = true){
    console.log("you picked RPG")
}
console.log("you fight the bad guy again");
let f = 10;
while (f > 5){
    tookDamage();
    f--;
}
let g = 10;
while (g > 3){
    didDamage();
    g--;
}
while (f>0){
    tookDamage();
    f--;
}
youDied();
console.log("wow you suck");
let list4 = ['respawn','new game','close game'];
console.log(list4);
// im not creative im trying to cram in loops
let closeGame = true;
if (closeGame = true){
    console.log("you closed the game and gave up because you suck.");
}


