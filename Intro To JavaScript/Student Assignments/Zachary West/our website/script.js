// // 1. select the element you want to modify
// let sign=document.getElementById('sign');
// console.log(sign);
// // 2. modify
// // modifying text
// sign.textContent='groundhog day is the best!!';

// sign.innerHTML=sign.innerHTML+'<p style=color:green>phil is the best</p>'
// // modify color
// sign.style.color='powder blue';
let question={
    title: 'when did apex legends come out ',
    alternatives: ['2017','1018','2019','i dont play the game'],
    correctanswer: 2
}
let questions=[
    {
        title: 'when did apex legends come out ',
    alternatives: ['2017','1018','2019','i dont play the game'],
    correctanswer: 2
    },
    {
        title: 'what are 2 of the hardest badges',
    alternatives: ['4k and 20bomb','kill leader and champion','zero down ','zero nocked'],
    correctanswer: 0
    },
    {
        title: 'what location in worlds edge have the highest drop rate ',
    alternatives: ['fragment west','fragment east','artillery','the pit'],
    correctanswer: 0
    },
    {
        title: 'what is the strongest shotgun ',
    alternatives: ['eva-8','mastif','pk'],
    correctanswer: 2
    },
    {
        title: 'what ar does 14 body dm a shot ',
    alternatives: ['havoc','flatline','r-301'],
    correctanswer: 2
    },
    {
        title: 'what smg had a burst and auto fire mode ',
    alternatives: ['prowler','r-99','volt smg','altanateor'],
    correctanswer: 0
    },
    {
        title: 'what is the knewest lmg in the game ',
    alternatives: ['devotion','rampage','spittfire'],
    correctanswer: 1
    },
    {
        title: 'what leagond has a wrecking ball ult ',
    alternatives: ['wraith','fuse','mad magie','catalist'],
    correctanswer: 2
    },
    {
        title: 'which legend hates loba ',
    alternatives: ['revenent','octain','horizon','pathfinder'],
    correctanswer: 0
    },
    {
        title: 'who betrad Dr.mary somers  ',
    alternatives: ['vantage','watson','ash','fuse'],
    correctanswer: 2
    }
]
let app={
    start:function(){
        let alts=document.querySelectorAll('.alternative')
this.score=0
this.currPosition=0
        // show alternative
        // bind approach
        alts.forEach(function(element,index){
            element.addEventListener('click',function(){
              this.checkAnswer(index);
        }.bind(this))
        }.bind(this))
        this.showquestion(questions[this.currPosition])
        this.updatestats()
        },
        showquestion:function(q){
this.currquestion=q
            // 1.select dom element
    let titleDiv=document.getElementById('title')

    // modify it
    titleDiv.textContent=q.title;

    // select by query
    let alts=document.querySelectorAll('.alternative')

// show alternative
alts.forEach(function(element,index){
element.textContent=q.alternatives[index]
})
},
        checkAnswer:function(userSelected){
            let currquestion=questions[this.currPosition]
           
if(currquestion.correctanswer==userSelected){
    console.log('correct answer')
    this.score++
    this.showresults(true)
}
else{
    console.log('wrong again nerd')
    this.score-- 
    this.showresults(false)
}
this.increasePosition();
this.updatestats();
this.showquestion(questions[this.currPosition])
 },
 increasePosition:function(){
// increase the current position
this.currPosition++;
// send back to start 
if(this.currPosition==questions.length){
    this.currPosition=0;
}
 },
 updatestats:function(){
    let scorediv=document.getElementById("score")
    scorediv.textContent="your score is "+this.score
 },
 
 showresults:function(iscorrect){
    // select results
    let resultsdiv=document.getElementById("results");
    let result=''
    if(iscorrect){
        result='correct answer'
    }
    else{
        let currquestion=questions[this.currPosition];
        let currindex=currquestion.correctanswer
        let correctText=currquestion.alternatives[currindex]
        result="wrong answer and the correct answer is "+correctText
    }
    resultsdiv.textContent=result
 }
}
    app.start()

// 1. select the element
// let btn=document.getElementById('btn');
// btn.addEventListener('click',function(){
//     console.log('clicked the button')
// })

// styaling 
