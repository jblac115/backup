let question={
    title: 'Literally Guess Lmao',
    alternatives: ['A', 'B', 'C', 'D'],
    correctAnswer: 2
}

function showQuestion(question){
    //select element
    let titleDiv=document.getElementById('title')
    //modify it
    titleDiv.textContent=q.title
    //select by a query
    let alternatives=document.querySelectorAll('.alts')
    //show each alternative
    alternatives.forEach(function(element,index){
        element.textContent=q.alternatives[index];
        //listening for events
        element.addEventListener('click',function(){
            //check for correct answer
            if(question.correctAnswer==index){
                console.log("correct answer")
            }
            else{
                console.log("wrong answer")
            }
        })
    })
}

showQuestion(question);
//select element
let button=document.getElementById('button');
//listening event
button.addEventListener('click',function(){
    console.log('clicked');
})