
let sam={
    health:1000,
    fun:10,
    play: function(food){
        if(food=='orange'){
            this.health+=10;
        }
        else if(food=='pizza'){
            this.health+=5;
            this.fun+=10
        }
    }
}
sam.play('orange');
console.log(sam)

// open with google chrome