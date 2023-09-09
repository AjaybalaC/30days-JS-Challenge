const questions = [

    {
        question: "What is the capital of INDIA?",
        choices: ["Mumbai", "Chennai", "New Delhi", "Kerala"],
        correctAnswer: "New Delhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

function displayQuestion(question) {
    questionElement.textContent = question.question;
    choicesElement.innerHTML = '';

    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(choice, question.correctAnswer));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(userChoice, correctChoice) {
    if (userChoice === correctChoice) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz completed!";
    choicesElement.innerHTML = '';
    nextButton.style.display = "none";
    scoreElement.textContent = `Final Score: ${score}`;
}

displayQuestion(questions[currentQuestionIndex]);

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
});
