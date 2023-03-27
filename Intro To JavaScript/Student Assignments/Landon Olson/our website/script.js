
let questions=[
    {
        title: 'When is Christmas',
        alternatives:["March 25","May 25","December 25","September 25"],
        correctAnswer: 2
    },
    {
        title: 'When is Groundhog Day?',
        alternatives:["Feb 2","May 25","December 25","September 25"],
        correctAnswer: 0
    },
    {
        title: 'When is Valentines day',
        alternatives:["March 25","May 25","December 25","Feb 14"],
        correctAnswer: 3
    },
    {
        title: 'When is My Birthday',
        alternatives:["March 25","September 9","December 25","September 25"],
        correctAnswer: 1
    },
    {
        title: 'When is My brothers birthday',
        alternatives:["March 25","May 25","October 3","September 25"],
        correctAnswer: 2
    },
    {
        title: 'When is my moms birthday',
        alternatives:["March 25","May 25","October 1","September 25"],
        correctAnswer: 2
    },
    {
        title: 'What is my favorite game?',
        alternatives:["Valorant","Chess","COD Bo3","CS:GO"],
        correctAnswer: 2
    },
    {
        title: 'What is my least favorite class?',
        alternatives:["Math","ELA","Accounting","WW2"],
        correctAnswer: 1
    },
    {
        title: 'Who is my best friend?',
        alternatives:["Connor","Brodyn","Preston","Dallin"],
        correctAnswer: 1
    },
    {
        title: 'What is my favorite car?',
        alternatives:["Koenigsegg Agera RS","Porshe 911","Audi RS 7","BMW M5 comp"],
        correctAnswer: 0
    },
]
let app={
    start:function(){
        this.currPosition=0
        this.score=0
         //select by query
    let alts=document.querySelectorAll('.alternative');
    //show alternatives 
    //bind approach
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
    //modify it
    titleDiv.textContent=q.title;
    //select by query
    let alts=document.querySelectorAll('.alternative');
    //show alternatives 
    alts.forEach(function(element,index){
        element.textContent=q.alternatives[index];
        
    })
    },
    checkAnswer:function(userSelected){
        let currQuestion=questions[this.currPosition]
        if(currQuestion.correctAnswer==userSelected){
            console.log("correct answer")
            this.score ++
            this.showResults(true)
        }
        else{
            console.log("wrong answer")
            this.showResults(false)
        }
        this.increasePosition();
        this.showQuestion(questions[this.currPosition])
        this.updateStats()
    },
    increasePosition:function(){
        //increase current position
        this.currPosition++;
        //send back to start
        if(this.currPosition==questions.length){
            this.currPosition=0;
        }
    },
    
// //1. select the element
// let btn=document.getElementById('btn');
// btn.addEventListener('click',function(){
//     console.log('clicked the button');
// })

updateStats:function(){
    //select score div
    let scoreDiv=document.getElementById('score');
    //modify the text
    scoreDiv.textContent='Your Score: '+this.score
},
showResults:function(isCorrect){
    let resultsDiv=document.getElementById('results');
    let result=''
    if(isCorrect){
        result='Correct Answer'
    }
    else{
        let currQuestion=questions[this.currPosition];
        let currAnsIndex=currQuestion.correctAnswer;
        let correctText=currQuestion.alternatives[currAnsIndex];
        result="wrong Answer and the correct answer is "+correctText;
    }
    resultsDiv.textContent=result;
}
}
app.start();

