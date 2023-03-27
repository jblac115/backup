// //1. select the element you want to modify
// let sign=document.getElementById('sign');
// console.log(sign);

// //2. modify
// //modifying text
// sign.textContent='Triple G is cool'

// sign.innerHTML=sign.innerHTML+'<p style=color:red>Triple G Draws cool stuff!</p>'
// //modify the color
// //you can use rgb(r,g,b) for specific color
// sign.style.color='green'; 
let question={
    title:'When Is Groundhog Day',
    alternatives: ['Feb. 2','March 3','April 1','March 30'],
    correctAnswer: 0
}
    let questions=[
        {
            title:'When Is Groundhog Day',
            alternatives: ['Feb. 2','March 3','April 1','March 30'],
            correctAnswer: 0
        },
        {
            title:'what color is the sun',
            alternatives: ['white','green','ow my eyes','yellow'],
            correctAnswer: 0
        },
        {
            title:'what color is the moon',
            alternatives: ['blue','green','grey','white'],
            correctAnswer: 2
        },
        {
            title:'where are the pillars of creation',
            alternatives: ['milky way','Eagle nebula','Orion nebula','lagoon nebula'],
            correctAnswer: 1
        },
        {
            title:'Where is the closest black hole',
            alternatives: ['1,500 light years','9 light years','10,000 light years','1,600 light years'],
            correctAnswer: 3
        },
        {
            title:'what day is x-mas',
            alternatives: ['Dec. 25','Feb. 2','July. 4','never'],
            correctAnswer: 0
        },
        {
            title:'what color is a black hole',
            alternatives: ['None','Orange','Red','Blue'],
            correctAnswer: 0
        },
        {
            title:'Nearest White dwarf',
            alternatives: ['The sun','wolf 359','Orion nebula','Sirius B'],
            correctAnswer: 3
        },
        {
            title:'which is a red dwarf star',
            alternatives: ['Wolf 359','Sirius B','Sun','Banards'],
            correctAnswer: 0
        },
        {
            title:'bored?',
            alternatives: ['yes','no','idk','shush'],
            correctAnswer: 3
        }

    ]
    let app={
    start:function(){
    this.currPosition=0;
    this.score=0
    //select by query
    let alts=document.querySelectorAll('.alternative');
    
    //show alternatives
    //bind approach
    alts.forEach((element,index)=>{
        element.addEventListener("click", ()=>{
            this.checkAnswer(index);
        })
    })
    this.showQuestion(questions[this.currPosition]);
    this.updateScore();
    },
    //Function showing the question
    showQuestion:function(q){
        this.currQuestion= q
        //1. select the dom element
        let titleDiv=document.getElementById('title');

        //modify it
        titleDiv.textContent= q.title;

        //always call function after you declare it
        //select by query
        let alts=document.querySelectorAll('.alternative');
    
        //show alternatives
        alts.forEach(function(element,index){
        element.textContent=q.alternatives[index]
    });
    },
    checkAnswer:function(userSelected){
        let currQuestion=questions[this.currPosition]


        if(currQuestion.correctAnswer==userSelected){
            console.log('Correct Answer');
            this.score++;
            this.showResult(true);
        }
        else{
            console.log('Wrong Answer')
            this.showResult(false);
        }
        this.increasePosition()
        this.showQuestion(questions[this.currPosition])
        this.updateScore();
    },
    increasePosition:function(){
        //increase the current position
        console.log(this.currPosition)
        this.currPosition++
        //send back to start
        console.log(this.currPosition)
        if(this.currPosition==questions.length){
            this.currPosition=0
        }
    },
    updateScore:function(){
        //select score div
        let scoreDiv=document.getElementById('score');
        //modify the text
        scoreDiv.textContent='Your Score: '+this.score
    },
    showResult:function(isCorrect){
        //select results
        let resultsDiv=document.getElementById('results')
        let result=''
        if(isCorrect){
            result='correctAnswer';
        }
        else{
            //what is current question
            let currQuestion=questions[this.currPosition];
            //get correct answer
            let currentAnsIndex=currQuestion.correctAnswer;
            //answer text
            let correctText=currQuestion.alternatives[currentAnsIndex];
            result='Wrong Answer And the Correct Answer Is '+correctText;
        }
        resultsDiv.textContent=result;
    }
}
    
   app.start()
    
    // //1. Select The Id
    // let btn=document.getElementById('btn');
    // btn.addEventListener("click", function(){
    // console.log("ha you clicked the button")
    // });
