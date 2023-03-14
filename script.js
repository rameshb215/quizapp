const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementId()",
        b: "getElementsByClassName()",
        c: "Both A and B",
        d: "None this above",
        correct: "c",
    },
    {
        question: "Which of the following is used to define a block of code in Python language?",
        a: "Indentation",
        b: "Key",
        c: " Brackets",
        d: "All of the mentioned",
        correct: "a",
    },
    {
        question: "When an operators value is NULL the typeof returned by the unary operator is",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        correct: "c",
    },
    {
        question: "What is React.js?",
        a: "Open-source JavaScript back-end library",
        b: " JavaScript front-end library to create a database",
        c: "Free and open-source JavaScript front-end library",
        d: "None of the mentioned",
        correct: "c",
    },
    {
        question: "Which of the following is an appropriate value for the overflow element?",
        a: "scroll",
        b: " hidden",
        c: "auto",
        d: "all of the mentioned",
        correct: "d",
    },
    {
        question: "Which of the following is not a core data type in Python programming?",
        a: "Tuples",
        b: "Lists",
        c: "Class",
        d: "Dictionary",
        correct: "c",
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        a: "stringfly()",
        b: "parse()",
        c: "convert()",
        d: "None of the above",
        correct: "a",
    },
    {
        question: " React.js is written in which of the following language?",
        a: "C",
        b: "C+",
        c: "JavaScript",
        d: "Java",
        correct: "c",
    },
    {
        question: "Which of the following is a Python tuple?",
        a: "{1, 2, 3}",
        b: "{}",
        c: "[1, 2, 3]",
        d: "(1, 2, 3)",
        correct: "d",
    },
    {
        question: "Which of the following CSS property is used to make the text bold?",
        a: " text-decoration: bold",
        b: "font-weight: bold",
        c: "font-style: bold",
        d: "text-align: bold",
        correct: "b",
    },
    {
        question: " Which HTML tag is used to insert an image?",
        a: " <img url=”htmllogo.jpg” />",
        b: "<img alt=”htmllogo.jpg” />",
        c: " <img src=”htmllogo.jpg” />",
        d: "<img link=”htmllogo.jpg” />",
        correct: "d",
    },
    {
        question: "Which of the following is used to pass data to a component from outside in React?",
        a: "props",
        b: "render with arguments",
        c: "setState",
        d: " PropTypes",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload..</button>
            `
        }
    }
})
