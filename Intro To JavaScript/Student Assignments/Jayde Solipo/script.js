// define the object for the question entity
let question = {
    title: 'What is the best cheesecake?',
    alternatives: ['None', 'All', 'Idk', 'Other'],
    correctAnswer: 1
  };
  let questions=[
    {
        title: 'What is my favorite cheesecake?',
        alternatives: ['Strawberry',"Vanilla",'Chocolate',"Other"],
        correctAnswer: 0
    },
    {
        title: 'How old is cheesecake?',
        alternatives: [3, 2000, 1400, 12],
        correctAnswer: 2
    },
    {
        title: 'Who created cheesecake?',
        alternatives: ['Unknown',"Eleanor Thomas",'Robert Warren',"Anna Lenex"],
        correctAnswer: 0
    },
    {
        title: 'What Country was cheesecake made in?',
        alternatives: ["America","Greece",'Spain',"Russia"],
        correctAnswer: 1
    },
    {
        title: 'What year did cheesecake gain popularity?',
        alternatives: [2011, 2006, 2010, 2013],
        correctAnswer: 2
    },
    {
        title: 'How many types of cheesecake are there?',
        alternatives: ["1 to 3", "4 to 6", "7 to 9", "10+"],
        correctAnswer: 3
    },
    {
        title: 'Is cheesecake a cake?',
        alternatives: ['No', 'Yes', 'Maybe', 'Idk'],
        correctAnswer: 0
    },
    {
        title: 'How heavy was the larges cheesecake ever made?',
        alternatives: ['937.6 lbs', '20 lbs', '3073.5 lbs', '4531.89 lbs'],
        correctAnswer: 0
    },
    {
        title: 'How many national cheesecake days are there in the USA?',
        alternatives: [11, 2, 1, 5],
        correctAnswer: 3
    },
    {
        title: 'How much was the most expensive cheesecake?',
        alternatives: ['$2000', '$4000', '$5000', '$7000'],
        correctAnswer: 2
    },
    {
        title: 'How much does it cost to buy all the cheesecakes at Cheesecake Factory?',
        alternatives: ['$400', '$200', '$2000', '$300'],
        correctAnswer: 0
    },
]
  let app = {
    start: function() {
      this.currPosition=0
      //keep track of our score
      this.score=0;
      // get alternatives
      let alts = document.querySelectorAll('.alternatives');
      // //bind method
      // alts.forEach(function(element, index){
      //   element.addEventListener('click', function(){
      //     // check correct answer
      //     this.checkAnswer(index);
      //   }.bind(this));
      // }.bind(this));
      //arrow method
      alts.forEach((element, index)=>{
        element.addEventListener('click', ()=>{
          // check correct answer
          this.checkAnswer(index);
        });
      });
      this.updateStats();
      // show first question
      this.showQuestion(question);
    },
    
    showQuestion: function(q) {
      //keep tack of our current question
      this.currQuestion=q;
      // show question title
      let titleDiv = document.getElementById('title');
      titleDiv.textContent = q.title; 
    
      // show alternatives
      let alts = document.querySelectorAll('.alternatives');
    
      alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];
      });
    },
    checkAnswer: function(userSelected){
      let currQuestion=questions[this.currPosition]
      if(currQuestion.correctAnswer == userSelected){
        //correct
        console.log("correct answer");
        this.score++
        this.showResult(true)
      }
      else{
        //wrong
        console.log("wrong answer");
        this.score--
        this.showResult(false)
      }
      this.updateStats();
      //increase our position
      this.increasePosition();
      //show our next question
      this.showQuestion(questions[this.currPosition])
    },
    increasePosition:function(){
      //increase our position
      this.currPosition++;
      //if we reached the end of the quiz
      if(this.currPosition==questions.length){
        //send back to beginning
        this.currPosition=0;
      }
    },
    updateStats:function(){
      //select score element
      let scoreDiv=document.getElementById('score');
      //display the score
      scoreDiv.textContent='Your score is '+this.score;
    },
    showResult: function(isCorrect){
        let resultDiv=document.getElementById('result')
        let result=''
        if (isCorrect){
            result='Correct!'
        }
        else {
            let currQuestion=questions[this.currPosition]
            let cai=currQuestion.correctAnswer
            let cat=currQuestion.alternatives[cai]
            result=cat
        }
        resultDiv.textContent=result
    }
  };
  
  // initialize the application
  app.start();

