// define the object for the question entity
let question = {
    title: 'How old is the groundhog?',
    alternatives: [117, 138, 17, 6],
    correctAnswer: 1
  };
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
    start: function() {
      this.currPosition=0
      //keep track of our score
      this.score=0;
      // get alternatives
      let alts = document.querySelectorAll('.alternative');
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
      let alts = document.querySelectorAll('.alternative');
    
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
        this.showResult(true);
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
    showResult:function(isCorrect){
      //select the Result div
      let resultDiv=document.getElementById('result');
      //modify it
      let result='';
      if(isCorrect){
        result="Correct Answer"
      }
      else{
        //get current question
        let currQuestion=questions[this.currPosition];
        //Get Correct answer
        let correctAnsIndex=currQuestion.correctAnswer
        //get correct answer text
        let correctAnsText=currQuestion.alternatives[correctAnsIndex]
        result="Wrong Answer! "+ correctAnsText;
      }
      resultDiv.textContent=result;
    }
  };
  
  // initialize the application
  app.start();

