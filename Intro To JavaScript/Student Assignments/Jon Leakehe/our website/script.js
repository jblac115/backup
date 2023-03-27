// //1. select the element you want to modify
// let sign=document.getElementById('sign')
// console.log(sign)
// //2. modify
// //modifying text
// sign.textContent='Groundhog Day is the best'

// sign.innerHTML=sign.innerHTML+'<p style="color:blue"> phil is the best </p>'
// //modify the color
// sign.style.color='rgb(117,38,42)'


   
  



let questions=[
    {
        title:'When is Groundhog Day?',
        alternatives: ['Feb 2', 'March 3', 'July 18','Dec.17'],
        correctAnswer: 0
    },
    {
        title:'When is Christmas?',
        alternatives: ['Feb 8', 'December 25', 'March 15','October 30'],
        correctAnswer: 1
    },
    {
        title:'When is Independence day?',
        alternatives: ['Feb 9', 'March 27', 'July 4','Dec.17'],
        correctAnswer: 2
    },
    {
        title:'How many hours are in a day?',
        alternatives: ['1', '12', '18','24'],
        correctAnswer: 3
    },
    {
        title:'How many days are in a non leap year?',
        alternatives: ['20', '31', '365','729'],
        correctAnswer: 2
    },
    {
        title:'Who was the first president of the USA?',
        alternatives: ['George Washington', 'Donald Trump', 'Elon Musk','Drake'],
        correctAnswer: 0
    },
    {
        title:'How many states are in the USA?',
        alternatives: ['25', '50', '100','13'],
        correctAnswer: 1
    },
    {
        title:'How many minutes are in hour?',
        alternatives: ['20', '30', '60','1'],
        correctAnswer: 2
    },
    {
        title:'How many seconds are in a minute?',
        alternatives: ['60', '30', '29','23'],
        correctAnswer: 0
    },
    {
        title:'What is the greatest show of all time?',
        alternatives: ['Breaking Bad', 'Naruto', 'Attack On Titan','Demon Slayer'],
        correctAnswer: 2
    }
]

let app={
    start:function(){
        this.currPosition=0
        this.score=0
        let alts=document.querySelectorAll('.alternative')
    //show alternatives
    //bindapproach
    // alts.forEach(function(element,index){
    //     element.addEventListener('click',function(){
    //         this.checkAnswer(index)
    //     }.bind(this))
    // }.bind(this))
    //arrowfunction approach
    alts.forEach((element,index)=>{
        element.addEventListener('click',()=>{
            this.checkAnswer(index)
        })
    })
    this.showQuestion(questions[this.currPosition])
    this.updateStats()
    },
    showQuestion:function(q){
        this.currQuestion=q
    //1. select the dom element
        let titleDiv=document.getElementById('title')
    //modify it
    titleDiv.textContent=q.title 
    //select by query
    let alts=document.querySelectorAll('.alternative')
    //show alternatives
    alts.forEach(function(element,index){
       element.textContent=q.alternatives[index]
    })
    },
    checkAnswer:function(userSelected){
        let currQuestion=questions[this.currPosition]
        
        if(currQuestion.correctAnswer==userSelected){
            console.log('Correct Answer')
            this.score++
            this.showResults(true)
        }
        else{
            console.log('Wrong Answer')
            this.showResults(false)
        }
        //add next class 
        this.increasePosition()
        //show next question 
        this.showQuestion(questions[this.currPosition])
        this.updateStats()
    },
    increasePosition(){
        //increase the current position
        this.currPosition++
        //send back to start
    
        if(this.currPosition==questions.length){
            this.currPosition=0   
        }
    },
    updateStats:function(){
        //select score div
        let scoreDiv=document.getElementById('score')
        //modify the text
        scoreDiv.textContent='Your Score:  '+this.score
    },
    showResults:function(isCorrect){
        //select results
        let resultsDiv=document.getElementById('results')
        let result=''
        if(isCorrect){
            result='CORRECT ANSWER'
        }
        else{
            //what is our current question
            let currQuestion=questions[this.currPosition]
            //get the correct answer
            let currAnsIndex=currQuestion.correctAnswer
            //answer text
            let correctText=currQuestion.alternatives[currAnsIndex]
            result='WRONG ANSWER AND THE CORRECT ANSWER IS '+correctText
        }
        resultsDiv.textContent=result
    }
}

app.start()
//1. select the element 
let btn=document.getElementById('btn')
btn.addEventListener('click',function(){
    console.log('clicked the button')
})