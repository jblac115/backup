//1. select what you are trying to change
//let sign=document.getElementById('sign');
//console.log(sign);
//2. modify it
//console.log(sign.textContent);
//modify
//sign.textContent='groundhog Day is the best!!'
//console.log(sign.textContent);
//change style
//sign.style.color= 'Blue' 


let question={
    title:'What is this: + symbol called?',
    answers:['Plus sign', 'Cursor','Slightly rotated letter x', 'Zero'],
    correctAnswer:2
};
let questions=[
    {
        title:'What is this: * symbol called?',
    answers:['Weird multiplication sign', 'A star','An x with a line through it', 'Zero'],
    correctAnswer:1
    },
    {
        title:'What is this: - symbol called?',
    answers:['Subtraction sign', 'plus sign','Slightly rotated slash', 'line'],
    correctAnswer:0
    },
    {
        title:'What is this: = symbol called?',
    answers:['Two side ways lines sign', 'Double the Subtraction signs, Double the subtraction',' Equal sign', 'letter r'],
    correctAnswer:1
    },
    {
        title:'What is this: # symbol called?',
    answers:['Pound sign', 'Every social media post ever sign','Tic Tac Toe box', 'Deleted'],
    correctAnswer:1
    },
    {
        title:'What is this: ^ symbol called?',
    answers:['NOT AN ANSWER', 'That one sign to mean exponenets','Upside down V', 'A carrot'],
    correctAnswer:3
    },
    {
        title:'What is this: 0 symbol called?',
    answers:['Plus sign', 'A tall circle','circle', 'Zero'],
    correctAnswer:1
    },
    {
        title:'What is this: L symbol called?',
    answers:['right angel sign', 'A letter S','A J thats backwards', 'Nothing'],
    correctAnswer:0
    },
    {
        title:'What is this: < symbol called?',
    answers:['Right facing aligator mouth', 'left facing aligator mouth','Less than symbol', 'sideways carrot'],
    correctAnswer:0
    },
    {
        title:'What is this: > symbol called?',
    answers:['A LEFT facing aligator mouth', 'less than sign sign','a carrot rotated the other way', 'Zero'],
    correctAnswer:0
    },
    {
        title:'What is this: v symbol called?',
    answers:['A letter V', 'Upwards facing aligator mouth','An upside down carrot', '1'],
    correctAnswer:2
    },
]
let app={
    start: function (){
        this.currPosition=0
        this.score=0
        let alts=document.querySelectorAll('.answers');
        //Bind Approach
        alts.forEach(function(element,index){
            //listening for events
            element.addEventListener('click',function(){
                this.checkAnswer(index)
                //check for correct answer
                //console.log('check correct answer')
            }.bind(this));
        }.bind(this))
        this.updateStats();
        this.showQuestion(question);
    },
    showQuestion:function(q){
        this.currQuestion=q
        //1. select element
        let titleDiv=document.getElementById('question')
        //modify it
        titleDiv.textContent=q.title
        let alts=document.querySelectorAll('.answers')
        alts.forEach(function(element,index){
            element.textContent=q.answers[index];
        });
    },
    checkAnswer: function(userSelected){
        if(this.currQuestion.correctAnswer==userSelected){
            //correct
            console.log('correct Answer');
            this.score++;
            this.showResult(true);
        }
        else{
            //wrong
            console.log('wrong Answer')
            this.showResult(false);
        }
        this.updateStats();
        this.increasePosition();
        //show next question
        this.showQuestion(questions[this.currPosition]);
    },
    increasePosition:function(){
        this.currPosition++
        //if you get to the end, want to start over
        if(this.currPosition==questions.length){
            this.currPosition=0;
        }
    },
    updateStats:function(){
        //select the score element
        let scorediv=document.getElementById('score');
        //display the score
        scorediv.textContent="your score:"+this.score;
    },
    showResult: function(isCorrect){
        //select DOM element
        let resultDiv=document.getElementById('result');
        let result='';
        //check if we are right or wrong
        if(isCorrect){
            result='Correct Answer'
        }
        else{
            //get the current question
            let currQuestion=questions[this.currPosition]
            //get the correct answer
            let correctAnswerIndex=currQuestion.correctAnswer
            let correctAnswerText=currQuestion.answers[correctAnswerIndex]
            result='wrong Answer'+correctAnswerText
        }
        resultDiv.textContent=result;
    }
}


app.start();

let a=Math.floor(Math.random()*11);
console.log(a);
