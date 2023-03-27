let distance=175;
let fuel=100;
let distanceCondition=distance<=200 && distance>=100
let isEngineDamaged= true
console.log(distanceCondition);

if(isEngineDamaged || distance>200){
    console.log("we won't make it");    
}
else if(distanceCondition && fuel>=100){
    console.log("we will make it");
}
else if(distance<100 && fuel>=25){
    console.log("we will make it");
}