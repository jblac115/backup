let question={
    title: 'When is Groundhog Day?',
    alternatives: ['Feb. 2', 'March 3','July 18','April 23'],
    correctAnswer: 0
}

let questions=[
    {
    title: 'When is Groundhog Day?',
    alternatives: ['Feb. 2', 'March 3','July 18','April 23'],
    correctAnswer: 0
    },
    {
    title: 'When is my birthday?',
    alternatives: ['Feb. 17', 'March 9','July 25','April 26'],
    correctAnswer: 2
    },
    {
    title: 'When is Christmas?',
    alternatives: ['December 25', 'December 3','July 25','April 23'],
    correctAnswer: 0
    },
    {
    title: 'When is Leap Day?',
    alternatives: ['Feb. 29', 'March 17','July 1','April 7'],
    correctAnswer: 0
    },
    {
    title: 'When is Valentines Day?',
    alternatives: ['January 12', 'March 3','Feb. 14','April 23'],
    correctAnswer: 2
    },
    {
    title: 'When is Martin Luther King Jr. Day?',
    alternatives: ['First Monday of March', 'Second Monday of July','Last Monday of September','Third Monday of January'],
    correctAnswer: 3
    },
    {
    title: 'When is Presidents Day?',
    alternatives: ['First Monday of March', 'Second Monday of July','Last Monday of September','Third Monday of February'],
    correctAnswer: 3
    },
    {
    title: 'When is Labor Day?',
    alternatives: ['First Monday of March', 'Second Monday of July','First Monday of September','Third Monday of February'],
    correctAnswer: 2
    },
    {
    title: 'When is Pi Day?',
    alternatives: ['March 4', 'March 1','March 11','March 14'],
    correctAnswer: 3
    },
    {
    title: 'When is Halloween?',
    alternatives: ['Feb. 28', 'March 31','July 31','October 31'],
    correctAnswer: 3
    },
]

let app={
    start:function(){
        this.currPosition=0
        this.score=0
        let alts=document.querySelectorAll('.alternative');
        // Show alternatives
        alts.forEach((element, index)=>{
            element.addEventListener('click',()=>{
                this.checkAnswer(index);
            })
        })
        this.showQuestion(questions[this.currPosition]);
        this.updateStats()
    },
    showQuestion:function(q){
        this.currQuestion=q

            //1. Select the dom element

    let titleDiv=document.getElementById('title')

    //2. Modify it

    titleDiv.textContent=q.title;

    //3. Select by query

    let alts=document.querySelectorAll('.alternative');

    //4. Show alternatives

    alts.forEach(function(element, index){
        element.textContent=q.alternatives[index];
    })
},
checkAnswer:function(userSelected){
    let currQuestion=questions[this.currPosition]
    if(currQuestion.correctAnswer==userSelected){
    console.log("Correct Answer!");
    this.score++;
    this.showResults(true);
    }
    else{
    console.log("Incorrect Answer")
    this.showResults(false);
    }

// Add next class
    this.increasePosition();

//Show next question
this.showQuestion(questions[this.currPosition])
this.updateStats();
},

increasePosition:function(){

    // Increase the current position

    this.currPosition++;

    // Send back to start

    if(this.currPosition==questions.length){
        this.currPosition=0;
    }

},

    updateStats:function() {
        //Select score

        let scoreDiv=document.getElementById('score')

        //Modify the text

        scoreDiv.textContent= 'Your Score: '+ this.score
    },
    showResults:function(isCorrect){
        //select results
        let resultsDiv=document.getElementById('results');
        let result=''
        if(isCorrect){
            result='Correct!';
        }
        else{
            //What is our current question
            let currQuestion=questions[this.currPosition];
            //get the correct answer
            let currAnsIndex=currQuestion.correctAnswer;
            //answer text
            let correctText=currQuestion.alternatives[currAnsIndex];
            result= "Incorrect! The correct answer was " + correctText;
        }
        resultsDiv.textContent=result;
    }
}

app.start()