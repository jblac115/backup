//object 1 is ipc_1
let ipc_1={
    defence:{
        hpMax: 10,
        prot: 5,
        hp: 10
    },
    primary: {
        rng: 8,
        rof: 5,
        mag: 40,
        dmg: 3,
        maxAmo: 40
    },
    spcl_atk: {
        rng: 6,
        aoe: 3,
        dmg: 5,
    },
    speed: 6
}
let ipc_1_gear=[protective_vest, smg, grenade]
//object 2 is ipc_2
let ipc_2={
    defence:{
        hpMax: 10,
        prot: 10,
        hp: 10
    },
    primary: {
        rng: 1,
        rof: 1,
        mag: 0,
        dmg: 5,
        maxAmo: 0
    },
    spcl_atk: {
        rng: 1,
        aoe: 1,
        dmg: -5
    },
    speed: 6
}
let ipc_2_gear=[riot_suit, baton, medkit]
console.log(ipc_1)
console.log(ipc_2)
//the foe of ipc_1 and ipc_2
let graveEximus={
    defence:{
        hpMax: 22,
        prot: 0,
        hp: 22
    },
    primary: {
        rng: 1,
        rof: 1,
        mag: 0,
        dmg: 4,
        maxAmo: 0
    },
    spcl_atk: {
        rng: 8,
        aoe: 3,
        dmg: 7
    },
    speed: 4
}
console.log(graveEximus)

//here lies a loop
function drop(){
    graveEximus.defence.hp-=ipc_2.primary.dmg
    ipc_2.defence.hp-=graveEximus.primary.dmg/2
    console.log(graveEximus)
    console.log(ipc_2)
}; let r=5
while(r>0){
    drop()
    r--
}
//reset between loops
graveEximus.defence.hp=graveEximus.defence.hpMax
ipc_2.defence.hp=ipc_2.defencehpMax
//here lies another loop
function drop1(){
    graveEximus.defence.hp-=ipc_1.primary.dmg
    ipc_1.primary.mag-=ipc_1.primary.rof
    console.log(ipc_1)
    if (graveEximus.defence.hp<=0){
    graveEximus.defence.hp=0
    } console.log(graveEximus)
}; let q=8
while(q>0){
    drop1()
    q--
}
//reset between loops
graveEximus.defence.hp=graveEximus.defence.hpMax
ipc_1.primary.mag=ipc_1.primary.maxAmo
//third loop here
//added needed info
ipc_1.dist=6
ipc_2.dist=5
graveEximus.dist=4
//no input needed function component+loop itself
function chase(){
    ipc_1.dist+=ipc_1.speed
    ipc_2.dist+=ipc_2.speed
    graveEximus.dist+=graveEximus.speed
    console.log(ipc_1)
    console.log(ipc_2)
    console.log(graveEximus)
}; let d=6
while(d>0){
    chase()
    d--
}
//reset between loops
delete ipc_1.dist
delete ipc_2.dist
delete graveEximus.dist
//final loop
//'tis a toxic cloud, 'twill certainly slay both ipcs
for(w=10; w>0; w--){
    ipc_1.defence.hp--
    ipc_2.defence.hp--
    console.log(ipc_1)
    console.log(ipc_2)
}