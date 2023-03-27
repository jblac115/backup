// functions 
function hrsTomins (hours){
    // local var
    let result=hours*60
    console.log (result)
    return result 
}
//_____________________________________________________________________________________________________________________________________________________________//
hrsTomins (15)
hrsTomins (2.5)

function hoursToCash (time){
    let outcome=time*10
    console.log (outcome+'cash')

}
hoursToCash (20)

function sellitem(quanity){
    if(stock>=quanity){

    stock-=quanity
    balance+=price*quanity
    console.log ('you good')
}
else{
    console.log('no more ')
}

}

let player={
    age:4000,
    hwight:3.2,
    name:'Bob',
    health:100,
    clouths:{
    typ:'dress',
    clouthsCouler:'red'}
}
player.level=100 
console.log(player)
console.log(player['name'])
player.age=7
console.log (player)
// delete an atrabute 
delete player.name
console.log(player)
//create atrabute 
player.legs=('long')
console.log (player)
//thing in thing 
player.clouths

//function in an object / method
let hero={
    health:100,
    fun:0,
    play: function(food){
        if(food=="apple"){
            this.health+=10

        }
        else;if(food=="candy"){
            this.health+=5
            this.fun+=5
        }
    }

}
hero.play('apple')
console.log(hero)
hero.play('candy')
console.log(hero)

//loops
//while loop
function sendhelp(){
    console.log('send Help')
}
let i=0
while(i<10){
    sendhelp()
    i++
//i=i+1
//i+=1
}
//for loops 
for(a=0;a<10;a++){
    sendhelp()

}
//arrays
let list=['me',' um','your mom','your dad']
console.log(list)
//change are list 
list[3]=138
console.log(list)
//add to our list 
list.push('alliteration')
console.log(list)
//remove
list.pop()
console.log(list)
//get specific array item
let dood=list[3]
console.log(dood)
//acces last item item in Array
let last=list[list.length-1]
console/log(list.length)
console.log(last)
//list of objects
let database=[hero,player]
console.log(database)
player.play()
console.log(4%2)