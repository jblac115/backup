// // select what you are trying to change
// let sign=document.getElementById('sign');
// console.log(sign);
// //2. modify it
// console.log(sign.textContent)
// // modift
// sign.textContent='I like dogs'

// sign.innerHTML=sign.innerHTML + '<p style="color:blue">Phil swift is the coolest guy Ive ever had the pleasure of seeing</p>'
// //change style
// sign.style.color='green' 
let question={
    title:'How many swords do you need to craft the Zenith',
    alternatives:[9,10,20,5],
    correctAnswer:2
};
let questions=[
    {
        title:'How many swords do you need to craft the Zenith',
    alternatives:[9,10,20,5],
    correctAnswer:2
    },
    {
        title:'When is groundhog day',
    alternatives:["feb 2",'oct 18', 'sept 28','January 15'],
    correctAnswer:2
    },
    {
        title:'what is the longest crafting tree in Terraria?',
    alternatives:['Zenith',"shellphone",'Spectere boots','pink balloon'],
    correctAnswer:0
    },
    {
        title:'how many Bosses does minecraft have?',
    alternatives:[1,3,2,5],
    correctAnswer:1
    },
    {
        title:'How many Dragons are in Dragon city?',
    alternatives:[1798,1027,200,2000],
    correctAnswer:0
    },
    {title:'Which fast food restaraunt is the best',
    alternatives:["Burger King",'Mcdonalds','Wendys','Taco Bell'],
    correctAnswer:1
    },
    {
        title:'Which is the best Fae dragon',
    alternatives:['Crescent','Seism','Evanscent','Fae-Faux'],
    correctAnswer:0
    },
    {
        title:'How many questions am I supposed to have',
    alternatives:[9,10,20,5],
    correctAnswer:2
    },
    {
        title:'how many bosses does Terraria have',
    alternatives:[9,10,20,17],
    correctAnswer:3
    },
    {
        title:'How many Creed movies are there',
    alternatives:[3,1,2,4],
    correctAnswer:0
    },
]
let app={
    start: function(){
        this.currPosition=0
        this.score=0
    
        //select by a query
        let alts=document.querySelectorAll('.alts')
    alts.forEach((element,index)=>{
        
        //listening for events
        //bind approach
        element.addEventListener('click',()=>{
            //check for correct answer
         this.checkAnswer(index)
        })
    });
    this.showQuestion(question)
    this.updateScores();
    },
    showQuestion: function(q){
        this.currQuestion=q
        //1. select element
        let titleDiv=document.getElementById('title')
        //modify it
        titleDiv.textContent=q.title
    
        //show each Alternative
        let alts=document.querySelectorAll('.alts')
        alts.forEach(function(element,index){
            element.textContent=q.alternatives[index];
        })
    },
    checkAnswer: function(userSelected){
        if(this.currQuestion.correctAnswer==userSelected){
            //correct answer
            console.log('correct Answer')
            this.score++
            this.showResult(true)
            this.updateScores();
        }
        else{
            //wrong
            console.log('wrong answer')
            this.score--;
            this.showResult(false)
            this.updateScores();
        }
        this.increasePosition();
        //showw next question
        this.showQuestion(questions[this.currPosition]);
    },
    increasePosition: function(){
        this.currPosition++
        //if you get to the end want to start over
        if(this.currPosition==questions.length){
            this.currPosition=0;
        }
    },
    updateScores: function(){
        //select the score element
        let scoreDiv=document.getElementById('score')
        //display the score
        scoreDiv.textContent="Your Score: "+this.score;
    },
    showResult: function(isCorrect){
        //select DOM element
        let resulltDiv=document.getElementById('result');
        let result='';
        //check if we are right or wrong
        if(isCorrect){
            result='Correct Answer'
        }
        else{
            //get the current question
            let currQuestion=questions[this.currPosition]
            //get the correct answer(index)
            let correctAnswerIndex=currQuestion.correctAnswer
            let correctAnswertText=currQuestion.alternatives[correctAnswerIndex]
            result='Wrong Answer'+correctAnswertText
        }
        resulltDiv.textContent=result;
    }
    
}




// //select element
// let button=document.getElementById('button');
// //listening event
// button.addEventListener('click',function(){
//     console.log('clicked')
// })

app.start();

Math.random();  
//as I was closing down the computer something changed and now the bacgrounds and borders are gone