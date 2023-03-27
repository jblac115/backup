// //global variables
// let result=10
// //functions
// let score=17;//global variable
// function hourToMin(hours){
//     let result= hours*60;//local only used by function
//     console.log(result)
//     return result;
// }
// let a = hourToMin(38);
// function daysToHours(days){
//     return days*24;
// }
// let day = daysToHours(16);
// console.log(day)
// //checking an item
// let balance=100
// let stock=50
// let price=5
// //function declaration
// function sellItem(quantity){
//     if(stock>=quantity){
//     stock-=quantity
//     //stock = stock -quantity
//     balance+=price*quantity
//     //balance = balance + price * quantity
//     console.log("purchase completed" + balance+"$"+stock+
//     "items")
    
//     }
// }
// //objects
// let player={
//     age:37,
//     hp:1,
//     energy: '100',
//     size:'Extra large',
//     outfit:{
//         color:"black",
//         fabric:"leather",
//         type:"armor",

//     }
// }
// console.log(player)
// //access parts of an object
// console.log(player.age);
// console.log(player['age']);
// //modify pieces of our object
// player.age=27
// console.log(player.age);
// player.outfit.color="orange";
// console.log(player);
// //add stuff to our object
// player.name="John cena";
// console.log(player)
// //delete parts of our object
// delete player.outfit;
// console.log(player);
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
console.log(player)
player.play('candy')
console.log(player)
// //hippo object
// let hippo={
//     hippoMurder:true,
//     hippoAttack:function(player){
//         if(this.hippoMurder==true){
//             console.log("player is dead")
//             console.log("better luck next time")
        
//         }
//     }
// }
// hippo.hippoAttack(player);
// //while loops
// function sendHelp(){
//     console.log('send Help!')
// }
// let i=10;
// while(i>0){
//     sendHelp();
//     i--;
//     //i=i-1
//     //i-
// }
// //forloops
// for(let a=10;a>0;a--){
//     sendHelp();
// }
// practice

    
let dragon={
    dragonBreath:true,
    dragonAttack:function(player){
        if(this.dragonBreath==true){
            console.log("player is on fire")
            console.log("You are going to die! Run!")
        }
    }
}
dragon.dragonAttack(player)
//arrays (lists)
let list=['immortal groundhog',138,'gobblers knob','he is right 48 percent of the time']
console.log(list);
//change the info
list[3]='he is right 50 percent of the time'
console.log(list)
//access information
let groundhog=list[1];
console.log(groundhog)
//access the lsast piece of our list
let log=list[list.length-1];
let last=list.length
console.log(log)
console.log(last)
//additems
list.push('lives in the library')
console.log(list)
//increase all scores by 1
let j=0;
let highScores=[3,4,5]
while(j<highScores.length){
    highScores[j]++;
    j++;
}
console.log(highScores);
let bestDay=[
    {
        title: "Groundhog Day",
        worth: "nothing",
        person:"Mr. black"
    },
    {
        title: "november,13th",
        worth: "a lot",
        person:"JImmy"
    },
    {
        title: "lunch",
        worth: "everything",
        person:"Me"
    }    
]
bestDay.forEach(function(entry){
    if(entry.title="lunch"){
        entry.title="luncH"
    }
    
    else if(entry.title!="lunch"){
        entry.title="lunch"
    }
})
console.log(bestDay)
//multidimensional arrays
let array=[[1,2,3],[4,5,6],[7,8,9]];
console.log(array)
array[0][0];
console.log(array[0][0])
let terrain=[
    ['desert','desert','forest','beach'],
    ['desert','forest','beach','island'],
    ['mine','forest','burned out forest','lake']
]
console.log(terrain)
terrain[0][3]='forest';
terrain[1][2]='forest';
console.log(terrain)