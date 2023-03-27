// //1. select the element you want to modify
// let sign=document.getElementById('tree');
// console.log(tree);
// //2. modify
// //modifying text
// tree.textContent='DINO NUGGGGIIEEEESSSSS!!!!!';

// tree.innerHTML=tree.innerHTML+'<p style=color: blue>Dino nuggies are the best in the entire world!</p>'
// //modify color
// tree.style.color='green';
let questions=[
    {
        title: 'How many types of penguins are there?',
        alternatives:['1','12','18','21'],
        correctAnswer: 2
    },
    {
        title: 'What is Mr.Blacks favorite day?',
        alternatives:['Jan 5','Feb 2','Mar 19','Dec 25'],
        correctAnswer: 1
    },
    {
        title: 'What is 2+2?',
        alternatives:['4','7','2','5'],
        correctAnswer: 3
    },
    {
        title: 'How many chickens does it take to kill a bear?',
        alternatives:['4972','300','1','21'],
        correctAnswer: 0
    },
    {
        title: 'What code language was this writen on?',
        alternatives:['Java','Python','Java script','HTML'],
        correctAnswer: 2
    },
    {
        title: 'Are you enjoying this?',
        alternatives:['Yes','Kinda','No','NOPE!'],
        correctAnswer: 0
    },
    {
        title: 'Can Penguins fly?',
        alternatives:['What are penguins?','Yes','Probably','No'],
        correctAnswer: 1
    },
    {
        title: 'You have 5 skitles. A freind eats 3. you get 15 more. Your mom gives you 50 times the amount you had before. You share half with 20 people. You eat 32. Then you buy a bag of 500. And give each of your 3 freinds 32.54% of the bag. How many M&Ms do you have left?',
        alternatives:['295.6','738','31','0'],
        correctAnswer: 3
    },
    {
        title: 'Is water wet?',
        alternatives:['No','Yes','I have no idea what you are talking about','I dont care'],
        correctAnswer: 0
    },
    {
        title: 'Are you smart?',
        alternatives:['yes','no','maybe','cant answer. Its against my religion'],
        correctAnswer: 1
    },
    {
        title: 'Did you enjoy these questions?',
        alternatives:['yes','no','maybe','Your Mother'],
        correctAnswer: 0
    },
]
let app={
    start:function(){
        let alts=document.querySelectorAll('.alternative');
        this.currPosition=0
        this.score=0
        //show alternatives
        //bind approach
        alts.forEach(function(element,index){
            element.addEventListener('click',function(){
                this.checkAnswer(index);
            }.bind(this))
        }.bind(this))
        this.showQuestion(questions[this.currPosition])
        this.snowCone();
    },
    showQuestion:function(q){
        this.currQuestion=q
        //1. select the dom element
        let titleDiv=document.getElementById("title");
        //modify it
        titleDiv.textContent=q.title;
        //select query
        let alts=document.querySelectorAll('.alternative');
        //show alternatives
        alts.forEach(function(element,index){
            element.textContent=q.alternatives[index];
        })
    },
    checkAnswer:function(userSelected){
        let currQuestion=questions[this.currPosition]
        if(this.currQuestion.correctAnswer==userSelected){
            console.log("Correct Answer")
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
        this.snowCone();
    },
    increasePosition:function(){
        //increase current position
        this.currPosition++;
        //send back to start
        if(this.currPosition==questions.length){
            this.currPosition=0;
        }
    },
    snowCone:function(){
        //select score div
        let scoreDiv=document.getElementById('score');
        //modify the text
        scoreDiv.textContent='Your Score: '+this.score
    },
    showResults:function(isCorrect){
        //select results div
        let resultsDiv=document.getElementById('results');
        let result=''
        if(isCorrect){
            result='Correct Answer'
        }
        else{
            //what is our current question?
            let currQuestion=questions[this.currPosition];
            //get the correct answer
            let currAnsIndex=currQuestion.correctAnswer;
            //answer text
            let correctText=currQuestion.alternatives[currAnsIndex];
            result="Wrong Answer. Correct Answer: "+correctText
        }
        resultsDiv.textContent=result;

    }
}
app.start();
//1. select the element
let booton=document.getElementById('booton');
booton.addEventListener('click',function(){
    console.log("Booton has been pressed")
    alert('You have pushed a button :D')
})
//isCorrect
