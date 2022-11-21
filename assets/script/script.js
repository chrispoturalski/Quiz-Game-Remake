// Variables from HTML
var header = document.querySelector('.header')
var header = document.querySelector('.highscoreBtn')
var content = document.getElementById('content')
var score = document.getElementById('game-score')
var timer = document.getElementById('.timer')
var gameArea = document.querySelector('.game')
var questionArea = document.getElementById('question-area')
var questionText = document.getElementById('question-text')
var answerChoices = document.getElementById('answer-choices')
var optionOne = doucment.getElementById('option-one')
var optionTwo = doucment.getElementById('option-two')
var optionThree = doucment.getElementById('option-three')
var startGame = document.getElementById('start-game')

//Questions array
var questions = 
[
    {
        question: "What is 3x1?",
        answers: [
            {option: "0",answer:false},
            {option: "3",answer:true},
            {option: "4",answer:false},
        ]
    },
]
