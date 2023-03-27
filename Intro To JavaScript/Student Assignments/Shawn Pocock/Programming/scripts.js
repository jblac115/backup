// select the element you want to modify
//const words = document.getElementById("sign")

//console.log(words)

// Here we will modify

//words.textContent = "Your doom is near."

//words.innerHTML = words.innerHTML+"<p style=color:blue>I am a god</p>"
// Modify the color

//words.style.color="blue";


let question = {
    title: 'What is the best terraria mod from these?',
    alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
    correctAnswer: 3
}
let questions = [
    {
        title: 'What is the best terraria mod from these?',
        alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
        correctAnswer: 3
    },
    {
        title: 'Which terraria mod is the best for beginners?',
        alternatives:["Calamity","Mod of Redemption","Thorium","Fargo's Soul",],
        correctAnswer: 2
    },
    {
        title: 'What is the biggest terraria mod from these?',
        alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
        correctAnswer: 1
    },
    {
        title: 'Which is the most odd terraria mod from these?',
        alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
        correctAnswer: 0
    },
    {
        title: 'Which is the most updated terraria mod from these?',
        alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
        correctAnswer: 2
    },
    {
        title: 'Which terraria mod has the most classes from these?',
        alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
        correctAnswer: 3
    },
    {
        title: 'Which is the best terraria mod for people with no life?',
        alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
        correctAnswer: 1
    },
    {
        title: 'What terraria mod has an abandoned lab?',
        alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
        correctAnswer: 0
    },
    {
        title: 'What terraria mod has a janitor mini boss?',
        alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
        correctAnswer: 0
    },
    {
        title: 'What terraria mod has the longest crafting recipie?',
        alternatives:["Mod of Redemption","Fargo's Soul","Calamity","Thorium"],
        correctAnswer: 1
    },
    
    
]
// Start function
let app = {
    start:function(){
        this.score = 0
        this.currPosition = 0
        let currQuestion = questions[this.currPosition]
        let alts= document.querySelectorAll('.alternative')
    // show the alts
    //Bind approach
    alts.forEach((element,index)=>{
        element.addEventListener('click',()=>{
            this.checkAnswer(index)
        })
    })
    
    this.showQuestion(question)
    this.updatingStatus();
    },
    showQuestion: function(q){
        this.currQuestion = q
        // Select the DOM elements
    let titleDiv = document.getElementById("title")
    let alternatives = document.getElementsByClassName("alternative")
    // MODIFY BOOOYYYSSS
    titleDiv.textContent = q.title;
    // select by query
    let alts= document.querySelectorAll('.alternative')
    // show the alts
    alts.forEach(function(element,index){
        element.textContent=q.alternatives[index]
        
    })
    },
    checkAnswer: function(userSelected){
        let currQuestion = questions[this.currPosition]
        
        if(this.currQuestion.correctAnswer == userSelected){
            console.log("correct Lol")
            this.showResults(true);
            this.score ++
        }else{
            console.log("Wrong")
            this.showResults(false);
        }
        this.increasePosition();
        this.showQuestion(questions[this.currPosition]);
        this.updatingStatus();
    },
    increasePosition: function(){
        // increase position
        this.currPosition++
        // reset at the end
        if(this.currPosition == questions.length){
            this.currPosition = 0
            this.score = 0
        }
        
    },
    updatingStatus: function(){
        let scoreDiv = document.getElementById("score");
        scoreDiv.textContent = "your score: "+this.score+"/10"
    },
    showResults: function(isCorrect){
        let resultsDiv = document.getElementById("result");
        let result = ''
        if(isCorrect){
            result = "Correct Answer";
        } else{
            // what is the current Question
            let currQuestion = questions[this.currPosition]
            //Get the answer for the question
            let currAnsIndex = currQuestion.correctAnswer
            // answer text
            let correctText = currQuestion.alternatives[currAnsIndex]
            result = "wrong answer, the correct answer is "+correctText;
        }
        resultsDiv.textContent = result;
    }
}
app.start();
let output = document.getElementById("colorOutput");

output.innerText(
  "rgb(" + red.value + "," + green.value + "," + blue.value + ")"
);

function onColors() {
  let red = document.getElementById("range_red").value;
  let green = document.getElementById("range_green").value;
  let blue = document.getElementById("range_blue").value;
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}

function btnPressed() {
  clicks.innerHTML++;
}

