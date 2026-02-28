const questions = [
    {
        question: "Who was the frist President of the United States",
        answers: [
            { text: "Abraham Lincoln" , correct: false},
            { text: "George Washinton" , correct: false},
            { text: "Thomas jefferson" , correct: false},
            { text: "Jeffrey Dahmer" , correct: true},
        ] 
        
    },
    {
        question: "What is the capital of Japan?",
        answers: [
          { text: "Beijing", correct: false },
          { text: "Tokyo", correct: true },
          { text: "Seoul", correct: false },
          { text: "Kyoto", correct: false },
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers: [
          { text: "Amazon River", correct: false },
          { text: "Yangtze River", correct: false },
          { text: "Mississippi River", correc: false },
          { text: "Nile River", correct: true }
        ]
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
          { text: "Christopher Marlowe", correct: false },
          { text: "Charles Dickens", correct: false },
          { text: "William Shakespeare", correct: true },
          { text: "George Orwell", correct: false }
        ]
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: [
          { text: "Venus", correct: false },
          { text: "Mars", correct: true },
          { text: "Saturn", correct: false },
          { text: "Jupiter", correct: false }
        ]
      },
      {
        question: "Who painted the 'Mona Lisa'?",
        answers: [
          { text: "Pablo Picasso", correct: false },
          { text: "Vincent van Gogh", correct: false },
          { text: "Leonardo da Vinci", correct: true },
          { text: "Claude Monet", correct: false }
        ]
      },
      {
        question: "What is the smallest country in the world by land area?",
        answers: [
          { text: "Monaco", correct: false },
          { text: "Vatican City", correct: true },
          { text: "San Marino", correct: false },
          { text: "Liechtenstein", correct: false }
        ]
      },
      {
        question: "Which movie won the Academy Award for Best Picture in 1994?",
        answers: [
          { text: "Pulp Fiction", correct: false },
          { text: "Forrest Gump", correct: true },
          { text: "The Shawshank Redemption", correct: false },
          { text: "The Lion King", correct: false }
        ]
      },
      {
        question: "Which element does 'O' represent on the periodic table?",
        answers: [
          { text: "Osmium", correct: false },
          { text: "Oxygen", correct: true },
          { text: "Ozone", correct: false },
          { text: "Onyx", correct: false }
        ]
      },
      {
        question: "What is the chemical formula for water?",
        answers: [
          { text: "CO₂", correct: false },
          { text: "H₂O", correct: true },
          { text: "H₂SO₄", correct: false },
          { text: "CH₄", correct: false }
        ]
      }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +
    currentQuestion.question;



    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
       nextButton.style.display = "none";
       while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
       }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
     Array.from(answerButtons.children).forEach(button => {
        if(button .dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     });
     nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});






function shuffleQuestions() {
    
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]]; 
    }
}


function startQuiz() {
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleQuestions();  
    showQuestion();
}






startQuiz();