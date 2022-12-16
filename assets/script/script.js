// Variables from HTML
var header = document.querySelector('.header')
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
var highscores = document.getElementById('.highscores')

// created game variables
var currentQuestion = 0;
var gameRunning = false;
var timeLeft = 60;
var score = 0;
var interval;

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


function addToScore() {
    score += 10;
}

function next() {
    beginQuiz(questions[currentQuestion]);
    currentQuestion++;
    if (questions.length === currentQuestion - 1) {
        endGame();
    }
}

// Start game function
var startGame = function () {
    if (gameRunning) return;
    console.log("Starting the game, good luck!!!")
    gameRunning = true;
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

function displayScore() {
    score.textContent = score;
}

function nextQuestion(){
    optionOne.addEventListener('click', function(event) {
        if (event.currentTarget.dataset.answer === 'true') {
            console.log("Good Job!")
            addToScore();
            next();
        } else {
            console.log("Bad job!")
            decreaseTime();
        }
    });
    optionTwo.addEventListener('click', function(event) {
        if (event.currentTarget.dataset.answer === 'true') {
            console.log("Good job!")
            addToScore();
            next();
        } else {
            console.log("Bad job!")
            decreaseTime();
        }
    });
    optionThree.addEventListener('click', function(event) {
        if (event.currentTarget.dataset.answer === 'true') {
            console.log("Good job!")
            addToScore();
            next();
        } else {
            console.log("Bad job!")
            decreaseTime();
        }
    });
}

//Function to display the questions
function beginQuiz(){
    questionText.innerHTML = questions[currentQuestion].question; //displays the question
    optionOne.innerHTML = questions[currentQuestion].answers[0].option; //displays answers from array
    optionOne.setAttribute("data-answer", questions[currentQuestion].answers[0].answer)
    optionTwo.innerHTML = questions[currentQuestion].answers[1].option; //displays answers from array
    optionTwo.setAttribute("data-answer", questions[currentQuestion].answers[1].answer)
    optionThree.innerHTML = questions[currentQuestion].answers[2].option; //displays answers from array
    optionThree.setAttribute("data-answer", questions[currentQuestion].answers[2].answer)
    nextQuestion();
}

function highscorePage() {
    questionArea.textContent = 'Congratulations!'
}

//Function to call when the game is over
var endGame = function () {
    console.log("Game over!!!")
    gameRunning = false;
    timeLeft = 60;
    questionArea.style.display = "none";
    highscorePage();
}



// Create event listener for game
startBtn.addEventListener('click', startGame);
//highscoreBtn.addEventListener('click', startGame);


