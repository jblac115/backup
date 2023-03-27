// //a function is a piece of code that allows you to run a the same piece of code
// // you don't have to name your function but its not helpful
// // the more information the better


// //functions
// let balance=100;
// let stock=50;
// let price=5;


// //global variable generally get defined at the top of the page


// hrsToMins(37);
// hrsToMins(6);
// hrsToMins(2.5);
// function hrsToMins(hours){
//     // this is a local variable
//      let result=hours*60;
//      console.log(result);
//      //returning this makes it so i can use it outside of the function
//      return result;
//  }


// function dayToWeeks(days){
//     let result=days*7
//     console.log(result)
//     return result;
// }
// dayToWeeks(1);


// //function examples
// function hrsToDays(hours){
//     let result=hours/24
//     console.log(result)
//     return result
// }
// hrsToDays(70)


// //how cash registers work - kinda
// function sellItem(quantity){
//     //check to see if we have stock
//     if(stock>=quantity){
//         //reduce my stock
//         stock-=quantity;
//         //means the same as
//         // stock = stock-quantity
//         balance+=price*quantity
//         console.log('purchase completed', 'our new balance is $', balance,'stock left',stock)
//     }
//     else{
//         console.log("not enough stock")
//     }


// }
// sellItem(15);
// sellItem(40)


// //objects


// let player={
//     age:4000,
//     height:7,
//     name:"Bob",
//     health:100,
//     outfit:{
//         color:"black",
//         size:"xl",
//         underwater:'true'
//     }
// };
// console.log(player)
// // only use commas in objects
// //accessing one piece of our player
// console.log(player.name);
// console.log(player['name']);
// //change attributes of our player
// player.age=7;
// console.log(player)
// //delete an attribute
// delete player.name;
// console.log(player)
// //creating an attribute
// player.legs="long";
// console.log(player);


// //access object inside of object
// player.outfit.underwater=false;
// console.log(player)




// //zenva lessons
// //  methods


// let player1 = {
//     health: 100,
//     fun: 0,


//     play: function(){
//         this.fun += 10;
//     },
//     eat: function(food) {
//         if(food == 'apple'){
//             this.health += 10;
//         }
//         else if(food=='candy'){
//             this.health -= 5;
//         this.fun += 5;
//         }
//     }
   
// };
// // health is a propety of player you must add this to access it


// player1.play();




// console.log(player1)
// player1.eat('apple');
// console.log(player1)


// //while loops


// function sendSignal(){
//     console.log('HELP!');
// }


// let i=0
// // making i less than thousand shows that once the number is more than 1000 it the statement will become false
// while(i < 1000){
//     sendSignal();
//     //same as i= i+1;
//     //and i =+1;
//     i++;
// }
// //loops


// let result =0;


// // remember that at one the point your condition in your loop as to eventually become false
// let j=1;
// while(j<=10){
//     result= result + j;
//     //console.log(result);
//     j++;
// }
// //remmeber to always increase your index inyour loop because if you dont you will make an infinite llop
// console.log(result);


// //for loops


// let population= 100;


// //population= population * 1.05;
// //population *=1.05;
// /*let p=0;
// while(p < 10){
//     population *=1.05;
//     p++;
// }
// console.log(population);
// // the code above is the solution for a while loop*/


// for(let p= 0; p< 10; p++) {
//     population *= 1.05;
// }
// console.log(population)


// //arrays
// // used to present ordered collections
// // arrays-indexes from 0 to length of the array minus 1


// let database = ['turtle','cat','dog','bird'];
// console.log(database)
// console.log(database.length);


// let animal=database[3]
// console.log(animal);


// database[0] ='dinsosaur'
// console.log(database)


// let last =database[database.length - 1]
// console.log(last);


// database.push('lizard')
// //push allows you to add additional things to your array
// console.log(database);


//project 2 starts here

//player object
let player={
    //player assets
    age:23,
    height:4,
    name:"cuco",
    health:100,
    outfit:[
        "color:purple",
        "size:xl",
        "underwater:true"
    ],
    // the players attack, if he hits the shark it will -2 its length
    attack:function(shark){
        shark.length-=2
    }
};
//shark object
let shark={
    age:1000,
    height:9,
    length:10,
    //sharks attack, if it hurts the player, the player will lose -10 his health
    attack:function(player){ 
        player.health-=10
    }
}
//player attacking shark
player.attack(shark)
console.log(shark.length)

//shark attacking the player
shark.attack(player)
console.log(player.health)
//the players outfit 
console.log(player.outfit)

// a loop meant to represent the player screaming for help everytime he gets attacked
function sendHelp(){
    console.log('HELP ME')
}

let p=0 
while(p<100){
    sendHelp();
    p++;
}

// an array of the players option on who can save him  
this.savior=['old lady','life guard','young girl','fisherman']

let result=0

//the players savior callinback 
function onTheWay(){
    console.log ('IM COMING!')
}

let s=0
while(s<4){
    onTheWay();
    s++
}
//the oldy lady is his savior
this.savior=savior[0]  
console.log(savior)

//a function telling the old lady to stop coming to save him
function playerRegret(){
    console.log('NO DONT COME!!')
}
let r=0
while(r<8){
    playerRegret()
    r++
}


