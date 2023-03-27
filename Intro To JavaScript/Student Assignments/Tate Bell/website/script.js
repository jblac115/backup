/*

//multi-demisonal aaraus
let array =[[1,2,3],[4,5,6],[7,8,9]]
console.log(array)
let five = array[1][1]
console.log(five)

console.log(Math.PI)

let content1 = document.getElementById('');

content1.textContent="L groundhog day"
console.log(sign.textContent)

sign.innerHTML = sign.innerHTML + "<p style='color: blue'><strong>"+ testcontnent +"</strong></p> "


sign.style.color = "blue"

*/


let question={
    title:"Question 1?",
    alternative:[1,2,3,4],
    correctAnswer:3
}
let questions = [
    {
        title:"Question 1?",
        alternative:[1,2,3,4],
        correctAnswer:3
    },
    {
        title:"Question 2?",
        alternative:[5,6,7,8],
        correctAnswer:3
    },
    {
        title:"Question 3?",
        alternative:[9,10,11,12],
        correctAnswer:3
    },
    {
        title:"Question 4?",
        alternative:[13,14,15,16],
        correctAnswer:3
    },
    {
        title:"Question 5?",
        alternative:[17,18,19,20],
        correctAnswer:3
    },
    {
        title:"Question 6?",
        alternative:[21,22,23,24],
        correctAnswer:3
    },
    {
        title:"Question 7?",
        alternative:[25,26,27,28],
        correctAnswer:3
    },
    {
        title:"Question 8?",
        alternative:[29,30,31,32],
        correctAnswer:3
    },
    {
        title:"Question 9?",
        alternative:[33,34,35,36],
        correctAnswer:3
    },
    {
        title:"Question 10?",
        alternative:[37,38,39,40],
        correctAnswer:3
    },
]
let app = {
    start: function(){
        this.currentPosition=0
        this.score=0
        let alt = document.querySelectorAll(".alternative1")
        //show each possible answer
        // alt.forEach(function(element,index){
    
        //     //listening for events
        //     element.addEventListener("click", function(){
        //         // check for correct answer
        //         console.log("show answer")
        //         this.checkAnswer(index)
        //     })
        // })
        alt.forEach((element,index)=>{
    
            //listening for events
            element.addEventListener("click", ()=>{
                // check for correct answer
                this.checkAnswer(index)
            })
        })
        this.updateStats()
        this.showQuestion(question)
    },
    showQuestion: function(q){
        this.currQuestion=q
        let titleDiv = document.getElementById("ttlDiv")
        //modify it
        titleDiv.textContent = q.title
        //select by a query
        let alts=document.querySelectorAll(".alternative1")
        alts.forEach(function(element,index){
            element.textContent=q.alternative[index]
        })
    },
    checkAnswer: function(userSelected){
        if(this.currQuestion.correctAnswer==userSelected){
            console.log("correct answer")
            this.score ++
            this.showResult(true)
        }
        else{
            console.log("wrong answer")
            this.showResult(false)
            
        }
        this.increasePosition()
        this.updateStats()
        //show next question
        this.showQuestion(questions[this.currentPosition])
    },
    increasePosition:function(){
        this.currentPosition = this.currentPosition + 1

        if(this.currentPosition==questions.length){
            this.currentPosition=0
        }
    },
    updateStats: function(){
        //select the score element
        let scoreDiv=document.getElementById("score")
        scoreDiv.textContent="your score: " +this.score
    },
    showResult: function(isCorrect){
        let resultDiv=document.getElementById("result")
        let result=''
        if(isCorrect){
            result="Correct Answer"
        }
        else{
            let currQuestion=questions[this.currentPosition]
            let correctAnswerIndex=currQuestion.correctAnswer
            let correctAnswerText = currQuestion.alternative[correctAnswerIndex]
            result="Wrong Answer "+correctAnswerText
        }
        resultDiv.textContent=result
    }

}

app.start()

let amountClicked = 0
