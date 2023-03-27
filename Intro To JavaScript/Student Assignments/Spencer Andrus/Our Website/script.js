let question={
    title: 'What is the hit dice of 3rd edion rogues?',
        alternatives: ['d10', 'd8','d12', 'd4', 'd6'],
        correctAnswer: 4
}
let questions=[
    {
        title: 'What is the hit dice of 3rd edion rogues?',
        alternatives: ['d10', 'd8','d12', 'd4', 'd6'],
        correctAnswer: 4
    }, {
        title: "What was the fighter's main feature in 3rd edition?",
        alternatives: ['combat style', 'tactical maneuvers', 'bonus feat', 'followers', 'multiple attacks'],
        correctAnswer: 2
    }, {
        title: "What was a 3rd edition paladin's main feature?",
        alternatives: ['smite evil', 'spellcasting', 'healing', 'protection', 'skills'],
        correctAnswer: 0
    }, {
        title: 'Which of the following had a combat style feature in 3rd edition:',
        alternatives: ['Barbarian','Cleric','Fighter','Paladin','Ranger'],
        correctAnswer: 4
    }, {
        title: 'Which of the following could not be Lawful Good in 3rd edition:',
        alternatives: ['Fighter', 'Cleric', 'Paladin', 'Rogue', 'Druid'],
        correctAnswer: 4
    }, {
        title:'Was there an alignment restriction on the ethical(law/chaos) component of 3rd edition barbarians? If so, what?',
        alternatives: ['No', 'Yes-cannot be chaotic', 'Yes-cannot be lawful', 'Yes-must be chaotic', 'Yes-must be lawful'],
        correctAnswer: 2
    }, {
        title:'What would the AC be of a shieldless human with dex 6 in full plate be in 3rd editon?',
        alternatives: ['2', '16', '18', '4', '20'],
        correctAnswer: 1
    },{
        title: 'What does hit dice affect in 3rd edition?',
        alternatives:['hit points', 'attack bonus', 'saving throws', 'attacks per round', 'all of the above'],
        correctAnswer: 4
    }, {
        title: 'What was the level adjustment of a 3rd edition tiefling?',
        alternatives: ['0', 'N/A', '+1', '+2', '-'],
        correctAnswer: 2
    }, {
        title: 'Which is not a 3rd edition type?',
        alternatives: ['beast', 'humanoid', 'elemental', 'celestial', 'plant'],
        correctAnswer: 3
    }, {
        title: 'Which is a saving throw in 3rd edition?',
        alternatives: ['Constitution', 'Dexterity', 'Wisdom', 'Stregnth', 'Fortitude'],
        correctAnswer: 4
    }, {
        title: 'Which of the following did not have ability adjustments double between 2nd and 3rd edition?',
        alternatives:['human','elf','dwarf','gnome','halfling'],
        correctAnswer: 3
    }, {
        title: 'In 2nd edition, is a high armor class a good thing?',
        alternatives: ['Yes', 'No', 'N/A', '-', 'n/a'],
        correctAnswer: 1
    }, {
        title: 'True/False: Scoring the highest in initiative in 2nd edition means you act before anyone else.',
        alternatives: ['True', 'False', '', '', ''],
        correctAnswer: 1
    }, {  
        title: 'How many 0-level spells existed in 2nd edition?',
        alternatives: ['0', '12', '15', '25', '99'],
        correctAnswer: 0
    }, {
        title: 'Does a high armor class mean a different thing in 3rd edition than 2nd edition?',
        alternatives: ['Yes', 'No', 'Maybe', 'N/A', '-'],
        correctAnswer: 0
    }, {
        title: 'Which of the following is an NPC class:',
        alternatives: ['Fighter', 'Barbarian', 'Rogue', 'Expert', 'Paladin'],
        correctAnswer: 3
    }, {
        title: 'Which class has spellcasting without multiclassing in 3rd edition?',
        alternatives: ['Fighter', 'Barbarian', 'Rogue', 'Expert', 'Paladin'],
        correctAnswer: 4
    }, {
        title: 'Which of the following has the biggest hit dice in 3rd edition:',
        alternatives: ['Fighter', 'Barbarian', 'Rogue', 'Expert', 'Paladin'],
        correctAnswer: 1
    }
]
let app={
    start:function(){
    this.currPosition=0
    this.score=0
    let alts=document.querySelectorAll('.alternative')
    //show alternatives
    alts.forEach(function(element,index){
        element.addEventListener('click', function(){
            this.checkAnswer(index)
    }.bind(this))  
    }.bind(this))
    this.showQuestion(question)
    this.curiosity()
    },
    showQuestion(q){
    this.currQuestion=q
    this.currQuestion=questions[this.currPosition]
    //select the dom. element
    let titleDiv=document.getElementById("title")
    titleDiv.textContent=q.title;
    //select by query
    let alts=document.querySelectorAll('.alternative')
    //show alternatives
    alts.forEach(function(element,index){
        element.textContent=q.alternatives[index];
    })
    },
    checkAnswer:function(userDefined){
        let currQuestion=questions[this.currPosition]
        if(currQuestion.correctAnswer==userDefined){
            console.log("Correct Answer")
            this.score++
            this.showCorrect(true)
        }
        else{
            console.log('Incorrect')
            this.showCorrect(false)
        }
        this.incPosition(),
        this.showQuestion(questions[this.currPosition])
        this.curiosity()
    },
    incPosition:function(){
        //increase the current position
        this.currPosition++;
        //reset, set back to start
        if(this.currPosition==questions.length){
            this.currPosition=0
        }
    },
    curiosity:function(){
        //select score div
        let score=document.getElementById('score')
        //modify the text
        score.textContent='your score: '+this.score
    },
    showCorrect: function(isCorrect){
        let correction=document.getElementById('results')
        let result=''
        if(isCorrect){
            result='Correct Answer'
        }
        else{
            //what is current question?
            let currQuestion=questions[this.currPosition]
            //get correct answer
            let currAnsIndex=currQuestion.correctAnswer
            //answer text
            let scrutiny=currQuestion.alternatives[currAnsIndex]
            result='wrong answer. Correct:'+scrutiny
        }
        correction.textContent=result
    }
}
app.start()