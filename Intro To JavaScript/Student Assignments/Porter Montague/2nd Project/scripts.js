// Declaring the Objects

let player = {
    age: 37,
    hp: 1,
    energy: 'lots',
    outfit: {
        color:"Black",
        fabric:'leather',
        type: 'armor',
    }
};

let warthog = {
    strength: 100,
    hp: 20,
    stamina: 50,
}

// Decclaring the Functions

function playerVsWarthog (hp) {
    let result = player.hp * 20;
    if (result >= warthog.hp) {
        console.log("player wins")
    }
    return result
}

function playerVsMongoose (hp) {
    let result = player.hp * 20;
    if (result >= Mongoose.hp) {
        console.log("player wins")
    }
    return result
}

while (player.hp > 0) {
    playerVsWarthog(player.hp)
}

while (player.hp > Mongoose.hp) {
    Mongoose(player.hp)
}

list1.forEach(element => {
    console.log('There are' + list1.length + 'enemies')
});

list2.forEach(element => {
    console.log('There are' + list2.length + 'allies')
});

let list1 = [
    Mongoose = 50,
    Warthog2 = 40
]

let list2 = [
    Player1 = 25,
    Player2 = 20,
]