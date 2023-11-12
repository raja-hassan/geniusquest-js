const questions = [
    {
        question: 'What is the capital of France?',
        answers: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars'
    },
    {
        question: 'How many continents are there?',
        answers: ['4', '6', '7', '5'],
        correctAnswer: '7'
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: ['Elephant', 'Lion', 'Blue Whale', 'Giraffe'],
        correctAnswer: 'Blue Whale'
    },
    {
        question: 'Which gas do plants absorb from the atmosphere?',
        answers: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Methane'],
        correctAnswer: 'Carbon Dioxide'
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: ['China', 'India', 'Japan', 'Australia'],
        correctAnswer: 'Japan'
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Jupiter'
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
        correctAnswer: 'William Shakespeare'
    },
    {
        question: 'Which gas do humans breathe out when they exhale?',
        answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide'
    },
    {
        question: 'What is the largest organ in the human body?',
        answers: ['Brain', 'Heart', 'Skin', 'Liver'],
        correctAnswer: 'Skin'
    }
];

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    if (index < questions.length) {
        const question = questions[index];
        questionElement.innerText = question.question;
        answersElement.innerHTML = '';
        question.answers.forEach((answer) => {
            const button = document.createElement('button');
            button.innerText = answer;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => checkAnswer(answer, question.correctAnswer));
            answersElement.appendChild(button);
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
        resultElement.innerText = 'Correct!';
    } else {
        resultElement.innerText = 'Incorrect!';
    }
    nextButton.style.display = 'block';
    document.querySelectorAll('.answer-btn').forEach(button => button.disabled = true);
}

function endQuiz() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    answersElement.innerHTML = '';
    resultElement.innerText = '';
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', () => {
    document.querySelectorAll('.answer-btn').forEach(button => button.disabled = false);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
});

startQuiz();
