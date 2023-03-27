// //global variables
// let result=10
// //functions
// let score=17; //gloval variable cancels out funvtions if above example let result=30 cancles out the local function below
// function hourToMin(hours){
//     let result = hours*60;//local only used by function
//     console.log(result);
//     return result;
// }
// let a = hourToMin(38);
// function daysToHours(days){
//     return days*24
// }
// let day = daysToHours(16);
// console.log(day);
// day=daysToHours(1654);
// console.log(day);
// //check an item
// let balance=100
// let stock=50
// let price=5;
// //calling a function
// sellItem(10);
// //function decleration
// function sellItem(quantity){
//     if(stock>=quantity){
//     stock-=quantity
//     //alternative stock = stock - quantity
//     balance+=price*quantity
//     //alternative balance=balance+price*quantity
//     console.log('purchase completed',balance,'$',stock,'items left')
//     } 
//  else{
//     console.log('No sale, try again')
//  }
// }
// // objects
// let player={
//     age: 900,
//     hp: 100,
//     nrg: 'not alot',
//     size: 'extra small',
//     outfit:{
//         color:"blue",
//         fabric:'leather',
//         type:'armor',
//     }
// };
// console.log(player);
// //access parts of an object
// console.log(player.age);
// console.log(player['size']);
// //modify pieces of our object
// player.age=27
// console.log(player.age);
// player.outfit.color='red';
// console.log(player);
// //add stuff to our object
// player.name='yuka kitamura';
// console.log(player);
// //delete parts of our object
// delete player.outfit;
// console.log(player);
//methods
let player={
    health:100,
    fun:0,
    play: function(food){
        if(food=='apple'){
            this.health+=10
        }
        else if(food=='candy'){
            this.health+=5;
            this.fun+=5;
        }
    }
}
//call method
player.play('apple');
console.log(player);
player.play('candy');
console.log(player);
//hippo object
let hippo={
    hippoMurder:true,
    hippoAttack:function(player){
        if(this.hippoMurder==true){
        player.health=0
        console.log('player is dead')
        console.log('better luck next time')
        }
    }
}
hippo.hippoAttack(player);
//while loops
function sendHelp(){
    console.log('Help needed?')
}
let i=10
while(i>0){
    sendHelp();
    i--;
    //i=i-1
    //or i-=1
}
for(let a=10;a>0;a--){
    sendHelp();
}
//unique object
let person={
    health:100}
console.log(person)

let poison={
    poison:true,
    Deathpoison:function(person){
        if(this.poison==true){
            person.health=50
            console.log('Poison!')
            console.log('find a cure')
        }
    }
}
poison.Deathpoison(person);

//arrays (lists)
let list=['immortal groundhog',138,'gobblers knob','he is right 47 percent of the time']
console.log(list);
//change information
list[3]=('he is right 50%')
console.log(list);
//access information
let groundhog=list[1];
console.log(groundhog);
//access the last pice of our list
let log=list[list.length-1];
let last=list.length;
console.log(log);
console.log(last);
//add items
list.push('lives in the library');
console.log(list)
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
        title: 'Groundhog Day',
        worth: 'nothing',
        person: 'Mr. Black'
    },
    {
        title: 'Feb. 26th',
        worth: 'Quite a lot',
        person: 'Mr.Black'
    },
    {
        title: 'Feb.18th',
        worth: 'depends',
        person: 'Kaden'
    }
];
bestDay.forEach(function(entry){
    if(entry.title=='Groundhog Day'){
        entry.title='Groundhog Day'
    }
    else if(entry.title!='Groundhog Day'){
        entry.title='groundhog Day'
    }
})
console.log(bestDay);
//multidemsinal arrays
let array=[[1,2,3],[4,5,6],[7,8,9]];
console.log(array);
console.log(array[0][0]);
let terrain=[
    ['desert','desert','forest','beach'],
    ['desert','forest','beach','island'],
    ['mine','forest','burned out forest','lake']
];
console.log(terrain);
terrain[0][3]='forest';
terrain[1][2]='forest';
console.log(terrain);

//project 2 
let hero={
    age: 23,
    hp: 100000,
    nrg: 'not alot',
    size: 'tall',
    outfit:{
        color:"blue",
        fabric:'scale',
        type:'armor',
    }
};
let armorlist=['armor options','Dragon scales','Boiled leather','chain mail']
console.log(armorlist);
console.log(hero);

//skeleton enemy
let skeleton={
    skeletonSwing:true,
    skeletonAttack:function(hero){
        if(this.skeletonSwing==true){
        hero.health='low'
        console.log('Critical hit')
        console.log('You might die')
        }
    }
}
skeleton.skeletonAttack(hero);
let skeletonWarrior=['round sheild','Bandits curved sword','scrappes armor']
console.log(skeletonWarrior)

//Curse of the deep
let curse={
    curses:true,
    deathcurse:function(hero){
        if(this.curses==true){
            person.health=50
            console.log('Curse!')
            console.log('find help!')
        }
    }
}
curse.deathcurse(hero);

//Priests of tranquility
function curseRemove(){
    console.log('Any priests?')
}
let v=10
while(v>0){
    curseRemove();
    v--;
}
for(let b=10;b>0;b--){
    curseRemove();
}

function priest(){
    console.log('Im a priest')
}
let q=9
while(q>0){
    priest();
    q--;
}
for(let l=11;l>0;l--){
    priest();
}