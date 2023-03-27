// global variables
let variable=10
// function
 let score=17; //global variable
function hourtomin(hours){
     let result = hours*60;//local only used by function
    console.log(result);
    return result;
}
let a = hourtomin(38);
function daytohours(days){
    return days*24;
}
let day = daytohours(16);
console.log(day);
day=daytohours(7862345)
console.log(day);
// checking an item
let balance=100
let stock=50
let price = 5;
function sellitem(quantity){
    if(stock>=quantity){
    stock-quantity
    // stock = stock - quantity 
     balance+=price*quantity 
     //balance = balance + price * quantity
     console.log('purchase completed'+ balance +'$ ' + stock +'items left')
    }
    else{
        console.log("no sale try again")
    }
}
// // calling a function
// sellitem(10);
// // objects
// let player={
//     age: 37,
//     hp:1,
//     nrg: 'over nine thousend',
//     size:'extra-larg',
//     outfit:{
//         color:'black',
//         fabric:'leather',
//         type:'armor'
//     }
// };
// console.log(player);
// // access parts of an object
// console.log(player.age);
// console.log(player['age']);
// // modify pieces of our object
// player.age=27
// console.log(player.age);
// player.outfit.color='orange';
// console.log(player);
// // add stuff to our object
// player.name='Hubert Wolfstern'
// console.log(player);
// // delete parts of our object
// delete player.outfit;
// console.log(player);
// methods
let player={
    health:100,
    fun:0,
    play: function(food){
if(food=='apple pie'){
    this.health+=20
}
else if(food=='candy'){
    this.health+5;
    this.fun+=10
}
    }
}
// call method
player.play('apple pie');
console.log(player);
player.play('candy');
console.log(player);
// hippo object
let hippo={
    hippomurder:true,
    hippofetchmetheresoul:function(player){
        if(this.hippomurder==true){
            delete player
            console.log('player is dead')
            console.log('looking like jack black right now')
        }
    }
}
hippo.hippofetchmetheresoul(player);
let revive={
    reviveself:true,
    hitetorevive:function(player){
        if(this.reviveself==true){
             player={
                health:100,
                fun:0,
                play: function(food){
            if(food=='apple pie'){
                this.health+=20
            }
            else if(food=='candy'){
                this.health+5;
                this.fun+=10
            }
                }
            }
            console.log('player is back')
        }
    }
}
// mouse object
let mouse={
    mousemurder:true,
    mousescarethelifeoutofthem:function(player){
        if(this.mousemurder==true){
            delete player
            console.log('player has fainted ')
            console.log('really man its a mouse')
        }
    }
}
revive.hitetorevive(player)
mouse.mousescarethelifeoutofthem(player);
// while loops
function gethelp(){
    console.log('get help!')
}
let i=10;
while(i>0){
    gethelp();
    i--;
    // i=i-1
    // i-=1
}
for(let a=10;a>0;a--){
    gethelp();
}
// volcano object
let volcano={
    volcanodeath:true,
    burnedtoacrisp:function(player){
        if(this.volcanodaeth==true){
            delete playerconsole.log('player has been tourched')
            console.log('oh look out the lava will burned you')
        }
    }
}
// arrays (lists)
let list=['immortal groundhog',138,'gobblers knob','he is righ 48 percent of the time']
console.log(list);
// change the imformation
list[3]='he is right 50%'
console.log(list)
// acssess imformation
let groundhog=list[1]
console.log(groundhog)
// access las piece of our list 
let log=list[list.length-1]
let last=list.length;
console.log(log)
console.log(last)
// add items
list.push('lives in the library');
console.log(list);
// delete last item
list.pop()
console.log(list)
// literating over arrays
let highscores=[78,97,105];
// increase all scores by 1 
let j=0
while(j<highscores.length){
    highscores[j]++;
    j++;
}
console.log(highscores)
let bestday=[
    {
        title: 'the release of httyd',
        worth: 'nothing',
        person: "mrblack"
    },
    {
        title:'feb. 26th',
        woth: 'quite a lot',
        person: 'mrblack'
    },
    {
        title: ' feb.18th',
        worth: 'depends',
        person: 'kaden'
    }
];
bestday.forEach(function(entry){
    if(entry.title=='groundhog day'){
        entry.title="groundhog day";
    }
    else{
        entry.title='groundhog day';
    }
})
console.log(bestday);
// multidemsional arrays
let array=[[1,53,12],[5,13,5],[2,46,84]];
console.log(array)
console.log(array)
console.log(array[0][0]);
let terrain=[
    ['dessert','dessert','forest','beach'],
    ['desser','forest','beach','island'],
    ['mine','forest','biurned out forest','lake']
];
console.log(terrain)
terrain[0][3]='forest'
terrain[1][2]='forest'
console.log(terrain)
// this is the start of project 2
// great dustruction of many things
// you find an old tomb and you find a lamp in this tomb you rub the lamp and a genie comes out 
let genie={
    geniedeath:true,
    smitebygenie:function(player){
        if(this.geniedeath==true){
            delete player
            console.log('player has been struck')
            console.log('you have been smited by great power')
        }
    }
}
// the genie hates people
genie.smitebygenie(player)
revive.hitetorevive(player)
mouse.mousescarethelifeoutofthem(player);
// while loops
function gethelp(){
    console.log('get help!')
}
let p=10;
while(p>0){
    gethelp();
    p--;
    // i=i-1
    // i-=1
}
// you feel very hungry after a while and you find some banana trees you start to eat the bananas off the trees and you just dont stop
let banana={
    bananadeath:true,
    tomuchpotasium:function(player){
        if(this.tomuchpotasium==true){
            delete player
            consol.log('player has died by eating to much')
            console.log('what on earth were you thinking')
        }
    }
}
banana.tomuchpotasium(player)
// you shoulve stoped
// you are adventuring and suddunly you get a big suprise
function givelotofmoney(){
    console.log("you have resived 1000000000000000000000000000$")
}
let m=10;
while(m>0){
    givelotofmoney()
    m--;

}

function takemoneyaway(){
    console.log("you thought")
}
let c=10
while(c>0){
    takemoneyaway()
    c--;
}
function onemorechance(){
    console.log("you have resived 10000000000000000000000000000000$")
}
let k=10;
while(k>0){
    onemorechance()
    k--;
}
let list=['very powerful genie',867,'ancient tomb','genie has lived for a long time']
consol.log(list)
