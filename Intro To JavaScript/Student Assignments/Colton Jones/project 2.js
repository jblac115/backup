//project #2

// object #1
player.age=17
console.log(player.age);
player.outfit.color='Grey';
console.log(player);
player.name='john wick';
console.log(player.name);

let player={
    wealth:10,
    fame:0,
    play: function(money){
        if(money=='cash'){
            this.wealth+=10;
            this.fame+=10;
        }
        else if(money=='paper'){
            this.wealth+=5;
            this.fame+=5;
        }
    }
}
player.play('cash');
console.log(player);
player.play('money');
console.log(player);


// object #2
let Gang={
    Gangmurder:true,
    Gangattack:function(player){
        if(this.Gangmurder==true){
            delete player
            console.log("john wick is dead")
            console.log('do better next time')
        }
    }

}
Gang.Gangattack(player);

function sendhelp(){
    console.log('send help!')
}
let I=10;
while(I>0){
    sendhelp()
    I--;
    
}
for(let a=10;a>0;a--){
    sendhelp();
}
let G = Gang[0];
Gang[Gang.size - 1] = 'small gang'

// //arrays
// let list=['imortal groundhog',127,'gobblers knob','he is right 42% of the time']
// console.log(list);
// //change
// list[3]='he is right 50%'
// console.log(list);
// //access info
// let groundhog=list[1];
// console.log(groundhog);
// groundhog=list[1]=175;
// console.log(groundhog)
// //access last piece of our list
// let log=list[list.length-1];
// let last=list.length;
// console.log(log);
// console.log(last);
// //add items
// list.push('lives in the library');
// console.log(list);
// //delete the last item
// list.pop();
// console.log(list);
// //iterating over arrays
// let highscores=[78,97,105];
// //increase all scores by 1
// let j=0;
// while(j<highscores.length){
//     highscores[j]++
//     j++;
// }
// console.log(highscores);
// let bestday=[
//     {
//         title: "groundhog day",
//         worth: "nothing",
//         person: "Mr.black"
//     },
//     {
//         title: "feb. 26th",
//         worth: "quite a lot",
//         person: "Mr.black"
//     },
//     {
//         title: "october. 19th",
//         worth: "debatable",
//         person: "me"
//     }
// ];
// bestday.forEach(function(entry){
//     if(entry.title=="groundhog day"){
//         entry.title='groundhog day'
//     }
//     else if(entry.title!="groundhog day"){
//         entry.title="groundhog day"
//     }
// })
// console.log(bestday);
// //multidemstional arrays
// let array=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(array);
// console.log(array[0][0]);
// let terrain=[
//     ['desert','desert','forest','beach'],
//     ['desert','desert','beach','island'],
//     ['mine','forest','forest burnt out','lake']
// ];
// console.log(terrain);
// terrain[0][3]='forest';
// terrain[1][2]='forest';
// console.log(terrain);


