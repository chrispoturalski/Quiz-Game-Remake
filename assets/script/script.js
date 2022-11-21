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
        answers: ["1", "3", "4"],
        answer: 1
    },
]

// created game variables
var currentQuestion = 0;
var gameRunning = false;
var timeLeft = 60;
var interval;

//Call a function to deduct time if question is missed
function deductTime() {
    timeLeft -= 10;
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
        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 100);
}

//Function to display the questions
function displayQuestions(question){
    console.log(questions[0]);
    questionText.innerHTML = questions[currentQuestion].question;
    optionOne.innerHTML = questions[currentQuestion].answers[0];
    optionTwo.innerHTML = questions[currentQuestion].answers[1];
    optionThree.innerHTML = questions[currentQuestion].answers[2];
}


//Function to call when the game is over
var endGame = function () {
    console.log("Game over!!!")
    gameRunning = false;
    timeLeft = 60;
    //highscoreDisplay();
}

// Create event listener for game
startBtn.addEventListener('click', startGame);
// highscore.addEventListener('click', highscores);
