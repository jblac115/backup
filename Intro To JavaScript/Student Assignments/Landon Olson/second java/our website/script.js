let question={
    title: 'When is Christmas',
    alternatives:["March 25","May 25","December 25","September 25"],
    correctAnswer: 2
}
//function for showing the question
function showQuestion(q){
    //1. select the dom element
    let titleDiv=document.getElementById('title');
    //modify it
    titleDiv.textContent=q.title;
    //select by query
    let alts=document.querySelectorAll('.alternative');
    //show alternatives 
    alts.forEach(function(element,index){
        element.textContent=q.alternatives[index];
    })
}
showQuestion(question);