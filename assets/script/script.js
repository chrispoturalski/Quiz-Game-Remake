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
var highscores = document.getElementById('highscores')
var scoreOne = document.getElementById('score-one')
var scoreTwo = document.getElementById('score-two')
var scoreThree = document.getElementById('score-three')

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
    beginQuiz(questions[currentQuestion]);
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

// how to input data-correct="${question.answers[0]}

//Function to display the questions
function beginQuiz(){
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question; //displays the question
    optionOne.innerHTML = questions[currentQuestion].answers[0].option; //displays answers from array
    optionTwo.innerHTML = questions[currentQuestion].answers[1].option; //displays answers from array
    optionThree.innerHTML = questions[currentQuestion].answers[2].option; //displays answers from array
    optionOne.addEventListener('click', function(event) {
        if (event.currentTarget.dataset.answer === 'true') {
            console.log("Good job!")
        } else {
            console.log("Bad job!")
        }
    });
    optionTwo.addEventListener('click', function(event) {
        if (event.currentTarget.dataset.answer === 'true') {
            console.log("Good job!")
        } else {
            console.log("Bad job!")
        }
    });
    optionThree.addEventListener('click', function(event) {
        if (event.currentTarget.dataset.answer === 'true') {
            console.log("Good job!")
        } else {
            console.log("Bad job!")
        }
    });
    if (questions.length > 4) {
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
highscoreBtn.addEventListener('click', highscores);

