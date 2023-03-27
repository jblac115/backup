
let hero = { //defining the hero
    health: 100,
    height: 70,
    name: "Larry",

    play: function(food){  //if player eats steak he gains 25 health
        if(food=="steak"){
            this.health = this.health +25
            console.log("hero used a steak")

            if(this.health > 100){ //prevents player from having over 100 health
                this.health = 100
                console.log("prevented hero from going over 100 health!")
            }
        }
        
    },
    play1: function(damage){ //loses 35 health if enemy uses stab
        if(damage=="stab"){
            this.health = this.health -35
            console.log("enemy landed a stab!")
        }
    }
}

console.log(hero)

let enemy = {
    health: 60,
    height: 30,
    name: "Goblin King",

    play: function(heal){  //if goblin king uses a small potion he gains 25 health
        if(heal=="small potion"){
            this.health = this.health +25
            console.log("enemy used a small potion!")

            if(this.health > 60){ //prevents enemy from having over 60 health
                this.health = 60
                console.log("prevented enemy from going over 60 health")
            }
        }
        
    },
    play1: function(damage){ //loses 15 health if player uses slash
        if(damage=="slash"){
            this.health = this.health - 15
            console.log("hero landed a slash!")
        }
    }
}

console.log(enemy)



//creating variables
let i=0
let roll = 0
let battle=[hero,enemy]
console.log(battle)

while (i<1) { //begins battle
    roll = 10*Math.random() //rolls a random number between 0 and 10
    console.log(roll)


    if(roll >= 8) {
        hero.play("steak")
    }
    else if(roll < 8 && roll >= 5) {
        enemy.play1("slash")
    }
    else if(roll < 5 && roll >= 2) {
        hero.play1("stab")
    }
    else if(roll < 2) {
        enemy.play("small potion")
    }


    for (x=0 ; x<1 ; x++){
        console.log("|")
    }
    
    
    
    if (hero.health <= 0){
        i=i+1
        console.log("hero lost! enemy won with " + enemy.health + " health left!")
        battle.shift()
    }
    if (enemy.health <= 0){
        i=i+1
        console.log("hero won with " + hero.health + " health left!")
        battle.pop()
    }

}

for (y=0 ; y<1 ; y++){
    console.log("Game over! Restart your page to begin another fight")
}
for (z=0 ; z<1 ; z++){
    console.log(battle)
}
