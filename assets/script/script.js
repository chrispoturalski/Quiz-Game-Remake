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
            {
                answer: 1,
                correct: false
            },
            {
                answer: 3,
                correct: true
            },
            {
                answer: 4,
                correct: false
            },
        ]
    },
    {
        question: "What is 4x1?",
        answers: [
            {
                answer: 1,
                correct: false
            },
            {
                answer: 4,
                correct: true
            },
            {
                answer: 5,
                correct: false
            },
        ]
    },
]

// created game variables
var currentQuestion = 0;
var gameRunning = false;
var timeLeft = 60;
var score = 0;
var interval;

//Call a function to deduct time if question is missed
function deductTime() {
    timeLeft -= 10;
}

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
        }
    }, 1000);
}

//Function to display the questions
function displayQuestions(question){
    //console.log(questions[0]);
    questionText.innerHTML = `${question.question}`;
    optionOne.innerHTML = `${question.answers[0].answer}`
    optionTwo.innerHTML = `${question.answers[1].answer}`
    optionThree.innerHTML = `${question.answers[2].answer}`
    optionOne.addEventListener('click', function(event) {
        if(event.currentTarget.dataset.correct === 'true') {
            score += 10;
        } else {
            //Take some time off of timer
            deductTime();
        }
        currentQuestion++;
        console.log(`${question.answers[0].correct}`)
    },),
    optionTwo.addEventListener('click', function(event) {
        if(event.currentTarget.dataset.correct === 'true') {
            score += 10;
        } else {
            //Take some time off of timer
            deductTime();
        }
        currentQuestion++;
        console.log(`${question.answers[1].correct}`)
    },)
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
