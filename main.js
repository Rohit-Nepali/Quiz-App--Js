//query selectors
const question = document.querySelector('#question');
const answerBtn = document.querySelector('#answer-buttons');
const nextBtn = document.querySelector('#next-btn');

//question bank
const que = [
    {
        question: "what is HTML?",
        answers: [
            { text: "Programming Language", correct: false },
            { text: "Scripting Language", correct: false },
            { text: "Markup Language", correct: true },
            { text: "Programming Language", correct: false },
        ]
    },
    {
        question: "what is the full form of CSS?",
        answers: [
            { text: "Cascading Style Sheet", correct: false },
            { text: "Classic Ctyling Sheet", correct: false },
            { text: "Closed Styling Script", correct: true },
            { text: "None of the above", correct: false },
        ]
    },
];

// functions
function quiz(){
    queIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next Question";
    displayQuestions();
}

function displayQuestions(){
    let currentQue = que[queIndex];
    let queNo = currentQue +1;
    question.innerHTML = queNo + ". " + currentQue.question;

    currentQue.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        })
}