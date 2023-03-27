// the body tag nakes the code pop up on the actual screen
let question={
    title:'Who was the first avatar in ATLA?',
    alternatives:['Aang',"Kyoshi",'Kuruk',"Wan"],
    correctAnswer: 3
}
//atla quiz
//question taht are gonna show up on the screen
let questions=[
    {
        title:'Who was the first avatar in ATLA?',
        alternatives:['Aang',"Kyoshi",'Kuruk',"Wan"],
        correctAnswer: 3
    },
    {
        title:"Who was the first waterbender?",
        alternatives:['Dragons','The Moon', "Lion Turtles", 'Badgermoles'],
        correctAnswer: 1
    },
    {
        title:"Who was the current firelord During ATLA?",
        alternatives:['Roku','Sozin', "Ozai", 'Zuko'],
        correctAnswer: 2
    },
    {
        title:"Was Sokka a bender?",
        alternatives:['No','Yes, He just never used it','Maybe','Yes'],
        correctAnswer: 0
    },
    {
        title:"There is no war in...?",
        alternatives:['The water tribe','The west air temple', "Ba sing se", 'Foggy swamp'],
        correctAnswer: 2
    },
    {
        title:"What is Tophs disability?",
        alternatives:['Adhd','Deaf', "Too manly", 'Blind'],
        correctAnswer: 3
    },
    {
        title:"What side of Zukos face was his scar on?",
        alternatives:['Right','Left','forehead','Chin'],
        correctAnswer: 1
    },
    {
        title:"What is the least powerful bending?",
        alternatives:['Water','Earth', "Air", 'Fire'],
        correctAnswer: 3
    },
    {
        title:"What was zuko trying to regain?",
        alternatives:['His mother','The Avatar', "His honor", 'His pet turtleduck'],
        correctAnswer: 2
    },
    {
        title:"Best Avatar Animal?",
        alternatives:['Turtleducks','Badgermoles', "Lion Turtles", 'Sky Bison'],
        correctAnswer: 0
    },
]

let app={
    start: function(){
        this.currPosition=0
        this.score=0
        //select by a query
        let alts=document.querySelectorAll('.alternatives');
        //show each alternatives
        //bind approach

           alts.forEach(function(element,index){
           //listening for events
           element.addEventListener('click', function(){
               //checking for correct answers
             this.checkAnswer(index)
           }.bind(this));
        }.bind(this))
        this.updateStats()
       this.showQuestion(question)
   },
   showQuestion: function(q){
    this.currQuestion=q
    //1. select the element 
    let titleDiv=document.getElementById('title');
    //modify it
    titleDiv.textContent=q.title
    let alts=document.querySelectorAll('.alternatives')
   alts.forEach(function(element,index){
    element.textContent=q.alternatives[index];
   })
  
},
checkAnswer: function(userSelected){
    if(this.currQuestion.correctAnswer==userSelected){
        //correct answer
        console.log('correct Answer')
        this.score++
        //this.score+=1
        //this.score=this.scsore+1
        this.showResult(true)
    }
    else{
        //wrong
        console.log('wrong answer')
        this.score--

        this.showResult(false);
    }
    this.increasePosition();
    this.updateStats();
    //show next question
    this.showQuestion(questions[this.currPosition]);
},
increasePosition :function(){
    this.currPosition++
    //if you get to the end want to start over
    if(this.currPosition==questions.length){
        this.currPosition=0;
        
        
    }
},
    updateStats: function(){
        //select the score element
        let scoreDiv=document.getElementById('score');
        //display the score
        scoreDiv.textContent='Your Score:'+this.score;
    },
    showResult:function(isCorrect){
        //select DOM element
        let resultDiv=document.getElementById('result');
        let result='';
        //check to see if we are right or wron
        if(isCorrect){
            result="Correct Answer Girl"
        }
        else{
            //get current question
            let currQuestion= questions[this.currPosition]
            //get correct answer(index)
            let correctAnswerIndex=currQuestion.correctAnswer
            let correctAnswerText=currQuestion.alternatives[correctAnswerIndex]
            result='You are Wrong: '+correctAnswerText;
        }
        resultDiv.textContent=result;
    }
    

}
app.start();

