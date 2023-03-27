//project # 2
//Sock Man (object one)
let sockMan={
    hp: 100,
    weapon: "sock",
    outfit: "socks",
    armor: "Magic robe",
    class: "Wizard",
    inventory:{
        sock: "smells... intersting",
        boopStick: "Great for booping people!",
        spellBook: "Contains the spells you have learned",
        explosiveBubbles: 30,
    },
    abilitys:{
        sockAttack:"20 dmg",
        boop:"Opponent is confused",
        throwBubble:"30 dmg in sphere with a radius of 5 ft"
    }
};
console.log(sockMan);
//Bob the Slime (object #2)
let bobTheSlime={
    hp:100,
    armor:"slime",
    weapon: "acidicSlime",
    inventory:{
        coins:"3 gp"
    },
    abilitys:{
        jump: function(sockMan){
            sockMan.hp-=10;
        },
        flop:"30 dmg",
        selfDestruct:"100 dmg to all and kill self"
    }
};
console.log(bobTheSlime);
//Battle functions
if(sockMan.hp>=0){
    battle=true
    console.log("Sock Man is alive"),
    console.log("You are in battle!")
}else{
    console.log("You ded")
}

//Attaking functions
for(i=0;i<3;i++){
    bobTheSlime.abilitys.jump(sockMan);
    console.log("Bob used jump!")
}
console.log(sockMan.hp, "Sockmans Hp");

for(i=0;i>2;i++){
    sockMan.abilitys.sockAttack(bobTheSlime);
    console.log("Sock Man used Sock attack!")
}
console.log(bobTheSlime.hp, "Bobs Hp");






/* console.log(sockMan);
console.log(sockMan.hp,"Hp")
let damage= 20;
console.log(damage,"damage")
sockMan.hp =sockMan.hp-damage;
console.log(sockMan.hp,"Hp left");
*/