//define the object for the question entity
let question={
    title: 'Whats for lunch?',
    alternatives: ['Hot dogs','nachos','sandwhich','hot pocket'],
    correctAnswer: 1
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
            title: 'Why was Feb. 2 picked for Groundhog Day?',
            alternatives: ['Its a cross quarter',"Just a random date",'Because it was already a holiday',"It was already the best day"],
            correctAnswer: 0
        },
        {
            title: 'What part of the traditional groundhog day is no longer celebrated?',
            alternatives: ['We dont eat the groundhog',"We put out fake snow",'They send a fox out to hunt the groundhog',"We still actually use a hedgehog"],
            correctAnswer: 0
        },
        {
            title: 'Statistically speaking how often is Phil correct',
            alternatives: ['100%',"42%",'87%',"52%"],
            correctAnswer: 0
        },
        {
            title: 'What was originally almost the name of groundhog day?',
            alternatives: ['Badger Day',"Wolverine Day",'Phils Day',"Tuesday"],
            correctAnswer: 0
        },
        {
            title: 'Which president met Phil in 1986?',
            alternatives: ['Ronald Reagan',"Jimmy Carter",'Gerald Ford',"Richard Nixon"],
            correctAnswer: 0
        },
        {
            title: 'What is the name of Phils wife?',
            alternatives: ['Phyllis',"Marjorie",'Pamela',"Karen"],
            correctAnswer: 0
        },
    ]
let app = {
    start: function(){
        this.currPosition=0
        this.score=0;
        //get our alternatives
        // //bind approach
        // let alts=document.querySelectorAll('.alternative');
        // alts.forEach(function(element,index){
        //     element.addEventListener('click',function(){
        //         this.checkAnswer(index);
        //     }.bind(this))
        // }.bind(this))
        // this.showQuestion(question)
        //arrow function approach
        let alts=document.querySelectorAll('.alternative');
        alts.forEach((element,index)=>{
            element.addEventListener('click',()=>{
                this.checkAnswer(index);
            })
        })
        this.showQuestion(question)
        this.updateStats();
    },
    showQuestion: function(q){
        this.currQuestion=q;
        let titleDiv=document.getElementById('title')
        titleDiv.textContent=q.title;
        //show the alternatives
        let alts=document.querySelectorAll('.alternative');
        alts.forEach(function(element,index){
            element.textContent=q.alternatives[index];
        })
    },
    checkAnswer: function(userSelected){
        let currQuestion=questions[this.currPosition];
        if(currQuestion.correctAnswer==userSelected){
            //correct
            console.log('correct answer');
            this.score++
            this.showResult(true);
            //this.score+=1
            //this.score=this.score+1
        }
        else{
            //wrong
            console.log('wrong answer');
            this.score--
            this.showResult(false)
            //this.score-=1
            //this.score=this.score-1;
        }
        this.increasePosition();
        this.updateStats();
        this.showQuestion(questions[this.currPosition]);
    },
    increasePosition: function(){
        //increase current Position
        this.currPosition++;
        //if we reach the end we want to start over
        if(this.currPosition==questions.length){
            this.currPosition=0;
        }
    },
    updateStats:function(){
        //select our score div
        let scoreDiv=document.getElementById('score');
        //display the score
        scoreDiv.textContent='Your score is '+this.score
    },
    showResult:function(isCorrect){
        //select our result div
        let resultDiv=document.getElementById('result');
        let result='';
        if(isCorrect){
            result="Correct Answer"
        }
        else{
            //get the current question
            let currQuestion=questions[this.currPosition]
            //correct answer
            let corrAnsIndex=currQuestion.correctAnswer
            //get correct answer text
            let corrAnsText=currQuestion.alternatives[corrAnsIndex]
            result="Wrong Answer correct Answer is: "+corrAnsText
        }
        resultDiv.textContent=result;
    }
}
app.start();