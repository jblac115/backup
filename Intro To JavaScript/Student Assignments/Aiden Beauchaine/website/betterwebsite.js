let question={
    title: 'Literally Guess Lmao',
    alternatives: ['A', 'B', 'C', 'D'],
    correctAnswer: 2
}
let questions=[
    {
        title: 'Literally Guess Lmao',
        alternatives: ['A', 'B', 'C', 'D'],
        correctAnswer: 2
    },
    {
        title: 'When Was this quiz made?',
        alternatives: ['feb 13 2023', 'march 31 2021', 'MM/DD/YYYY', '(The one above^)'],
        correctAnswer: 0
    },
    {
        title: 'Select the correct answer',
        alternatives: ['Correct answer', 'incorrect answer', 'Totally the right option', 'left answer'],
        correctAnswer: 0
    },
    {
        title: 'was there a beginning to time?',
        alternatives: ['yes', 'no', 'isnt this only arguable from an untestable theological perpective?', 'Time doesnt exist'],
        correctAnswer: 0
    },
    {
        title: 'what was the first logical statement in existance?',
        alternatives: ['nothing', 'something ', 'why is there nothing?', 'no answer'],
        correctAnswer: 0
    },
    {
        title: 'what was the second logical statement in existance?',
        alternatives: ['why is there nothing?', 'something', 'no answer', 'time ceased to exist'],
        correctAnswer: 0
    },
    {
        title: 'what defines the rate of time?',
        alternatives: ['nothing defines the rate of time', 'god defines time', 'fundemental phylosophical logic', 'necessity of existance'],
        correctAnswer: 0
    },
    {
        title: 'god represents:',
        alternatives: ['the necessary mechanics of rendering consciousness', 'the fundemental rules of existance', 'boolean logic', 'all of the above'],
        correctAnswer: 3
    },
    {
        title: 'what theory describes why the (seemingly abritrary) mechanics of our existance exist? (like gravity or the existance of atoms)',
        alternatives: ['Necessity of Novelty', 'they really are abritrary', 'Good & Evil', 'A & C'],
        correctAnswer: 3
    },
    {
        title: 'What happens to consciousness when it is dead?',
        alternatives: ['It disapears', 'It enters a state of hybernation/sleep, but is temporarily rendered back into gods consciousness until it is employed again', 'it will be given new experiences', 'B & C'],
        correctAnswer: 1
    },

]

let app={
    start: function(){
        this.currPost=0
        this.score=0
        //select by a query
        let alternatives=document.querySelectorAll('.alternative')
        //show each alternative
        alternatives.forEach((element,index)=>{
            //listening for events
            element.addEventListener('click',()=>{
                this.checkAnswer(index)
                //check for correct answer
            })
        })
        this.updateStats();
        this.showQuestion(question);
    },


    showQuestion:function (q){
        this.currQuest=q
        //select element
        let titleDiv=document.getElementById('title')
        //modify it
        titleDiv.textContent=q.title
        let alternatives=document.querySelectorAll('.alternative')
        alternatives.forEach(function(element, index){
            element.textContent=q.alternatives[index];
        });
    },
    checkAnswer: function(userSelected){
        if(this.currQuest.correctAnswer==userSelected){
            console.log('correct answer')
            this.score++
            console.log(this.score)
            this.showResult(true);
        }
        else{
            console.log('wrong answer')
            this.showResult(false);
        }
        this.increasePost();
        //show next question
        this.updateStats();
        this.showQuestion(questions[this.currPost])
    },
    increasePost:function(){
        this.currPost++
        //if you get to end of database - starts over
        if(this.currPost==questions.length){
            this.currPost=0;
            this.score=0;
            let resultDiv=document.getElementById('result');
            resultDiv.textContent="Your Done!"
        }
    },
    updateStats:function(){
        //select the score element
        let scoreDiv=document.getElementById('score')
        //display score
        scoreDiv.textContent="your score:"+this.score;

    },
    showResult: function(isCorrect){
        //select DOM Element
        let resultDiv=document.getElementById('result');
        let result='';
        //check if we are right or wrong
        if(isCorrect){
            result='Correct Answer'
        }
        else{
            //get the current question
            let currQuest=questions[this.currPost]
            let correctAnswerIndex=currQuest.correctAnswer
            let correctAnswerText=currQuest.alternatives[correctAnswerIndex]
            result='Wrong Answer: '+correctAnswerText;
        }
        resultDiv.textContent=result;
    }
    
}

app.start()
// //select element
// let button=document.getElementById('button');
// //listening event
// button.addEventListener('click',function(){
//     console.log('clicked');
// })

//how to create a random number
//

let a=Math.floor(Math.random()*5);
console.log(a+1);