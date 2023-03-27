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
            title:"When Is My Birthday",
            alternatives: ["Sep. 19","Aug. 20","Sep. 20", "Aug. 12"],
            correctAnswer:0
        },
        {
            title:"When Is Mr. Black's Birthday",
            alternatives: ["I Have No Idea","July 1","Sep. 20", "Jan 1"],
            correctAnswer:0
        },
        {
            title:"When Is Christmas",
            alternatives: ["Dec. 25","Jan. 1","Nov. 25", "Dec. 12"],
            correctAnswer:0
        },
        {
            title:"When Is Thanksgiving",
            alternatives: ["Nov. 26","Jan. 1","Nov. 25", "Dec. 12"],
            correctAnswer:0
        },
        {
            title:"When Is Independence Day",
            alternatives: ["July 4","Jan. 4","June 4", "April 4"],
            correctAnswer:0
        },
        {
            title:"When Is My Moms Birthday",
            alternatives: ["March 30","May 30","March 3", "May 3"],
            correctAnswer:0
        },
        {
            title:"When Is New Years",
            alternatives: ["Jan. 1","Nov. 25", "Dec. 12","Dec. 34"],
            correctAnswer:0
        },
        {
            title:"When Is St Patricks Day",
            alternatives: ["March 17","May 17","March 15", "May 13"],
            correctAnswer:0
        },
        {
            title:"When Is Easter",
            alternatives: ["April 9","April 1","August 9", "August 1"],
            correctAnswer:0
        },
    ]
    let app={
        start:function(){
            this.curp=0
            this.score=0
                   //select by query
    let alts=document.querySelectorAll('.alternative');

    //show alternatives
    //arrow function
    alts.forEach((element,index)=>{
    element.addEventListener("click", ()=>{
        this.checkAnswer(index)
        }
    );
    })
    this.showQuestion(questions[this.curp]);
    this.updatestats();
        },
         //Function showing the question
    showQuestion:function(q){
        this.curQ=q

        //1. select the dom element
        let titleDiv=document.getElementById('title');
    
        //modify it
        titleDiv.textContent=q.title;
    
        //always call function after you declare it
        //select by query
        let alts=document.querySelectorAll('.alternative');
    
        //show alternatives
        alts.forEach(function(element,index){
        element.textContent=q.alternatives[index]
        });
    },
    checkAnswer:function(userSelected){
        let curQ=questions[this.curp]
        if(curQ.correctAnswer==userSelected){
            console.log("Correct");
            this.score++;
            this.showres(true)
        }
        else{
            console.log("Wrong")
            this.showres(false)
        }
        this.increasePosition();
        this.showQuestion(questions[this.curp])
        this.updatestats();
        
    },
    increasePosition:function(){
        //increase the current position 
        this.curp++;
        //send back to start
        if(this.curp==questions.length){
            this.curp=0
        }
    },
    updatestats:function(){
    //select score div
    let scoreDiv=document.getElementById('score');
    //modify the text 
    scoreDiv.textContent='Your Score:'+this.score
    },
    showres:function(isCorrect){
        let resultDiv=document.getElementById("results")
        //modify it
        let result=""
        if(isCorrect){
            result="correct answer";
        }
        else{
            //what is our current question
            let  curq=questions[this.curp];
            let currAnsIndex=curq.correctAnswer
            //answer text
            let correctText=curq.alternatives[currAnsIndex]
           result="Wrong answer and the Correct answer is "+correctText
        }
        resultDiv.textContent=result
    }
    }
app.start()

    // //1. Select The Id
    // let btn=document.getElementById('btn');
    // btn.addEventListener("click", function(){
    //     console.log("ha you clicked the button")
    // });
   
