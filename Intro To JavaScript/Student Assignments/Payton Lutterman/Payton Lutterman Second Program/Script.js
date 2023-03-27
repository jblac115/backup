//Functions
let score=99; //Global Variable
function hourtomin(hours){ 
    let result= hours*60; //Local Variable only used by Function can use outside Function to Mean something else But Has To Be Used After The Function Not Before
    console.log(result);
    return result;
}
let Hour = hourtomin(38);

function daystohours(days){
    return days*24;
}
let day = daystohours(16);
console.log(day);

//Checking an Item

let balance=100;
let stock=50;
let price=5;
function sellitem(quantity){//Function Declaration
    if(stock>=quantity){
    stock-=quantity
    balance+=price*quantity
    console.log("Purchase Completed ",balance, stock);
    }
    else{
        console.log("Cancelled Not Enough Stock")
    }
}
//Calling A Function
sellitem(10);

//Objects

let player={
    age: 37,
    hp: 100,
    energy: "lots",
    size: "extra large",
    outfit:{
        color:"black",
        fabric:"leather",
        type:"armor",
    }
};
console.log(player);

//Access Parts Of An Object 

console.log(player.age);
console.log(player.age,player.size);

//Modify Different Pieces Of Our Object
player.age=27;
console.log(player.age);
player.outfit.color="orange";
console.log(player)

//Add Stuff To Our Object
player.name="John Cena";
console.log(player)

//Delete Parts Of Our Object
delete player.outfit
console.log(player)

//Methods
let plyer={
    health: 100,
    fun: 0,
    play: function(food){
        if(food=="apple"){
            this.health+=10;
        }
        else if(food=="candy");{
            this.health-=5;
            this.fun+=5;
       }
    }
    

}
//Call Method
plyer.play("apple")
console.log(plyer)
plyer.play("candy")
console.log(plyer)

//Hippo Object
let hippo={
    hippoMurder: true,
    hippoAttack: function(player){
        if(this.hippoMurder==true){
            delete player
            console.log("You Died")
            
        }
    }
}
hippo.hippoAttack(player);

//While Loop
function sendhelp(){
console.log("Send Help");
}
let i=10
while(i>0){
    sendhelp();
    i--;
}
for(let a=10;a>0;a--){
    sendhelp();
}

//Unique Object

let bread={
    sze: 5,
    fluff: 100,
    age: 10000,
}
bread.name="HotDog Bun";
console.log(bread);

let hotdog={
    hotdogSweat: true,
    hotdogMoisture: function(hotdog){
        if(this.hotdogSweat==true){
            delete bread
            console.log("Gross Bread");
        }
    }
}
hotdog.hotdogMoisture(bread);

//Arrays 
let list=["immortal groundhog",138,"gobblers knob","he is right 42% of the time"];
console.log(list);

//Change The Information
list[3]="He is right 50% of the time";
console.log(list);

//Access Information
let groundhog=list[1];
console.log(groundhog);

//Access Last Piece Of Our Information
let log=list[list.length-1];
let last=list.length;
console.log(log);
console.log(last);

//Add Items 
list.push("During The Summer He Lives In The Library");
console.log(list);

//Delete Last Item
list.pop();
console.log(list);

//Iterating Over Arrays
let highScores=[78,97,105];
//Increase All Scores By One
let j=0;
while(j<highScores.length){
    highScores[j]++;
    j++;
}
console.log(highScores);
let bestday=[
    {
        title:"Groundhog Day",
        worth:"nothing",
        person:"Mr.Black",
    },
    {
        title:"Feb. 26th",
        worth: "quite a lot",
        person:"Mr. Black",
    },
    {
        title:"Feb. 18th",
        worth:"depends",
        person:"kaden",
    }

]
bestday.forEach(function(entry){
    if(entry.worth=="quite a lot", "depends"){
        entry.worth="nothing"
    }
    else if(entry.worth!="nothing"){
        entry.title="Nothing"
    }
})
console.log(bestday);

//Multidimensional Arrays
let array=[[1,2,3],[4,5,6],[7,8,9]];
console.log(array);
console.log(array[0][0]);

let terrain=[
    ['desert','desert','forest','beach'],
    ['desert','forest','beach','island'],
    ['mine','forest','burned out forest','lake']
]
console.log(terrain);
terrain[0][3]='forest'
terrain[1][2]='forest'
console.log(terrain)

//PROJECT TWO


let demon={
    age:1000,
    height:500,
    attack:100,
    health:50,
}

let mrblack={
    age:73,
    height:120,
    attack:5,
    health:5,
}

function death(){
    delete mrblack
    console.log("You Died")
}

function victory(){
    delete demon 
    console.log("Demon Vanquished")
}

function taunting(){
    console.log("Ha You're Short")
}

function impossible(){
    console.log("you're still shorter than me nice try cheating")
}

//attack loops

let d=1
while(d>0){
    death();
    d--;
}

let v=1
while(v>1000000000000){
    victory();
    v--;
}

//height checks

let h=1
while(h>0){
    taunting();
    h--
}
let mbt=1
while(mbt<0){
    impossible();
    mbt--;
}

//arrays 

let Daemon=["Demon", "Taller", "Cooler", "Better", "Stronger"]
console.log(Daemon)
let MrBlacck=["MrBlack", "Shorter", "Worse", "Weaker"]
console.log(MrBlacck)