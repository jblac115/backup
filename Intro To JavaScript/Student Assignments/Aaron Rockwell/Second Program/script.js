//global vairables get defined at the top of the page
let balance=100;
let stock=50;
let price=5;
//functions
function hrsToMins(hours){
    //local variable
    let result=hours*60;
    console.log(result);
    //returning this makes it so i can use outside of function
    return result;
}
hrsToMins(37);
hrsToMins(6);
hrsToMins(2.5);

function hrsToDays(hours){
    let result=hours/24;
    console.log(result+" Days");
    return result;
}
hrsToDays(70);
//how cash registers workish
function sellItem(quantity){
    //check to see if we have stock
    if(stock>=quantity){
        //reduce my stock
        stock-=quantity;
        balance+=price*quantity;
        console.log("purcahse completed our new balance is $", balance, "Stock left",stock);
    }
    else{
        console.log("Not enough stock");
    }
};
sellItem(15);
sellItem(40);

let player={
    age:4000,
    height:7,
    name:"Bob",
    health:100,
    outfit:{
        color:"black",
        size:"XL",
        underwater:true
    }
}
console.log(player);
//accesing one piece of information from an object
console.log(player.name);
console.log(player["name"]);
//change attributes of our player
player.age=7;
console.log(player);
//delete an attribute
delete player.name;
console.log(player);
//creating an attirubte
player.legs="long";
console.log(player);
//acces object inside of the object
player.outfit.underwater=false;
console.log(player);
//functions inside an object(method)
let hero={
    health:100,
    fun:0,
    play: function(food){
        if(food=='apple'){
            this.health+=10;
            //health=health+10
            }
            else if(food=="candy"){
                this.health+=5;
                this.fun+=5;
            }
    }
}
hero.play("apple");
console.log(hero);
hero.play("candy");
console.log(hero);
//loops
//while loop
function sendhelp(){
    console.log("Send Help");
}
let i=0;
while(i<10){
    sendhelp();
    i++
    //i=1+1
    //i+=1
}
//for loop
for(a=0;a<10;a++){
    sendhelp();
}
//arrays also called lists
let list=["immortal groundhog","right often","has carols",118];
console.log(list);
//change our list
list[3]=138;
console.log(list);
//add to out list
list.push("alliteration");
console.log(list);
//remove the last item
list.pop();
console.log(list);
//access specific array item
let groundhog=list[3];
console.log(groundhog);
//access last item in an array
let last=list[list.length-1];
console.log(list.length);
console.log(last);
//list of objects
let data=[hero,player];
console.log(data);
//-------------------------------------------------project 2-------------------------------------------------
//variables
let manaPotion=50
let healthPotion=75
//objects
let pro={
    age:23,
    height:6,
    health:100,
    stamina:50,
    mana:75,
    name:"hero",
    //array 1
    let: list=["Staff","Helment","Mana Potion","Health Potion"],
    //method
    play: function(magic){
        if(magic=="true"){
            enemy.health-=10;
            pro.mana-=15;
            enemy.stamina-=10;
        }
        else if(magic="false")
        pro.stamina-=10
        pro.mana-=10
        pro.health-=10
    }
}
//object 2
let enemy={
    name:"goblin",
    age:300,
    height:12,
    mana:0,
    health:15,
    stamina:100,
    //array 2
    let: list=["Club","Rags","Raw meat"],
    //method
    play: function(attack){
        if(attack=="hit"){
            this.health-=25;
            this.stamina-=5;
        }
        else if (attack=="miss"){
            this.stamina-=10;
        }
    }
}
//loops
function gameOver(){
    console.log("Game Over");
}
while (pro.health<=0){
    gameOver();
    pro.health++
}
function lowMana(){
    console.log("Low Mana")
}
while (pro.mana<=9){
    lowMana();
    pro.mana++
}
function enemyDefeated(){
    console.log("Enemy Defeated!!!");
}
while (enemy.health<=0){
    enemyDefeated();
    enemy.health++
}
function magicHit(){
    console.log("HIT!");
}
if (pro.mana-=15){
    magicHit();
    pro.mana++
}
//play
console.log(pro);
console.log(enemy);
pro.play("true");
console.log(enemy);
console.log(pro);
enemy.play("hit");
console.log(pro);
pro.play("true");
console.log(pro);
console.log(enemy);

