// //1. select the element you want to modify
// let sign=document.getElementById('sign');
// console.log(sign);
// //2. modify
// //modifying text
// sign.textContent='Groundhog Day is the best!!';

// sign.innerHTML=sign.innerHTML+'<p style=color:blue>phil is the best!</p>'
// //modify the color
// sign.style.color='rgb(117,38,42)';
let question={
    title: 'When is Groundhog Day?',
    alternatives: ['Feb. 2',"March 3",'July 18',"Dec. 17"],
    correctAnswer: 0
}
let questions=[
    {
        title: 'When is Groundhog Day?',
        alternatives: ['Feb. 2',"March 3",'July 18',"Dec. 17"],
        correctAnswer: 0
    },
    {
        title: 'How old is Phil',
        alternatives: [138,17,30,97],
        correctAnswer: 0
    },
    {
        title: 'Did the Groundhog See His Shoadow?',
        alternatives: ['Yes',"No",'I dont care',"What is a groundhog?"],
        correctAnswer: 0
    },
    {
        title: 'How many people attended the event this year?',
        alternatives: ["30,000","15,000",'150,000',"98,000"],
        correctAnswer: 0
    },
    {
        title: 'Who is the main star of the movie Groundhog Day?',
        alternatives: ['Bill Murray',"Anthony Daniels",'Hugo Weaving',"Dilbert Sulivan"],
        correctAnswer: 0
    },
    {
        title: 'When is Groundhog Day?',
        alternatives: ['Feb. 2',"March 3",'July 18',"Dec. 17"],
        correctAnswer: 0
    },
    {
        title: 'When is Groundhog Day?',
        alternatives: ['Feb. 2',"March 3",'July 18',"Dec. 17"],
        correctAnswer: 0
    },
    {
        title: 'When is Groundhog Day?',
        alternatives: ['Feb. 2',"March 3",'July 18',"Dec. 17"],
        correctAnswer: 0
    },
    {
        title: 'When is Groundhog Day?',
        alternatives: ['Feb. 2',"March 3",'July 18',"Dec. 17"],
        correctAnswer: 0
    },
    {
        title: 'When is Groundhog Day?',
        alternatives: ['Feb. 2',"March 3",'July 18',"Dec. 17"],
        correctAnswer: 0
    },
    {
        title: 'When is Groundhog Day?',
        alternatives: ['Feb. 2',"March 3",'July 18',"Dec. 17"],
        correctAnswer: 0
    },
]
let app={
    start:function(){
        this.currPosition=0
        this.score=0
        let alts=document.querySelectorAll('.alternative');
    //show alternatives
    //bind approach
    // alts.forEach(function(element,index){
    //     element.addEventListener('click',function(){
    //         this.checkAnswer(index);
    //     }.bind(this))
    // }.bind(this))
    //arrow function approach
    alts.forEach((element,index)=>{
        element.addEventListener('click',()=>{
            this.checkAnswer(index);
        })
    })
    this.showQuestion(questions[this.currPosition]);
    this.updateStats();
    },
    showQuestion:function(q){
    // this.currQuestion=q
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
            console.log("Correct Answer");
            this.score++;
            this.showResults(true)
        }
        else{
            console.log("Wrong Answer")
            this.showResults(false);
        }
        //add next class
        this.increasePosition();
        //show next question
        this.showQuestion(questions[this.currPosition])
        this.updateStats();
    },
    increasePosition:function(){
        //increase the current position
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
        let result=''
        if(isCorrect){
            result='Correct Answer';
        }
        else{
            //wha is our current qwestion'
            let currQuestion=questions[this.currPosition];
            //get the correct answer
            let currAnsIndex=currQuestion.correctAnswer;
            //answer text
            let correctText=currQuestion.alternatives[currAnsIndex];
            result="Wrong Answer and The Correct Answer is "+correctText;
        }
        resultsDiv.textContent=result;
    }
}
app.start();
// //1. select the element
// let btn=document.getElementById('btn');
// btn.addEventListener('click',function(){
//     console.log('clicked the button');
// })