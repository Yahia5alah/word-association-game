const scoreDisplay =document.getElementById('score-display')
const questionDisplay =document.getElementById('question-display')

const questions =[
    {
        quiz:['value','estimate','evaluate'],
        option:['jury','assess'],
        correct:2
    }
    ,
    {
        quiz:['close','near','next'],
        option:['trace','adjacent'],
        correct:2
    }
    ,
    {
        quiz:['foreign','national','ethnic'],
        option:['mad','exotic'],
        correct:2
    }
    ,
    {
        quiz:['assume','insight','weather'],
        option:['forecasr','sustainable'],
        correct:2
    }
    ,
    {
        quiz:['fast','quick','promt'],
        option:['charity','rapid'],
        correct:2
    }
] 
let score = 0;
let clicked = []; 
scoreDisplay.append(score);

function populateQuestion(){
    questions.forEach(question =>{

const questionBox = document.createElement("div");
questionBox.classList.add('question-box');

const logo = document.createElement("h1");
logo.textContent="✏";
questionBox.append(logo);

    question.quiz.forEach( item => {
        const itemText = document.createElement("p");
        itemText.textContent= item;
        questionBox.append(itemText);
    })

    const questionButtons =document.createElement('div');
    questionButtons.classList.add('question-buttons');
    questionBox.append(questionButtons);

    question.option.forEach((option,optionIndex) => {
        const questionButton =document.createElement('button');
        questionButton.classList.add('question-button');
        questionButton.textContent=option;

questionButton.addEventListener('click', ()=> checkAnswer( questionButton ,questionBox,option , optionIndex + 1 , question.correct ))

        questionButtons.append(questionButton);
    })
const anwerDisplay=document.createElement('div')
anwerDisplay.classList.add('answer-display');

questionBox.append(anwerDisplay);
questionDisplay.append(questionBox);
    })
}
populateQuestion();

function checkAnswer(questionButton ,questionBox, option , optionIndex , correctAnswer){
console.log('option : '+ option)
console.log('index : '+ optionIndex)

if(optionIndex === correctAnswer){
    score++;
    scoreDisplay.textContent=score;
    addResult(questionBox, 'Correct' , 'correct')
}
else{
    score--;
    scoreDisplay.textContent=score;
    addResult(questionBox, 'Wrong' , 'wrong')
}
clicked.push(option);
questionButton.disabled=clicked.includes(option);
}
function addResult(questionBox,anwer,className){
const anwerDisplay = questionBox.querySelector('.answer-display');
anwerDisplay.classList.remove('Wrong');
anwerDisplay.classList.remove('Correct');
anwerDisplay.classList.add(className);
anwerDisplay.textContent=anwer;
}