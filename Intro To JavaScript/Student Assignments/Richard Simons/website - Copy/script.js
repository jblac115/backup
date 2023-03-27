//this screen has to many fingerprints 
let question = 
{
    title:'click start to take a logical quiz',
    alternatives:['start'],
    correctAnswer:0
}
let questions=
[
    
    {  
        title: 'click start to take a logical quiz',
        alternatives: ['ewff'],
        correctAnswer: 0
    },
    {  
        title: '58008 or 3/5ᵗʰ grass t/f',
        alternatives: ['58008','3/5ᵗʰ grass'],
        correctAnswer: 0
    },
    {  
        title: 'what is eaRTH',
        alternatives: ['round','flat'],
        correctAnswer: 1
    },
    {  
        title: 'who are you',
        alternatives: ['nspmebdy','nobody'],
        correctAnswer: 1
    },
    {  
        title: 'e',
        alternatives: ['a','e'],
        correctAnswer: 0
    },
    {  
        title: 'a',
        alternatives: ['sports','its'],
        correctAnswer: 0
    },
    {  
        title: 'its',
        alternatives: ['in','the'],
        correctAnswer: 1
    },
    {  
        title: 'in',
        alternatives: ['name','the'],
        correctAnswer: 1
    },
    {  
        title: 'the',
        alternatives: ['soccer','name'],
        correctAnswer: 1
    },
    {  
        title: 'mirco',
        alternatives: ['transactions for life','chips'],
        correctAnswer: 0
    },
    {  
        title: 'lays',
        alternatives: ['potato','chip'],
        correctAnswer: 0
    },
    {  
        title: 'potato',
        alternatives: ['ohio','idaho'],
        correctAnswer: 0
    },
    {  
        title: 'im',
        alternatives: ['tgetting bored','running out of ideas'],
        correctAnswer: 1
    },
    {  
        title: 'rgb or lgbtqrsatuvwxyz',
        alternatives: ['yes','no'],
        correctAnswer: 0
    },
    {  
        title: 'help i have',
        alternatives: ['fallen over','error = pain'],
        correctAnswer: 1
    },
    {  
        title: 'and i cant',
        alternatives: ['bug fix','cant get up'],
        correctAnswer: 0
    },
    {  
        title: 'something',
        alternatives: ['1','right anwser'],
        correctAnswer: 1
    },
    {  
        title: 'help',
        alternatives: ["can't",'will not'],
        correctAnswer: 1
    },
    {  
        title: 'you have a one in hundred to finish this quiz good luck',
        alternatives: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',],
        correctAnswer: 27
    }
]

//start function
let app =
{
    start:function()
    {
        this.score=0
        this.currPosition=0
        let currQuestion = questions[this.currPosition]
        let alts = document.querySelectorAll('.alternative')
        alts.forEach((element,index)=>
        {
           element.addEventListener('click',()=>
           {
                this.checkAnswer(index)
           })
        })
       this.showQuestion(question)
       this.updateStats();
    },
    showQuestion: function(q)
    {
        this.currQuestion=q;
    
        let  titleDiv= document.getElementById('title')
        let alternatives=document.getElementsByClassName("alternative")

        //modify it
        titleDiv.textContent=q.title;
        let alts=document.querySelectorAll('.alternative')
        alts.forEach(function(element,index)
        {
            element.textContent=q.alternatives[index];
        })

    },
    checkAnswer:function(userSelected)
    {
        
        let currQuestion=questions[this.currPosition]
        if(this.currQuestion.correctAnswer == userSelected)
        {
            console.log("correct answer")
            this.score++
            this.showResults(true);
        }
        else
        {
            console.log("wrong")
            this.showResults(false);
        }
        this.increasePosition();
        this.showQuestion(questions[this.currPosition]);
        this.updateStats();
    },

        increasePosition:function()
        {
            //increase the current postion
            this.currPosition++
            //send back to start if wrong
            if(this.currPosition==questions.length)
            {
                this.currPosition=0
            }
        },
        updateStats:function()
        {
            //select score div
            let scoreDiv=document.getElementById('score');
            //modify text
            scoreDiv.textContent ='yourscore: '+this.score 
        },
        showResults:function(isCorrect)
        {
            let resultDiv = document.getElementById('results');
            let result =''
            if(isCorrect)
            {
                result='correct Answer';
            }
            else
            {
                //what current question
                let currQuestion=questions[this.currPosition];
                //get the right anwser
                let currAnsIndex = currQuestion.correctAnswer;
                //answer text 
                let correctText=currQuestion.alternatives[currAnsIndex];
                result="wrong idiot"+correctText;

            }
            resultDiv.textContent=result;
        }
            
}

app.start()