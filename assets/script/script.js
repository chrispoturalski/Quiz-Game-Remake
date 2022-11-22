// Variables from HTML
var header = document.querySelector('.header')
var highscore = document.querySelector('.highscoreBtn')
var content = document.getElementById('content')
var score = document.getElementById('game-score')
var setTimer = document.getElementById('setTimer')
var gameArea = document.querySelector('.game')
var questionArea = document.getElementById('question-area')
var questionText = document.getElementById('question-text')
var answerChoices = document.getElementById('answer-choices')
var optionOne = document.getElementById('option-one')
var optionTwo = document.getElementById('option-two')
var optionThree = document.getElementById('option-three')
var startBtn = document.getElementById('start-game')

//Questions array
var questions = 
[
    {
        question: "What is 3x1?",
        answers: [
            {option: 1, answer: false},
            {option: 3, answer: true},
            {option: 4, answer: false},
        ]
    },
    {
        question: "What is 4x1?",
        answers: [
            {option: 4, answer: true},
            {option: 3, answer: false},
            {option: 1, answer: false},
        ]
    },
    {
        question: "What is 5x1?",
        answers: [
            {option: 51, answer: false},
            {option: 4, answer: false},
            {option: 5, answer: true},
        ]
    },
    {
        question: "What is 6x1?",
        answers: [
            {option: 61, answer: false},
            {option: 6, answer: true},
            {option: 7, answer: false},
        ]
    },
]

// created game variables
var currentQuestion = 0;
var gameRunning = false;
var timeLeft = 60;
var score = 0;
var interval;

function addToScore() {
    score += 10;
}

// Start game function
var startGame = function () {
    if (gameRunning) return;
    console.log("Starting the game, good luck!!!")
    gameRunning = true;
    currentQuestion = 0;
    startTimer();
    displayQuestions(questions[currentQuestion]);
    startBtn.style.display = "none";
}


//We need a function to start the timer
function startTimer() {
    setTimer.textContent = timeLeft + ' Seconds Remaining';
    timer = setInterval(() => {
        timeLeft--;
        setTimer.textContent = timeLeft + ' Seconds Remaining';
        //When the time runs out, we need to stop the game and end the game
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
            setTimer.style.display = "none";
        }
    }, 1000);
}

//Call a function to deduct time if question is missed
function decreaseTime() {
    timeLeft -= 5;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
        setTimer.style.display = "none";
    }
}



//Function to display the questions
function displayQuestions(question){
    //console.log(questions[0]);
    questionText.innerHTML = `${question.question}`; //displays the question
    optionOne.innerHTML = `${question.answers[0].option}` //displays answers from array
    optionTwo.innerHTML = `${question.answers[1].option}` //displays answers from array
    optionThree.innerHTML = `${question.answers[2].option}` //displays answers from array
    optionOne.addEventListener('click', getAnswer);
    optionTwo.addEventListener('click', getAnswer);
    optionThree.addEventListener('click', getAnswer);
    if (questions.length === 0) {
        endGame();
    }
}

function getAnswer(event){
    if (event.currentTarget.dataset.correct === "true") {
        console.log(+10);
    } else {
        decreaseTime();
    }
    currentQuestion++;
    displayQuestions(questions[currentQuestion]);
    if (questions.length === currentQuestion) {
        endGame();
    }
}


//Function to call when the game is over
var endGame = function () {
    console.log("Game over!!!")
    gameRunning = false;
    timeLeft = 60;
    questionArea.style.display = "none";
    questionText.innerHTML = "Game over!!!!";
    //highscoreDisplay();
}

// Create event listener for game
startBtn.addEventListener('click', startGame);
// highscore.addEventListener('click', highscores);

