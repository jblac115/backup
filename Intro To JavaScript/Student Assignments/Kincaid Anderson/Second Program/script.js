//global variables get defined at the top of the page
let balance=100;
let stock=50;
let price=5;
//functions
hrsToMins(37);
hrsToMins(6);
function hrsToMins(hours){
    //local variable
    let result=hours*60;
    console.log(result);
    return result;
}

function icecreamToPoundsGained(icecream){
    let result=icecream*5;
    console.log(result+" pounds gained");
    return result;
}
icecreamToPoundsGained(10)

//how cash registers work
function sellItem(quantity){
    //check to see if we have enough stock
    if(stock>=quantity){
        //reduce my stock
        stock-=quantity;
        //means the same as: stock = stock- quantity
        balance+=price*quantity
        console.log('purchase completed', balance, 'stock left', stock)
    }
    else{
        console.log("not enough stock");
    }
}
sellItem(15);
sellItem(40);

let player={
    age:4000,
    height:7,
    name:'Bob',
    health:100,
    outfit:{
        color:'black',
        size:'xl',
        underwater:true
    }
}
console.log(player)
//accessing one piece of our player
console.log(player.name);
console.log(player['name']);
//change attributes of our player
player.age=7;
console.log(player);
//delete an atribute
delete player.name;
console.log(player);
//creating an attribute
player.legs='long';
console.log(player)
//access object inside of the object
player.outfit.underwater=false;
console.log(player)

//functions inside of an object(method)
let hero={
    health:100,
    fun:0,
    play: function(food){
        if(food=='apple'){
            this.health+=10;
        }
        else if(food=="candy"){
            this.health+=5;
            this.fun+=5
        }
    }
}
hero.play('apple');
console.log(hero);
hero.play('candy');
console.log(hero);
//penguin object
let penguin={
    magicPenguin:true,
    penguinSlap:function(player){
        if(this.magicPenguin==true){
            player.health==0
            console.log("The magic penguin slaped you so hard, you died immediately")
            console.log("You can't defeat the penguins")
        }
        else{
            player.health-=10
            console.log("A random penguin came up and tripped you")
            console.log("LONG LIVE THE MAGIC PENGUIN")
            console.log("LONG LIVE THE PENGUIN ARMY")
        }
    }
}
penguin.penguinSlap(player);
//arrays or lists
let penguinlist=['magic penguin list', 'health 100', 'has infinte strength','penguin army leader'];
console.log(penguinlist)
let playerlist=['player charecter list', 'age 22', 'isnt a penguin','random explorer']
console.log(playerlist)

//creating the loops
function cry(){
    console.log('crying noises');
}
let b=0
while(b<5){
    cry();
    b++
}

function penguinDanceMoves(){
    console.log('Penguin dancing')
}
let c=0
while(c<30){
    penguinDanceMoves();
    c++
}

//two more loops
function penguinsSpits(){
    console.log('Penguins spits on you')
}
let d=0
while(d<5){
    penguinsSpits();
    d++
}

function chanting(){
    console.log('Penguin makes chating noises')
}
let e=0
while(e<100){
    chanting();
    e++
}






//loops
//while loop
function sendhelp(){
    console.log('Send Help');
}
let i=0;
while(i<10){
    sendhelp();
    i++
}
for(a=0;a<10;a++){
    sendhelp();
}
//arrays also called lists
let list=['immortal groundhog','right often','has carols',188];
console.log(list);
//change our lists
list[3]=138;
console.log(list);
//add to our list
list.push('alliteration');
console.log('list');
//remove the last item
list.pop();
console.log(list);
//access specific array item
let groundhot=list[3];
console.log(groundhog);
//access last item in array
let last=list[list.length-1];
console.log(list.length);
console.log(last);


