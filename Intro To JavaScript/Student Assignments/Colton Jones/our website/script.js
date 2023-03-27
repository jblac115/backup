// //1. select the element you want to modify
// let sign=document.getElementById('sign')
// console.log(sign);
// //2. modify
// //modifying text 

// sign.innerHTML=sign.innerHTML+'<p style="color:pink">phil is the best!</p>';
// //modify the color
// sign.style.color='rgb(117,38,42)';
let question={
    title: 'when is my birthday?',
    alternatives: ['oct 19',"may 23",'july 21','dec 4'],
    correctAnswer: 0
}
let questions=[
    {
        title: 'when is christmas day?',
        alternative: ['apr 31','aug 16','dec 25','oct 9'],
        correctAnswer: 2
    },
    {
        title: 'when is my dad birthday?',
        alternative: ['jan 24','may 8','oct 11','sep 26'],
        correctAnswer: 3
    },
    {
        title: 'when is the 4th of july?',
        alternative: ['jun 4','aug 4','july 4','may 4'],
        correctAnswer: 2
    },
    {
        title: 'how old am I?',
        alternative: ['14','16','18','20'],
        correctAnswer: 1
    },
    {
        title: 'what is my dogs name?',
        alternative: ['taco','burito','taqutio','enchilada'],
        correctAnswer: 0
    },
    {
        title: 'what is 9+10?',
        alternative: ['24','20','19','21'],
        correctAnswer: 2
    },
    {
        title: 'whats my name?',
        alternative: ['mike','jimmy','hunter','colton'],
        correctAnswer: 3
    },
    {
        title: 'when is summer break?',
        alternative: ['may 4','april 29','may 27','june 2'],
        correctAnswer: 2
    },
    {
        title: 'how long are you supossed to brush your teeth?',
        alternative: ['2min','4min','6min','8min'],
        correctAnswer: 0
    },
    {
        title: 'what is 3x3?',
        alternative: ['2','9','10','6'],
        correctAnswer: 1
    }
]
let app={
    start:function(){
        this.currPosition=0
        this.score=0
      //select by query
      let alts=document.querySelectorAll('.alternative');
      //show alternatives
      //bind aproach
      alts.forEach(function(element,index){
        element.addEventListener('click',function(){
        this.checkAnswer(index);
        }.bind(this))
          }.bind(this))                           
      this.showQuestion(questions[this.currPosition]);
      this.updateStats();
    },
showQuestion:function(q){
    this.currQuestion=q
//1. select the dom element
let titleDiv=document.getElementById('title');
//modify it;
titleDiv.textContent=q.title;
//select by query
let alts=document.querySelectorAll('.alternative');
//show alternatives
alts.forEach(function(element,index){
    element.textContent=q.alternative[index];
})
},
checkAnswer:function(userSelected){
    let currQuestion=questions[this.currPosition]
    if(currQuestion.correctAnswer==userSelected){
        console.log("Correct Answer");
        this.score++;
        console.log(this.score)
        this.showResults(true)
    }
        else{
            console.log("wrong answer")
            this.showResults(false);
        }
        this.increasePosition();
        this.showQuestion(questions[this.currPosition])
        this.updateStats();
    },

    increasePosition:function(){
        //increase curr pos
        this.currPosition++;
        //send back to start
        if(this.currPosition==questions.length){
            this.currPosition=0;
        }
    },
    updateStats:function(){
        //select score div
        let scoreDiv=document.getElementById('score');
        //modify the text
        scoreDiv.textContent='Your Score: '+this.score
    },
    showResults:function(isCorrect){
        //select results
        let resultsDiv=document.getElementById('results');
        //modify
        let result=''
        if(isCorrect){
            result='correct answer';
            console.log('correct answer')
        }
        else{
            //what is our current question?
            let currQuestion=questions[this.currPosition];
            //get correct answer
            let currAnsIndex=currQuestion.correctAnswer;
            //answer text
            let correctText=currQuestion.alternative[currAnsIndex]
            result="Wrong answer you idiot , the correct answer is actually "+correctText

        }
        resultsDiv.textContent=result;
    }
}

app.start();
// //.select the element 
// let btn=document.getElementById('btn');
// btn.addEventListener('click',function(){

// console.log('clicked the button');
// })
